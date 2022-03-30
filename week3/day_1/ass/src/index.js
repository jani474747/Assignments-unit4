const express = require("express");
const userController = require("./controllers/user_controller");
const app = express();
// const { json } = require("stream/consumers");
app.use(express.json());

app.use("/users",userController);

module.exports = app;

