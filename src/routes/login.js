const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const loginController = require('../controllers/loginController');

// Admin Login
router.post('/signup', loginController.register); //register new user
router.post('/login', loginController.login);   //login

module.exports = router;
