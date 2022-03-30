const express = require("express");
const app = express();

const Book = require("../models/book_model.js");

app.get("/", async (req, res) => {
    try {
      const book = await Book.find().populate("authorId").populate("sectionId")
      // .populate({path:"",select:{name:"",id:""}/select:["",""], populate:{ path:"",select:""}})-----------nested populate.
      .lean().exec();
  
      return res.status(200).send({ book: book }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  
  app.post("/", async (req, res) => {
    try {
      const book = await Book.create(req.body);
  
      return res.status(201).send(book);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  
  app.get("/:id", async(req,res)=>{
    try {
      const book = await Book.findById(req.params.id).populate("authorId").populate("sectionId").lean().exec();
      return res.status(200).send(book);
    } catch (error) {
      return res.status(500).send({message:err.message});
    }
  });


  app.patch("/:id", async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      return res.status(200).send(book);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.delete("/:id", async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
      return res.status(200).send(book);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = app;