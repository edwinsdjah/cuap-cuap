import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_DATA;

if (!MONGODB_URL) {
  throw new Error("MONGODB_DATA environment variable is not set!");
}

export const ConnectDB = async () => {
  try {
    console.log("Connecting to MongoDB at:", MONGODB_URL); // debug
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};
