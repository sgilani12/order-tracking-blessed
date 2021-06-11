const express = require("express");

const logoutRouter = express.Router();
const loginController = require("../controllers/loginController");

logoutRouter.route('/')
    .get(loginController.logout)


module.exports = logoutRouter;
