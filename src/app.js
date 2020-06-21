const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const countryRouter = require("./routes/country-router");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// routers middleware
app.use("/countries", countryRouter);


app.get("/", (req, res) => {
    res.status(200).send(" ----  Address Microservice  ---- ");
})

app.use("", (req, res) => {
    res.status(404).send("Opps! 404 Not Found.");
})


const localDBConnection = "mongodb://localhost/AddressDB";
// const cloudDBConnection = process.env.DB_CONNECTION;

mongoose.connect(localDBConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Connected to DB.");
    }
}
);

app.listen(process.env.PORT || 4040, () => {
    console.log("App Started.");
})