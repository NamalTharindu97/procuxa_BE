const express = require("express");
const {
  getContact,
  postContact,
  getOneContact,
  deleteContact,
  updateContact,
} = require("../Controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.use(validateToken); //for use validate token to all the contacts routes

router.route("/").get(getContact);
router.route("/").post(postContact);
router.route("/:id").get(getOneContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);

module.exports = router;
