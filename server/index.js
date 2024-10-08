const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
const port = 3000;

// routes

const questionRoutes = require("./routes/questionRoutes");
const referenceRoutes = require('./routes/referenceRoutes');
const scoreRoutes = require('./routes/scoreRoutes');

// express functions
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// testing
app.get("/", (req, res) => { 
    res.json({info: "Hello World! from Node.js, Express, and PostgreSQL!"});
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// endpoints
app.use("/question", questionRoutes);
app.use('/reference', referenceRoutes);
app.use('/score', scoreRoutes);

            