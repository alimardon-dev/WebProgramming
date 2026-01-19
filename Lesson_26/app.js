const express = require("express");
const app = express();
const { client } = require("./db/index");
let db;
const getDB = () => {
  if (!db) db = client.db("Reja");
  return db;
};

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    console.log("User entered / ");
    console.log("Fetching plans...");

    const data = await getDB().collection("plans_1").find().toArray();
    console.log("Plans fetched:", data);

    res.render("reja", { plans: data });
  } catch (err) {
    console.log("Error fetching plans:", err);
    res.status(500).send("Something went wrong");
  }
});



// this route is inserting data into database
app.post("/create-item", async (req, res) => {
  try {
    console.log("User entered /create-item");
    
    console.log("Create item request:", req.body);
    
    if (!req.body.reja) {
      return res.status(400).json({ error: "Item content is required" });
    }
    
    const result = await getDB().collection("plans_1").insertOne({ plan: req.body.reja });
    
    // Respond with the newly created item
    // MongoDB v7 insertOne returns an object with insertedId
    const newPlan = {
      _id: result.insertedId,
      plan: req.body.reja
    };
    
    console.log("New plan created:", newPlan);
    res.json(newPlan);
  } catch (err) {
    console.error("Error creating item:", err);
    res.status(500).json({ error: "Failed to create item" });
  }
});

// app.get("/author", (req, res) => {
//   res.render("author", { user: { name: "Alimardon", secName: "Dev" } });
// });

module.exports = app;
