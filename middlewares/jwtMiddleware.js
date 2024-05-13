// jwtMiddleware.js dosyası
import jwt from "jsonwebtoken";

// JWT doğrulama işlevi
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.toString().replace("Bearer ", ""); // İstek başlığından token al

  // Token var mı kontrol et
  if (!token) {
    return res.status(401).json({ message: "Token bulunamadı" });
  }

  try {
    // Token'i doğrula
    const secret = process.env.JWT_SECRET.toString().replace("Bearer ", "");;
    console.log(`secret: ` + secret);
    console.log(`token: ` + token);
    
    const decoded = jwt.verify(token, secret);
    req.userData = decoded;
    next();
  } catch {
    res.status(401).send({ message: "Auth Failed" });
  }
};
