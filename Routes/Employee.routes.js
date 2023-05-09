const express = require("express");

const { EmployeeModel } = require("../Models/Employee.model");

const EmployeeRouter = express.Router();

EmployeeRouter.get("/", async (req, res) => {
  let user = req.body.user;
  try {
    const posts = await EmployeeModel.find({ user });
    res.send(posts);
  } catch (error) {
    res.send(error.message);
  }
});

EmployeeRouter.post("/add", async (req, res) => {
  try {
    const payload = req.body;
    const post = new EmployeeModel(payload);
    await post.save();
    console.log(post);
    res.send({ msg: "Employee Data Created" });
  } catch (error) {
    res.send({ msg: error.message });
  }
});

EmployeeRouter.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await EmployeeModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send("Employee data has been updated");
  } catch (error) {
    res.send({ msg: error.message });
  }
});

EmployeeRouter.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await EmployeeModel.findByIdAndDelete({ _id: ID });
    res.send("Congratulation Employee data has been deleted");
  } catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = {
  EmployeeRouter,
};
