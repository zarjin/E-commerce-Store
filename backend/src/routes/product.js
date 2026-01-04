import express from "express";
import { uploadProductImage } from "../utils/multer.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.js";

const ProductRouter = express.Router();

ProductRouter.post(
  "/create",
  uploadProductImage.single("image"),
  createProduct
);
ProductRouter.put(
  "/update/:productId",
  uploadProductImage.single("image"),
  updateProduct
);
ProductRouter.delete("/delete/:productId", deleteProduct);
ProductRouter.get("/get/:productId", getProduct);
ProductRouter.get("/get", getAllProducts);

export default ProductRouter;
