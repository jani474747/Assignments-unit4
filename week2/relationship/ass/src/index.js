const express = require("express");

const app = express();

app.use(express.json());


// database

const connect = require("./configs/db.js");


// controllers

const sectionControllers = require("./controllers/section_controll.js");
const authorControllers = require("./controllers/author_controll.js");
const bookControllers = require("./controllers/book_controll.js");


// route+model

app.use("/sections", sectionControllers);
app.use("/authors", authorControllers);
app.use("/books", bookControllers);




app.listen(5000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 5000");
});
