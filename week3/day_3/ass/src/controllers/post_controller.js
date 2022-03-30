const express = require("express");

const Post = require("../models/post_model");
const authenticate = require("../middlewares/authenticate")
const router = express.Router();

router.get("/", authenticate, async(req,res)=>{
    try {
        const posts = await Post.find().lean().exec();
        return res.status(200).send(posts);
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
});


router.post("/", authenticate, async (req, res) => {
    req.body.user = req.userID
    try{
        const posts = await Post.create(req.body)
        return res.status(200).send(posts)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

router.patch("/:id", authenticate, async (req, res) => {
    try{
        const updates = await Post.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.status(200).send(updates)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

router.delete("/:id", authenticate, async (req, res) => {
  try {
    const deletes = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).send(deletes);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;