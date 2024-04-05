const express = require('express');
const app = express();
var mongoose = require('mongoose');

// CORS configuration
const corsOptions = {
    origin: 'https://nikhileshlingamgunta.netlify.app', // or use '*' to allow any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
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
app.use(cors(corsOptions));

