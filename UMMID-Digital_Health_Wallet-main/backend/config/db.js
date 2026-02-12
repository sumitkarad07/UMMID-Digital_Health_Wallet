const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    global.dbConnected = true;
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    console.log("Running in Offline Demo Mode (In-Memory Data).");
    global.dbConnected = false;
  }
};

module.exports = connectDB;
