const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new Schema({
    username: { required: true, type: String },
    // email: { required: true, type: String },
    password: { required: true, type: String },
    member: { type: Boolean, default: false },
    admin: { type: Boolean, default: false },
    avatar: {
      type: String,
      required: true,
      enum: ["clank", "baymax", "bender", "r2d2", "wall-e", "courtney"],
      default: "courtney",
    },
    // icon: {
    //   type: String,
    //   required: true,
    //   ref: "Icon",
    //   enum: [
    //     "/images/clank.webp",
    //     "/images/baymax.png",
    //     "/images/bender.jpeg",
    //     "/images/r2d2.jpg",
    //     "/images/wall-e.png",
    //     "/images/courtney.png",
    //   ],
    //   default: "/images/courtney.png",
    // },
    date: { type: Date, default: Date.now() },
  })
);

module.exports = User;
