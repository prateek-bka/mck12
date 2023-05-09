const express = require("express");

const connection = require("./db");

const { userRouter } = require("./Routes/User.routes.js");

const { authenticate } = require("./Middlewares/authenticate.middleware");

const { EmployeeRouter } = require("./Routes/Employee.routes");

require("dotenv").config();

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  let initialData = `Welcome to Employee Managment`;
  res.send(initialData);
});

app.use("/", userRouter);

app.use("/employees", authenticate, EmployeeRouter);

app.listen(process.env.Port, async () => {
  try {
    await connection;
    console.log("Connected to the MongoDatabase");
  } catch (error) {
    console.log(error.message);
  }

  console.log(`Server is running at port ${process.env.Port}`);
});
