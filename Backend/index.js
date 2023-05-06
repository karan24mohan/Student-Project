const express = require("express");
require("./db/config");
const students = require("./db/students");
const cors = require("cors");
const app = express();

const port = 2300;

app.use(express.json());
app.use(cors());

app.get("/", async(req, resp) => {
    let result = await students.find();
    resp.send(result);
});

app.post("/addStudent", async(req, resp) => {
    let data = new students(req.body);
    let result = await data.save();
    resp.send(result);
});

app.listen(port);