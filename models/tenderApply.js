const mongoose = require('mongoose');

const tenderApplySchema = mongoose.Schema(
  {
    TenderRef: {
      type: String,
      required: [true, 'please add the tender reference'],
    },
    ContractValue: {
      type: Number,
      required: [true, 'please add the contract value'],
    },
    VendorID: {
      type: String,
      required: [true, 'please add the vendor ID'],
    },
    Department: {
      type: String,
      required: [true, 'please add the department'],
    },
    ContractType: {
      type: String,
      required: [true, 'please add the contract type'],
    },
    sustainRating: {
      type: String,
      required: [true, 'please add the sustainability rating'],
    },
    fraud: {
      type: Number,
      required: [true, 'please add the fraud rating'],
      min: 0,
      max: 10,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('applytenders', tenderApplySchema);
