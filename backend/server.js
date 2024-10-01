// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint for handling contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Log the data (or send it via email)
  console.log('Received contact form submission:', req.body);

  // Nodemailer configuration (optional)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS  // Your email password or app password
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your email to receive messages
    subject: `Contact Form Submission from ${name}`,
    text: message
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Form submitted successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
