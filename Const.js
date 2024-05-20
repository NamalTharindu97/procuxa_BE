// Const.js

const Payment_Method = [
	{ value: 2, label: "PayPal" },
	{ value: 1, label: "Credit Card" },
	{ value: 3, label: "Bank Transfer" },
];

const VendorID = [
	{ value: 0, label: "Vendor 1" },
	{ value: 1, label: "Vendor 2" },
	{ value: 2, label: "Vendor 3" },
	{ value: 3, label: "Vendor 4" },
	{ value: 4, label: "Vendor 5" },
];

const Department = [
	{ value: 1, label: "Bridge and Highway" },
	{ value: 2, label: "Engineering" },
	{ value: 3, label: "Port" },
	{ value: 4, label: "Public Works" },
	{ value: 6, label: "Airport" },
	{ value: 5, label: "Transportation" },
];

const PaymentTerms = [
	{ value: 1, label: "Net 30" },
	{ value: 2, label: "Net 45" },
	{ value: 3, label: "Net 60" },
];

const ContractTypes = [
	{ value: 1, label: "Services" },
	{ value: 0, label: "Construction" },
	{ value: 2, label: "Supply" },
];

module.exports = {
	Payment_Method,
	VendorID,
	Department,
	PaymentTerms,
	ContractTypes,
};
