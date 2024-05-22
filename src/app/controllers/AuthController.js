const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const storage = require("../../services/uploadImage");

class AuthController {
  async register(req, res, next) {
    const upload = multer({ storage: storage }).single("avatar");
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "Lỗi tải lên tệp" });
      } else if (err) {
        return res.status(500).json({ error: "Lỗi tải lên tệp" });
      } else {
        try {
          const { username, email, password, address } = req.body;
          const salt = await bcrypt.genSalt(10);
          const hashed = await bcrypt.hash(password, salt);
          const avatar = req.file ? req.file.originalname : null;
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            return res.status(400).json({ error: "The user already exists." });
          } else {
            const newUser = new User({
              username,
              email,
              password: hashed,
              address,
              avatar,
              role: 2,
            });
            const user = await newUser.save();
            return res.status(200).json({
              message: "Register user successfully.",
              data: user,
            });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
    });
  }
}

module.exports = new AuthController();
