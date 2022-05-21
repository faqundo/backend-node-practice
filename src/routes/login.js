const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const loginController = require('../controllers/loginController');

// POST register user
router.post('/signup', loginController.register);










module.exports = router;
