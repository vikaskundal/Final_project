// controllers/contactController.js
const ContactModel = require('../Models/ContactModel');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newContact = new ContactModel({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

module.exports = { submitContactForm };
