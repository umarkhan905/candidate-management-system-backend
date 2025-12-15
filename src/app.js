import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import { env } from "./config/env.config.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import { notFound } from "./middlewares/not-found.middleware.js";

export const app = express();

// Built-In Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// Third-Party Middlewares
app.use(
  cors({
    origin:
      env.NODE_ENV === "development"
        ? "http://localhost:5173"
        : "https://candidate-management-system-chi.vercel.app",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);
app.use(helmet());
app.use(morgan("dev"));

// Routes
import { router } from "./routes/index.js";
app.use("/api", router);

// Not Found Middleware
app.use(notFound);

// Error Handler Middleware
app.use(errorHandler);
