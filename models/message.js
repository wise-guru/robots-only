const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { required: true, type: String },
  user: { required: true, type: Object },
  date: { default: Date.now(), type: Date },
});

MessageSchema.virtual("date_formatted").get(function () {
  return this.date.toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minutes: "2-digit",
  });
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
