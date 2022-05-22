const express = require("express");
const router = express.Router();
const scheduleController  = require('../controllers/scheduleController')
//const mysqlConnection  = require('../database');

router.get("/schedule", scheduleController.index);

/* export default router; */
module.exports = router;
