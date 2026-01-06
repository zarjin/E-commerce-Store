import { Product } from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;
    if (!name || !description || !price || !stock || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category,
      image: req.file.path,
    });
    return res.status(201).json({ message: "product create successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, description, price, stock, category } = req.body;
    if (!name || !description || !price || !stock || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const product = await Product.findByIdAndUpdate(productId, {
      name,
      description,
      price,
      stock,
      category,
      image: req.file.path,
    });
    return res.status(201).json({ message: "product update successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(productId);
    return res.status(201).json({ message: "product delete successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    return res.status(201).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(201).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
