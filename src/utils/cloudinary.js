import fs from "fs";
import cloudinary from "../config/cloudinary.config.js";

const uploadFileCloudinary = async (file, resource_type) => {
  if (!file) throw new Error("File is required");
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type,
      folder: "candidates",
    });
    return result;
  } catch (error) {
    console.log("Something went wrong while uploading file:", error);
    return null;
  } finally {
    fs.unlinkSync(file.path);
  }
};

const removeFileCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
    return true;
  } catch (error) {
    console.log("Something went wrong while removing file:", error);
    return false;
  }
};

export { uploadFileCloudinary, removeFileCloudinary };
