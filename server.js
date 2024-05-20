const express = require("express");
const errorHandler = require("./middleware/errHandler");
const dbConnection = require("./config/dbConnection");
const cors = require("cors"); // Import cors middleware

const app = express();
const dotenv = require("dotenv").config();

dbConnection();
const PORT = process.env.PORT || 5000;

const corsOptions = {
	origin: "http://localhost:3000", // Specify the allowed origin
	credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tender-notices", require("./routes/tenderNoticeRoute")); // Mount the tender notice routes
app.use("/api/mail", require("./routes/mailRoute")); // Mount the tender notice routes
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
