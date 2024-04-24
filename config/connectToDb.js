// responsible for connecting the Mongoose DB to the Express Server Application
require("dotenv").config(); // <-- require env

const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;

const connectToDb = async () => {
    await mongoose.connect(DB_URL);
    console.log("konnekted to kluster");
}

module.exports = connectToDb;