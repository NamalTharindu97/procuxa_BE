const express = require('express');
const router = express.Router();
const {
  addTenderNotice,
  getAllTenderNotices,
} = require('../Controllers/TenderNoticeController');

// Add routes
router.post('/add', addTenderNotice);
router.get('/', getAllTenderNotices);

module.exports = router;
