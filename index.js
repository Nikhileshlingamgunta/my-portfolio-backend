const express = require('express');
const app = express();
var mongoose = require('mongoose');

// CORS configuration
// const corsOptions ={
//     origin:'*', 
//     credentials:true, 
//     optionSuccessStatus:200
// }
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
app.use(cors({
    "Access-Control-Allow-Origin": "*", // This allows all origins
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
  }));
