import React from 'react';
import ReactDOM from 'react-dom/client';

export function Chat({ webSocket }) {
    const [name, setName] = React.useState('');

    return (

        <main className="chat-container-wrapper">
            <div className="chat-container">
                <h1>Chat Room</h1>
                <div className='white-box'>
                    <Name updateName={setName} />
                    <Message name={name} webSocket={webSocket} />
                </div>
                <Conversation webSocket={webSocket} />
            </div>
        </main>

    );
}

function Name({ updateName }) {
    return (
        <div>
            <label htmlFor="my-name">My Name</label>
            <input
                id="my-name"
                type="text"
                onChange={(e) => updateName(e.target.value)}
                placeholder="Enter your name" />
        </div>
    );
}

function Message({ name, webSocket }) {
    const [message, setMessage] = React.useState('');

    function doneMessage(e) {
        if (e.key === 'Enter') {
            sendMsg();
        }
    }

    function sendMsg() {
        webSocket.sendMessage(name, message);
        setMessage('');
    }

    const disabled = name === '' || !webSocket.connected;
    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={doneMessage}
                placeholder="Type a message..."
                disabled={disabled} />
            <button onClick={sendMsg} disabled={disabled || !message}>
                Send
            </button>
        </div>
    );
}

function Conversation({ webSocket }) {
    const [chats, setChats] = React.useState([]);
    React.useEffect(() => {
        webSocket.addObserver((chat) => {
            setChats((prevMessages) => [...prevMessages, chat]);
        });
    }, [webSocket]);

    const chatEls = chats.map((chat, index) => (
        <div key={index}>
            <span className={chat.event}>{chat.from}</span> {chat.msg}
        </div>
    ));

    return (
        <div className='white-box'>{chatEls}</div>
    );
}

export class ChatClient {
    observers = [];
    connected = false;

    constructor() {
        // Adjust the webSocket protocol to what is being used for HTTP
        let port = window.location.port;
        const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        // Display that we have opened the webSocket
        this.socket.onopen = (event) => {
            this.notifyObservers('system', 'websocket', 'connected');
            this.connected = true;
        };

        // Display messages we receive from our friends
        this.socket.onmessage = async (event) => {
            const text = await event.data.text();
            const chat = JSON.parse(text);
            this.notifyObservers('received', chat.name, chat.msg);
        };

        // If the webSocket is closed then disable the interface
        this.socket.onclose = (event) => {
            this.notifyObservers('system', 'websocket', 'disconnected');
            this.connected = false;
        };
    }

    // Send a message over the webSocket
    sendMessage(name, msg) {
        this.notifyObservers('sent', 'me', msg);
        this.socket.send(JSON.stringify({ name, msg }));
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(event, from, msg) {
        this.observers.forEach((h) => h({ event, from, msg }));
    }
}
