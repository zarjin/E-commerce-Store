import express from "express";
import { getUser, updateUser, deleteUser } from "../controllers/user.js";
import checkAuthorization from "../middleware/checkAuthorization.js";
import { uploadProfileImage } from "../utils/multer.js";

const userRouter = express.Router();

userRouter.get("/get", checkAuthorization, getUser);
userRouter.put(
  "/update",
  checkAuthorization,
  uploadProfileImage.single("profile"),
  updateUser
);
userRouter.delete("/delete", checkAuthorization, deleteUser);

export default userRouter;
