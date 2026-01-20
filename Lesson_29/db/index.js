const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = require("../uri");

// creating mongodb client instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

// connection function
async function connectDB() {
  await client.connect();
  db = client.db("Reja");

  await client.db("Reja").command({ ping: 1 });

  console.log("✅ Connected to MongoDB (ping ok)");
  return db;
} 

// checking function for connection function
function getDB() {
  if (!db) throw new Error("DB not connected yet. Did you call connectDB()?");
  return db;
}

module.exports = {connectDB, getDB, client};