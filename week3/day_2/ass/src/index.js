const express = require("express");

const userController = require("./controllers/users_controller");
const galleryController = require("./controllers/gallery_controller");

const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/gallery", galleryController);

module.exports = app;