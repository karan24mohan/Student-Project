const express = require("express");
require("./db/config");
const students = require("./db/students");
const cors = require("cors");
const app = express();

const port = 2300;

app.use(express.json());
app.use(cors());

app.get("/", async (req, resp) => {
  let result = await students.find();
  resp.send(result);
});

app.post("/addStudent", async (req, resp) => {
  let data = new students(req.body);
  let result = await data.save();
  resp.send(result);
});

app.delete("/delete/:id", async (req, resp) => {
  let result = await students.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get("/edit/:id", async (req, resp) => {
  let result = await students.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send("No Student Found");
  }
});

app.put("/edit/:id", async (req, resp) => {
  let result = await students.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});

app.listen(port);
