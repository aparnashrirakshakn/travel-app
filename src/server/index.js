const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

app.use(express.static('dist'));

const port = 8081;
app.listen(port, appListener);

// global variables
let plans = [];

/**
 * Listeners
 */

// app
const appListener = () => {
    console.log(`Server is listening on port ${port}`);
}

// test
const testListener = (req, res) => {
    res.status(200).send("Test Successful!");
};

// get
const renderListener = (req, res) => {
    res.sendFile('dist/index.html');
}

// save
const savePlanListener = (req, res) => {
    if(req.body) {
      plans.push(req.body.plan);  
    }
    else {
        res.status(400).send("Invalid request. No plan details available.");
    }
};


/*
 * Endpoints
 */

// test
app.get('/test', testListener);

// get
app.get('/', renderListener);

// save
app.post('/plan/save', savePlanListener);
