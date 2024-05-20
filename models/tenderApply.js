const mongoose = require("mongoose");

const contactScheema = mongoose.Schema(
	{
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		name: {
			type: String,
			required: [true, "please add the contact name"],
		},
		email: {
			type: String,
			required: [true, "please add the email "],
		},
		phone: {
			type: String,
			required: [true, "please add the phone"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("applytenders", contactScheema);
