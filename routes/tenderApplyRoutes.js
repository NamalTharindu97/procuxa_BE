const express = require("express");
const { applyTender } = require("../Controllers/TenderApplyController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/apply", applyTender);

module.exports = router;
