import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

export function unauthenticated({userName: initialUserName, onLogin}) {
    const [userName, setUserName] = useState(initialUserName);
}