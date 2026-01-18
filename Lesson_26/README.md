This is mainly about CRUD operations and showing the database info in front-end page


Real-world clean backend file structure
    project/
        server.js
        app.js
        db/
            index.js
        routes/
            plans.routes.js
            pages.routes.js
        controllers/
            plans.controller.js
        views/
            front-end pages
        public/
            front-end pages

server.js
    connects database
    starts listening on a specific port
app.js
    backend rules 
    routes 
    settings
index.js
    database parts
routes/
    URL definitions
controllers/
    CRUD operations
    actual logic
    


Always try to use try/catch block to work with routers Ex. --> app.get("./") 
    to prevent error
    to know where it actually occured
    to know exactly what error occured

await db.collection("plans").insertOne({ reja: req.body.item });
    this code helps to insert data into database
    reja = keyword in database 
        when we save values its key in database is reja
    req.body.item => {input.name=item} 
        input name becomes req.body's part
res
    res.send()
        sends every type of data
            HTML
            JSON
            text
            object
            number
    res.render()
        sends a front-end page to the router
    res.json()
        sends json type data to the browser

req
    req.body
        it is the object came from browser 
        mainly used to work with data comes from input tag
    
input.name = "reja"
"reja" = req.body.reja
    when we assign a value for input name it will become part of req.body


        
