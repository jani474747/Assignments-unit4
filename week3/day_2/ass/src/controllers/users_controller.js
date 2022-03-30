const express = require("express");

const User = require("../models/users_model");

const upload = require("../middleware/upload");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", upload.single("profilePic"), async (req, res) => {
  try {
    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profilePic: req.file.path,
    });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// router.post("/multiple", upload.any("profilePic"), async (req, res) => {
//   try {
//     const filePaths = req.files.map((file) => {
//       return file.path;
//     });

//     const user = await User.create({
//       first_name: req.body.first_name,
//       last_name: req.body.last_name,
//       profilePic: filePaths,
//     });

//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

module.exports = router;
