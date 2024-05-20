const TenderApplication = require('../models/tenderApply');

// Create a new tender application
exports.applyTender = async (req, res) => {
  try {
    const {
      TenderRef,
      ContractValue,
      VendorID,
      Department,
      ContractType,
      sustainRating,
      fraud,
    } = req.body;

    const newTenderApplication = new TenderApplication({
      TenderRef,
      ContractValue,
      VendorID,
      Department,
      ContractType,
      sustainRating,
      fraud,
    });

    const savedTenderApplication = await newTenderApplication.save();
    res.status(201).json(savedTenderApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
