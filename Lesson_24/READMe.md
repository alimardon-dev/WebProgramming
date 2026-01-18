MongoDB connections

http module 
    communication tool between server and browser
express framework
    nodejs framwork that helps to work with servers easely 
MongoClient
    help to communicate with mongodb
        connects to database
        get data from database
        send data to database
        type = function class
        its instance type = object 
    Mongoclient = blueprint
    client(instance) = robot built from blueprint
        we talk to robot made by blueprint
            not the blueprint
ServerApiVersion
    tell the which rule to play with 
strict: true
    tells to play with the given rule no matter what
deprecationErrors: true
    prevents to use old features of mongodb library and consider them as depreciated
    if the system notices the use of old features it stops running and shows warning
client.connect()
    connects to database
client.db(database_name)
    chooses which database to use
client.db(db_name).command({ping: 1})
    command method send a ping to mongodb server to check if connection successful or not
    