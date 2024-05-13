import express from 'express';
// import authController from '../controllers/authController'; // Removed as it's not used
import { verifyToken } from '../middlewares/jwtMiddleware.js'; // jwtMiddleware.js dosyasından middleware'i içe aktar
import { login, register } from '../controllers/authController.js'; // AuthController içinden login fonksiyonunu al

const AuthRoute = express.Router();


AuthRoute.use('/auth', (req, res, next) => {
  next(); 
});

// Register rotası
AuthRoute.post('/register', register);

// Login rotası
AuthRoute.post('/login', login);

export default AuthRoute;