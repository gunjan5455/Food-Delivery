import jwt from "jsonwebtoken";

const authMiddlware = async (req, res, next) => {
  const tokenHeader = req.headers["x-access-token"];

  if (!tokenHeader) {
    return res.status(403).json({ message: "No token provided" });
  }

  const token = tokenHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddlware;
