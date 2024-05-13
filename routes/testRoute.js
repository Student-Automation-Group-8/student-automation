import express from 'express';
import * as testController from '../controllers/testController.js';
import { verifyToken } from '../middlewares/jwtMiddleware.js'; // jwtMiddleware.js dosyasından middleware'i içe aktar

const TestRoute = express.Router();

// Department rotalarına jwtMiddleware ekle
TestRoute.use(verifyToken); // Tüm rotalara jwtMiddleware'ı ekle

// Auth rotalarını hariç tut
TestRoute.use('/auth', (req, res, next) => {
  next(); // Auth rotaları için jwtMiddleware uygulanmayacak
});

TestRoute.route('/sendmail').post(testController.sendMailWithMailService);
TestRoute.route('/writefile').post(testController.writeStudentListToJSONIntoFile);
TestRoute.route('/readfile').get(testController.readStudentListToJSONIntoFile);

export default TestRoute;