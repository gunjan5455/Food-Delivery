import jwt from "jsonwebtoken";

const authMiddlware = async (req, res, next) => {
  const tokenHeader = req.headers["x-access-token"];
  console.log("Header:", tokenHeader);

  if (!tokenHeader) {
    return res.status(403).json({ message: "No token provided" });
  }

  const token = tokenHeader.split(" ")[1];
  try {
    console.log("Token to verify:", token);
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;

    console.log(req.user.userId);
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddlware;
