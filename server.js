const express = require("express");


const port = 8000;

const app = express();  //initializes express application and references it using the variable 'app'

require("./server/config/mongoose.config");

    //make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


require("./server/routes/jokes.routes")(app) 

app.get("/api", (req, res) =>{
    res.json({message: "Got Jokes"});
})

