What I learnt 
    Axios
        tool to send data to backend(server)
        a communication tool between server and browser


User clicks submit
↓
browser.js intercepts submit
↓
Axios sends POST /create-item (background)
↓
Express app.post("/create-item") receives it
↓
MongoDB insert
↓
res.json(...) sends response back
↓
browser.js .then(...) updates the UI

| Old form              | Axios               |
| --------------------- | ------------------- |
| Browser sends request | JS sends request    |
| Page reloads          | No reload           |
| User “visits” route   | Background request  |
| Server returns HTML   | Server returns JSON |

app.post()
    receives POST request 
    handles the POST request 
    sends the coming data to database
    the POST request can come from
        browser
        AxiosJS
app.get()
    runs the specific function, when GET request is sent to server

