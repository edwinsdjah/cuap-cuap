import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const MONGODB_URL = process.env.MONGODB_DATA;

export const ConnectDB = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log("db conect");
};
