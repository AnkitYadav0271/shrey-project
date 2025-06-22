require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Principal = require('../models/Principle');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
};

(async () => {
  await connectDB();
  const email = process.env.INITIAL_EMAIL || 'principal@polytechmanikpur.edu';
  const password = process.env.INITIAL_PASSWORD || 'principlePassword';
  const hashedPassword = await bcrypt.hash(password, 12);

  await Principal.findOneAndUpdate(
    { email },
    { $set: { password: hashedPassword } },
    { upsert: true, new: true }
  );
  console.log('Principal initialized');
  process.exit();
})();
