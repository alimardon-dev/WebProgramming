const express = require("express");
const app = express();
const { client } = require("./db/index");
const {ObjectId} = require("mongodb")
// getting database object if it connects to database
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

// getting data from database and sending it to rejs.js
app.get("/", async (req, res) => {
  try {
    console.log("User entered / ");
    console.log("Fetching plans...");
    
    // getting data from database    
    const data = await getDB().collection("plans").find().toArray();
    console.log("Plans fetched:", data.length);

    // sending an object called plans
    // plans = data
    // {plans} in rejs.js
    // {data} in database
    // data.key = plans.key 
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
    
    // checking if empty
    // if (!req.body.reja) {
      console.log("Create item request:", req.body);
      console.log("Item not created!");
      // return res.status(400).json({ error: "Item content is required" });
    // }else{
    
      // inserting data to database with key called plan
    // clustur_name = clustur_0
    // database_name = reja
    // collection_name = plans_1
    // Collection_key_name = body 
    const result = await getDB().collection("plans").insertOne({ reja: req.body.reja});
    
    // this object goes back to front-end page to get added as new item
    const newPlan = {
      _id: result.insertedId,
      reja: req.body.reja,
    };
    
    console.log("New plan created:", req.body);
    
    // sending the variable to front-end to add new item in front-end page
    res.json(newPlan);
    // }
  } catch (err) {
    console.error("Error creating item:", err);
    res.status(500).json({ error: "Failed to create item" });
  }
});

app.post("/delete-item", async (req, res) => {
  
  // getting clicked button id from front-end page
  // and the button id is used to delete data from database
  const id = req.body.id;
  getDB()
    .collection("plans").deleteOne({_id: new ObjectId(id)}, (err, data)=>{
      res.json({state: "Success"})
      console.log("Successfully deleted")
  })
  console.log(id);
  res.end("Done");
});


// app.get("/author", (req, res) => {
//   res.render("author", { user: { name: "Alimardon", secName: "Dev" } });
// });

module.exports = app;
