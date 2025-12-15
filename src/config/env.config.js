import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  DB_NAME: process.env.DB_NAME,
  DEVELOPMENT_FRONTEND_URL: process.env.DEVELOPMENT_FRONTEND_URL,
  PRODUCTION_FRONTEND_URL: process.env.PRODUCTION_FRONTEND_URL,
  NODE_ENV: process.env.NODE_ENV,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};
