import { User } from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await User.findById(userId);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userId = req.user.id;
    const updateData = { name, email, password };
    if (req.file) {
      updateData.profile = req.file.path;
    }
    const data = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await User.findByIdAndDelete(userId);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
