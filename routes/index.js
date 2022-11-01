const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const messageController = require("../controllers/messageController");
const authenticationController = require("../controllers/authenticationController");
const indexController = require("../controllers/indexController");

// Index routes
router.get("/", indexController.index);
router.post("/", messageController.delete_message_post);

//About route
router.get("/about-us", userController.get_about);

// Sign up routes

router.get("/sign-up", authenticationController.get_signup);
router.post("/sign-up", authenticationController.post_signup);

//Log-in, log-out routes
router.get("/log-in", authenticationController.get_login);
router.post("/log-in", authenticationController.post_login);
router.get("/log-out", authenticationController.get_logout);

//Member routes

router.get("/member", userController.get_member);
router.post("/member", userController.post_member);

//Message routes
router.get("/create-message", messageController.create_get_message);
router.post("/create-message", messageController.create_message_post);

//Admin routes
router.get("/admin", userController.get_admin);
router.post("/admin", userController.post_admin);

module.exports = router;
