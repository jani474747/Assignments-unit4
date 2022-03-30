const express = require("express");
const userController = require("./controllers/user_controller")
const postController = require("./controllers/post_controller")

const {register,login} = require("./controllers/authenticate_controller");

const app = express();

app.use(express.json());

app.use("/users",userController);
app.use("/posts",postController);

app.post("/register", register)
app.post("/login", login)


module.exports = app;