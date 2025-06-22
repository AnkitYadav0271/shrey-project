const Principal = require('../models/Principle');
const jwt = require('jsonwebtoken');

// @desc    Authenticate principal
// @route   POST /api/login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const principal = await Principal.findOne({ email });
  console.log(principal)
  
  if (!principal || !(await principal.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: principal._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

  res.status(200).json({ token });
};

// @desc    Update principal credentials
// @route   POST /api/change-credentials
exports.changeCredentials = async (req, res) => {
  const { currentPassword, newEmail, newPassword } = req.body;
  
  if (!newEmail && !newPassword) {
    return res.status(400).json({ message: 'Provide new email or password' });
  }

  const principal = await Principal.findById(req.principal._id);
  
  if (!(await principal.matchPassword(currentPassword))) {
    return res.status(401).json({ message: 'Invalid current password' });
  }

  if (newEmail) principal.email = newEmail;
  if (newPassword) principal.password = newPassword;
  
  await principal.save();
  res.status(200).json({ message: 'Credentials updated successfully' });
};
