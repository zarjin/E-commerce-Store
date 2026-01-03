import JWT from "jsonwebtoken";

export const generateToken = (userId) => {
  try {
    return JWT.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  } catch (error) {
    console.error("Error generating token:", error);
    throw error;
  }
};

export const verifyToken = (token) => {
  try {
    return JWT.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error("Error verifying token:", error);
    throw error;
  }
};
