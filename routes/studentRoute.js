import express from 'express';
import * as studentController from '../controllers/studentController.js';
import { verifyToken } from '../middlewares/jwtMiddleware.js'; // jwtMiddleware.js dosyasından middleware'i içe aktar
// import authMiddleware from '../middlewares/authMiddleware';


const StudentRoute = express.Router();

// Department rotalarına jwtMiddleware ekle
StudentRoute.use(verifyToken); // Tüm rotalara jwtMiddleware'ı ekle

// Auth rotalarını hariç tut
StudentRoute.use('/auth', (req, res, next) => {
  next(); // Auth rotaları için jwtMiddleware uygulanmayacak
});

// Create a new Student
StudentRoute.route('/create').post(studentController.createStudent);

// Get all Students
StudentRoute.route('/getAll').get(studentController.getAllStudents);

// Get a single Student by id
StudentRoute.route('/get').get(studentController.getStudent);

// Update a Student by id
StudentRoute.route('/update').put(studentController.updateStudent);

// Delete a Student by id
StudentRoute.route('/delete').delete(studentController.deleteStudent);

export default StudentRoute;