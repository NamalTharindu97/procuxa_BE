const nodemailer = require("nodemailer");
const Quotation = require("../models/Quotation");
const {
	Payment_Method,
	VendorID,
	Department,
	PaymentTerms,
	ContractTypes,
} = require("../Const");

const getLabel = (list, value) => {
	const item = list.find((i) => i.value === value);
	return item ? item.label : null;
};

// NEW QUOTATION
// POST : http://localhost:5000/quote/add
const addQuote = async (req, res) => {
	try {
		console.log(req.body);

		const quoteDetails = {
			Payment_Method: getLabel(
				Payment_Method,
				parseInt(req.body.Payment_Method, 10)
			),
			VendorID: getLabel(VendorID, parseInt(req.body.VendorID, 10)),
			Department: getLabel(Department, parseInt(req.body.Department, 10)),
			PaymentTerms: getLabel(
				PaymentTerms,
				parseInt(req.body.PaymentTerms, 10)
			),
			ContractType: getLabel(
				ContractTypes,
				parseInt(req.body.ContractType, 10)
			),
			ContractValue: parseInt(req.body.ContractValue, 10), // Assuming this is a direct value
		};

		// Send email to the customer
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASSWORD,
			},
		});

		console.log(quoteDetails.PaymentTerms);

		const mailOptions = {
			from: process.env.EMAIL,
			to: "nml2k24metauzer@gmail.com",
			subject: "Fraud Detection Alert: New Tender Submission Added",
			html: `
        <html>
          <body>
            <p>Potential fraud detected with the following Submission details:</p>
            <ul>
              <li>Payment Method: ${quoteDetails.Payment_Method}</li>
              <li>Vendor ID: ${quoteDetails.VendorID}</li>
              <li>Department: ${quoteDetails.Department}</li>
              <li>Contract Value: ${quoteDetails.ContractValue}</li>
              <li>Payment Terms: ${quoteDetails.PaymentTerms}</li>
              <li>Contract Type: ${quoteDetails.ContractType}</li>
            </ul>
            <p>Please investigate this quotation further.</p>
            <p>Best regards,<br/>Cyber Space</p>
          </body>
        </html>
      `,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				res.status(200).json("error", error);
			} else {
				res.status(200).json("succuess");
			}
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An error occurred while adding the quotation.",
			error: err.message,
		});
	}
};

module.exports = {
	addQuote,
};
