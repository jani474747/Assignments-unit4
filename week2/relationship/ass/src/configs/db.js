const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
      "mongodb+srv://atin_sahu:atinsahu12345@cluster0.afxl8.mongodb.net/fw15?retryWrites=true&w=majority"
    );
  };

 module.exports = connect;