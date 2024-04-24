const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    name: { type: String, require: true },
    countryOfOrigin: { type: String, require: true },
    scientificName: {type: String, require: true }
}, { timestamps: true });

const Fruit = mongoose.model("Fruit", Schema);

module.exports = Fruit;