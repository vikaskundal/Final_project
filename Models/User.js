const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
