const express = require("express");
const app = express();
const http = require("http");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = require("./uri");

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

// Database reference (initialized synchronously, effectively valid after connect)
const db = client.db("Reja");

app.post("/create-item", async (req, res) => {
  try {
    console.log("User entered /create-item");
    console.log("Create item request:", req.body);
    // Insert the item into the database
    // Assuming the form sends 'item' as the key
    if (!req.body.item) {
      return res.status(400).json({ error: "Item content is required" });
    }

    await db.collection("plans").insertOne({ reja: req.body.item });

    // Respond with success
    res.json({ test: "success" });
  } catch (err) {
    console.error("Error creating item:", err);
    res.status(500).json({ error: "Failed to create item" });
  }
});

app.get("/author", (req, res) => {
  res.render("author", { user: { name: "Alimardon", secName: "Dev" } });
});

app.get("/", async (req, res) => {
  try {
    console.log("User entered /");
    console.log("Fetching plans...");
    // Use await instead of callback
    const data = await db.collection("plans").find().toArray();
    console.log("Plans fetched:", data);

    // Render the view with the fetched data
    res.render("reja", { items: data });
  } catch (err) {
    console.error("Error fetching plans:", err);
    res.status(500).send("Something went wrong");
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("Reja").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Start server only after successful DB connection
    const server = http.createServer(app);
    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`The server is running on PORT ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

run();
