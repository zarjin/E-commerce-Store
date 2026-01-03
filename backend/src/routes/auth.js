import express from "express";
import {
  register,
  login,
  logout,
  isAuthorization,
} from "../controllers/auth.js";
import { uploadProfileImage } from "../utils/multer.js";
import checkAuthorization from "../middleware/checkAuthorization.js";

const authRouter = express.Router();

authRouter.post("/register", uploadProfileImage.single("profile"), register);
authRouter.post("/login", login);
authRouter.post("/logout", checkAuthorization, logout);
authRouter.post("/isAuthorization", checkAuthorization, isAuthorization);

export default authRouter;
