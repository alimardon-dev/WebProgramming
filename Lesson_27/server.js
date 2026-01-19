const http = require("http");
const { connectDB } = require("./db/index");
const app = require("./app");

// Database reference (initialized synchronously, effectively valid after connect)


// this function helps connect database to server and connects server to browser using http
// if database is not connected it refuses to connect server to browser 
async function run() {
  try {

    await connectDB();
    // await client.connect();
    // await client.db("Reja").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Start server only after successful DB connection
    const server = http.createServer(app);
    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`The server is running on PORT ${PORT}`);
    });
  } catch (err) {
    console.log("ERROR occured somewhere go and find it haha");
  }
}

run();