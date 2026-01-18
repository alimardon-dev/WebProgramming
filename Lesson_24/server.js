// server file decidec WHEN and HOW to start listening
const http = require("http");

// importing preexisting app(rules and routes)
const app = require("./app");

// importing connection instance
const client = require("./db");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// creating mongoclient inctance to connect(get and send data) to database


// console.log(client);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });

    // command method sends a ping to confirm if CONNECTED or NOT. 
    // command method does not check for whether database exists or not  
    const availabiltyCheck = await client.db("reja").command({ ping: 1 });
    // console.log(availabiltyCheck);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // console.log(client.db("admin").command())
  }catch(err){
    console.log(err);
  } 
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run();

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, ()=>{
  console.log("The server is running on server");
});


module.exports = client;

