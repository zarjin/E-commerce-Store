import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";

import connectDB from "../configs/db.js";
import authRouter from "../routes/auth.js";
import userRouter from "../routes/user.js";
import productRouter from "../routes/product.js";
import cartRouter from "../routes/cart.js";

dotenv.config();

// DB connection (safe for now)
connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Test route
app.get("/", (req, res) => {
  res.send("API is running on Vercel 🚀");
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

// ❗ Export — no listen()
export const handler = serverless(app);
export default handler;
