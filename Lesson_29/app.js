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
  try {  
    // getting clicked button id from front-end page
    // and the button id is used to delete data from database
    const id = req.body.id;

    // this returns if deleted or not
    // deleteOrNot = {acknowledge: true,
    //   deleteCount: 1
    // }
    const deletedOrNot =
     await getDB()
                .collection("plans").deleteOne({_id: new ObjectId(id)})

    // console.log(deletedOrNot);
    
    if (deletedOrNot.acknowledged){
      res.json({state: "Success"});
      console.log("Successfully deleted and sent a response to front-end", id)
    }
  } catch (error) {
    console.log("Something went wrong during deleting: ", err);    
  }
});

// editing and sending new data to front-end 
app.post("/edit-item", async (req, res) => {
  try {
  // modified data came from front-end
  const data = req.body;
  console.log(data);
  
  const editedValue = await getDB()
    .collection("plans")
    .findOneAndUpdate(
      {_id: new ObjectId(data.id)},
      {$set: {reja: data.new_input}}
      
    );
    res.json({ 
      test:"Success",
      updatedItem: editedValue.value
    })
      console.log("Database'ga kiritildi");
  }
  catch(err){
    console.log("Error occured while Editing");
  }
});

app.post("/delete-all", async (req, res)=> {
  try {
    if (req.body.delete_all) {
    await getDB().collection("plans").deleteMany(()=>{
      res.json({state: "Hammasi o'chdi"});
    })}
  
  } catch (err) {
    console.log("Error occured while deleting all the plans", err);
  }
})

module.exports = app;
