import express from "express";
import {
  addProductToCart,
  getCart,
  removeProductFromCart,
} from "../controllers/cart.js";

const cartRouter = express.Router();

cartRouter.post("/add", addProductToCart);
cartRouter.get("/", getCart);
cartRouter.delete("/remove/:productId", removeProductFromCart);

export default cartRouter;
