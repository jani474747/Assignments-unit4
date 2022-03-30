const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "446beb2ff79d5e", // generated ethereal user
    pass: "aa2fbc83f3519f", // generated ethereal password
  },
});
