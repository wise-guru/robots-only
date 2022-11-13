const Message = require("../models/message");
const User = require("../models/user");

exports.index = async (req, res, next) => {
  try {
    // Populate message with "user" information (reference to user in model)
    const messages = await Message.find()
      .sort([["date", "descending"]])
      .populate("user");
    return res.render("index", {
      title: "Robots only",
      user: req.user,
      messages: messages,
      // userMessages: userMessages,
    });
  } catch (err) {
    return next(err);
  }
};
