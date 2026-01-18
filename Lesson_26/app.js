const express = require("express");
const app = express();
const { client } = require("./db/index");
// Initializing db variable later to ensure client is connected
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

    // Use await instead of callback
    // getting data from database 
    const data = await getDB().collection("plans_1").find().toArray();
    console.log("Plans fetched:", data);

    // Render the view with the fetched data
    // we made a variable called plans with value of data inside reja.ejs file
    res.render("reja", { plans: data });
  } catch (err) {
    console.log("Error fetching plans:", err);
    res.status(500).send("Something went wrong");
  }
});

// app.get("/author", (req, res) => {
//   res.render("author", { user: { name: "Alimardon", secName: "Dev" } });
// });


// this route is inserting data into database
app.post("/create-item", async (req, res) => {
  try {
    // to know if user visited this page
    console.log("User entered /create-item");

    // show the item created in input field
    console.log("Create item request:", req.body);

    // Insert the item into the database
    // input field has name = reja
    if (!req.body.reja) {
      return res.status(400).json({ error: "Item content is required" });
    }

    // Inserting data into database using await
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


module.exports = app;
