const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const userSchema = new Schema({
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
  date: { default: Date.now(), type: Date },
});

userSchema.virtual("date_formatted").get(function () {
  return this.date
    ? DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED)
    : "Some point in time";
});

userSchema.virtual("member_status").get(function () {
  return this.member ? "Yes" : "No";
});

userSchema.virtual("admin_status").get(function () {
  return this.admin ? "Yes" : "No";
});

const User = mongoose.model("User", userSchema);

module.exports = User;
