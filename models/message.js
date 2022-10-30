const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true, minLength: 1, maxLength: 50 },
  text: { type: String, required: true, maxLength: 1000 },
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
