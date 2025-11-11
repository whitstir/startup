const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const choreCollection = db.collection('chores');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addChore(chore) {
  await choreCollection.insertOne(chore);
}

async function getEmailChore(email) {
  await choreCollection.find({email}).toArray();
}

async function deleteChore(id, email) {
  const { ObjectId } = require('mongodb');
  await choreCollection.deleteOne({ _id: new ObjectId(id), email });
}



module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addChore,
  getEmailChore,
  deleteChore,
};