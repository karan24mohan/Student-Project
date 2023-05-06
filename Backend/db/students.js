const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
    name: "String",
    age: "number",
    price: "number",
});

module.exports = mongoose.model("students", studentsSchema);