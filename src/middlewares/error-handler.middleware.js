import mongoose from "mongoose";
import { ApiError } from "../utils/api-response.js";
import { env } from "../config/env.config.js";

export const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Internal server error";

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  if (err instanceof mongoose.Error.ValidationError) {
    statusCode = 422;
    message = err.message;
  }

  // Log the error details
  if (env.NODE_ENV !== "production") {
    console.error(`Error Stack: ${err instanceof ApiError ? err.stack : err}`);
  }

  console.error(
    `[${req.method}] ${req.path} >> StatusCode:: ${statusCode}, Message:: ${message}`
  );

  return res.status(statusCode).json(new ApiError(statusCode, message));
};
