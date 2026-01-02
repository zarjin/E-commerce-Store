import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../configs/cloudinary.js";

const profileImageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ProfileImages",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

const productImageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ProductImages",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

export const uploadProfileImage = multer({ storage: profileImageStorage });

export const uploadProductImage = multer({ storage: productImageStorage });
