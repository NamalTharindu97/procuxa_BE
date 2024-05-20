const asyncHandler = require('express-async-handler');
const TenderNotice = require('../models/tenderNoticeModel');

//@desc POST add a tender notice
//@Route POST api/tender-notices/add
//@access public
const addTenderNotice = asyncHandler(async (req, res) => {
  const {
    tenderId,
    tenderName,
    category,
    source,
    location,
    publishDate,
    closingDate,
    refNumber,
  } = req.body;

  // Check if all required fields are provided
  if (
    !tenderId ||
    !tenderName ||
    !category ||
    !source ||
    !location ||
    !publishDate ||
    !closingDate ||
    !refNumber
  ) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }

  // Check if the tender ID or reference number already exists
  const existingTender = await TenderNotice.findOne({
    $or: [{ tenderId }, { refNumber }],
  });
  if (existingTender) {
    res.status(400);
    throw new Error('Tender ID or Reference number already exists');
  }

  // Create the tender notice
  const tenderNotice = await TenderNotice.create({
    tenderId,
    tenderName,
    category,
    source,
    location,
    publishDate,
    closingDate,
    refNumber,
  });

  res.status(201).json(tenderNotice);
});

//@desc GET all tender notices
//@Route GET api/tender-notices
//@access public
const getAllTenderNotices = asyncHandler(async (req, res) => {
  const tenderNotices = await TenderNotice.find({});
  res.status(200).json(tenderNotices);
});

module.exports = { addTenderNotice, getAllTenderNotices };
