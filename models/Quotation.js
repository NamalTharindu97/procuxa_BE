const mongoose = require("mongoose");

const quotationSchema = mongoose.Schema(
	{
		Payment_Method: {
			type: Number,
			required: [true, "Please add the payment method"],
		},
		VendorID: {
			type: Number,
			required: [true, "Please add the vendor ID"],
		},
		Department: {
			type: Number,
			required: [true, "Please add the department"],
		},
		ContractValue: {
			type: Number,
			required: [true, "Please add the contract value"],
		},
		PaymentTerms: {
			type: Number,
			required: [true, "Please add the payment terms"],
		},
		ContractType: {
			type: Number,
			required: [true, "Please add the contract type"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Quotation", quotationSchema);
