const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected!");
  } catch (err) {
    console.log(err);
  }
};
