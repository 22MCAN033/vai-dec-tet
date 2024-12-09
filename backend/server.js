// backend/server.js

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5000;

// Middleware for CORS
app.use(cors());

// Middleware to parse JSON data in POST requests
app.use(bodyParser.json());

// Example API route to handle form submission
app.post("/api/submit", (req, res) => {
  const { name, email } = req.body;

  // You can save the data to a database here if needed.
  console.log("Received data:", { name, email });

  // Respond back with a success message
  res.json({ message: `Hello ${name}, your email ${email} has been submitted successfully!` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
