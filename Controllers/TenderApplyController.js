const asyncHandler = require("express-async-handler");
const Tender = require("../models/tenderApply");

const applyTender = asyncHandler(async (req, res) => {
	const { user_id, name, email, phone } = req.body;

	if (!user_id || !email || !name || !phone) {
		res.status(400);
		throw new Error("All fields are mandatory");
	}

	const userAvailable = await Tender.findOne({ email });
	if (userAvailable) {
		res.status(400);
		throw new Error("User already registered");
	}

	const TenderRes = await Tender.create({
		user_id,
		name,
		email,
		phone,
	});

	if (TenderRes) {
		res.status(201).json("success");
	} else {
		res.status(400);
		throw new Error("User data is not valid");
	}
});

module.exports = { applyTender };
