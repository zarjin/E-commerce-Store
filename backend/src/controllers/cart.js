import { Cart } from "../models/cart.js";

export const addProductToCart = async (req, res) => {
  try {
    const { quantity } = req.body;
    const userId = req.userId;
    const productId = req.params.productId;
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      const newCart = new Cart({ userId, products: [{ productId, quantity }] });
      await newCart.save();
      return res
        .status(201)
        .json({ message: "Product added to cart successfully" });
    }
    const productIndex = cart.products.findIndex(
      (product) => product.productId.toString() === productId
    );
    if (productIndex === -1) {
      cart.products.push({ productId, quantity });
    } else {
      cart.products[productIndex].quantity += quantity;
    }
    await cart.save();
    return res
      .status(200)
      .json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add product to cart" });
  }
};

export const removeProductFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const productId = req.params.productId;
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const productIndex = cart.products.findIndex(
      (product) => product.productId.toString() === productId
    );
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }
    cart.products.splice(productIndex, 1);
    await cart.save();
    return res
      .status(200)
      .json({ message: "Product removed from cart successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to remove product from cart" });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.userId;
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    return res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to get cart" });
  }
};
