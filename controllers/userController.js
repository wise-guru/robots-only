const User = require("../models/user");
const { body, validationResult } = require("express-validator");

exports.get_about = (req, res, next) => {
  return res.render("about_us", {
    title: "About Us",
    user: res.locals.currentUser,
  });
};

exports.get_member = (req, res, next) => {
  if (!res.locals.currentUser) {
    // User cannot access the members form unless logged in
    return res.redirect("/log-in");
  }
  return res.render("become_member", {
    title: "Become a Member",
    user: res.locals.currentUser,
  });
};

exports.post_member = [
  body("passcode")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Passcode must be specified."),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // If there is an error submitting the member validation form, re-render the form with an error
      return res.render("become_member", {
        title: "Become a Member",
        user: res.locals.currentUser,
        errors: errors.array(),
      });
    } else if (req.body.passcode != process.env.MEMBER_PASSCODE) {
      return res.render("become_member", {
        title: "Become a Member",
        user: res.locals.currentUser,
        passcodeError: "Wrong Passcode",
      });
    }

    const user = new User(res.locals.currentUser);
    user.member = true;

    await User.findByIdAndUpdate(
      res.locals.currentUser._id,
      user,
      {},
      (err) => {
        if (err) return next(err);
        return res.redirect("/member");
      }
    );
  },
];

exports.get_admin = (req, res, next) => {
  if (!res.locals.currentUser) {
    // User cannot access the members form unless logged in
    return res.redirect("/log-in");
  }
  return res.render("become_admin", {
    title: "Become an Admin",
    user: res.locals.currentUser,
  });
};

exports.post_admin = [
  body("passcode")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Passcode must be specified."),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // If there is an error submitting the member validation form, re-render the form with an error
      return res.render("become_admin", {
        title: "Become an Admin",
        user: res.locals.currentUser,
        errors: errors.array(),
      });
    } else if (req.body.passcode != process.env.ADMIN_PASSCODE) {
      return res.render("become_admin", {
        title: "Become an Admin",
        user: res.locals.currentUser,
        passcodeError: "Wrong Passcode",
      });
    }

    const user = new User(res.locals.currentUser);
    user.admin = true;

    await User.findByIdAndUpdate(
      res.locals.currentUser._id,
      user,
      {},
      (err) => {
        if (err) return next(err);
        return res.redirect("/");
      }
    );
  },
];
