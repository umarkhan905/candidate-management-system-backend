import mongoose from "mongoose";
import { env } from "./env.config.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGODB_URI, {
      dbName: env.DB_NAME,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Something went wrong while connecting to DB: ", error);
    process.exit(1);
  }
};
