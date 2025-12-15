import { ApiError } from "../utils/api-response.js";

export const notFound = (req, res, next) => {
  console.warn(`Route not found: ${req.method} ${req.path}`);
  return res.status(404).json(new ApiError(404, "Route not found"));
};
