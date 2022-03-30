const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://atin_sahu:atinsahu12345@cluster0.afxl8.mongodb.net/authentication?retryWrites=true&w=majority");
};