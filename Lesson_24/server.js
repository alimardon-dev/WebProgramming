const http = require("http");
const { MongoClient } = require("mongodb");
const app = require("./app");

const connectionString = "mongodb+srv://alimardon-dev:%24Alimardon2004@cluster0.5gltfie.mongodb.net";

const client = new MongoClient(connectionString);

async function startServer() {
    try {
        await client.connect();
        console.log("MongoDB connection Succeed");
        const db = client.db();

        // Make db available to requests via app.locals or middleware
        // This is a common pattern to pass db to routes
        app.locals.db = db;

        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`The server is running on PORT ${PORT}`);
        });
    } catch (err) {
        console.log("ERROR on connection MongoDB", err);
    }
}

startServer();