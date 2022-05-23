const express = require("express");
const router = express.Router();
const scheduleController  = require('../controllers/scheduleController')
//const mysqlConnection  = require('../database');

router.post("/schedule", scheduleController.index);
router.get("/test", async (req, res) => {
    res.json({ message: "pass!" });
  });

/* export default router; */
module.exports = router;
