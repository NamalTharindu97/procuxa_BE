const mongoose = require('mongoose');

const tenderSchema = mongoose.Schema(
  {
    tenderId: {
      type: String,
      required: [true, 'Please add the tender ID'],
      unique: true,
    },
    tenderName: {
      type: String,
      required: [true, 'Please add the tender name'],
    },
    category: {
      type: String,
      required: [true, 'Please add the category'],
    },
    source: {
      type: String,
      required: [true, 'Please add the source'],
    },
    location: {
      type: String,
      required: [true, 'Please add the location'],
    },
    publishDate: {
      type: Date,
      required: [true, 'Please add the publish date'],
    },
    closingDate: {
      type: Date,
      required: [true, 'Please add the closing date'],
    },
    refNumber: {
      type: String,
      required: [true, 'Please add the reference number'],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Tender', tenderSchema);
