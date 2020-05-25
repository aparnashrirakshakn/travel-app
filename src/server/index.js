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
      res.status(201).send(plans);
    }
    else {
        res.status(400).send("Invalid request. No plan details available.");
    }
};

// get plans
const getPlansListener = (req, res) => {
    res.status(200).send(plans);
}


/*
 * Endpoints
 */

// test
app.get('/test', testListener);

// render
app.get('/', renderListener);

// save
app.post('/plan/save', savePlanListener);

// get plans
app.get('/plans', getPlansListener);


// server listens
const port = 8081;
app.listen(port, appListener);