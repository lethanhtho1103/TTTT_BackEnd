const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  address: {
    type: String,
    required: true,
    minLength: 5,
  },
  avatar: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("User", User);
