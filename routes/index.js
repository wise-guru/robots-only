const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const messageController = require("../controllers/messageController");
const authenitcationController = require("../controllers/authenticationController");
const indexController = require("../controllers/indexController");

// Index routes
router.get("/", indexController.index);
router.post("/", messageController.delete_message_post);

// Sign up routes

router.get("/sign-up", authenitcationController.get_signup);
router.post("/sign-up", authenitcationController.post_signup);

router.get("/create-message", messageController.create_get_message);
router.post("/create-message", messageController.create_message_post);

//Log-in, log-out routes
router.get("/log-in", authenitcationController.get_login);
router.post("/log-in", authenitcationController.post_login);
router.get("log-out", authenitcationController.get_logout);

//Member routes

router.get("/member", userController.get_member);
router.post("/member", userController.post_member);

//Admin routes
router.get("/admin", userController.get_admin);
router.post("/admin", userController.post_admin);

module.exports = router;
