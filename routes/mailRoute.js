const express = require("express");
const { addQuote } = require("../Controllers/mailController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/sendmail", addQuote);

module.exports = router;
