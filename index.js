const express = require('express');
const app = express();
var mongoose = require('mongoose');


const cors = require('cors');

var routes = require('./routes/routes')
const uri = "mongodb+srv://lnikhilesh1705:OnmHuPvXV8e7UXLM@responses.rftdve0.mongodb.net/Portfolio";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to Database");
    } catch(error) {
        console.error(error);
    }
}
connect();

app.listen(8086, () => {
    console.log("SERVER RUNS PERFECTLY!");
    
});

app.use(cors());
app.use(express.json());
app.use(routes);
