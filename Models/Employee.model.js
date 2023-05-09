const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  department: String,
  salary: Number,
});

const EmployeeModel = mongoose.model("post", EmployeeSchema);

module.exports = {
  EmployeeModel,
};
