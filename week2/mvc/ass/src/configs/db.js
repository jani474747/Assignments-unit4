// mongodb+srv://atin_sahu:atinsahu12345@cluster0.pyq9r.mongodb.net/mvc?retryWrites=true&w=majority

const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://atin_sahu:atinsahu12345@cluster0.pyq9r.mongodb.net/mvc?retryWrites=true&w=majority");
};