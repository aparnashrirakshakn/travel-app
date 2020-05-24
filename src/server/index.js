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
app.listen(port, listener);

function listener() {
    console.log(`Server is listening on port ${port}`);
}


// test endpoint

app.get('/test', (req, res) => {
    res.status(200).send("Test Successful!");
});

