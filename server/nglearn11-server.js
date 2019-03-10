require('dotenv').config({path:__dirname+'/.env'});
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var bindApiRoutes = require('./modules/api.routes');


var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hi there");
});

bindApiRoutes(app);

app.listen(process.env.PORT, () => {
    console.log("Nglearn11 Server is running at PORT "+ process.env.PORT);
})