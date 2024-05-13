import express from 'express';
import * as departmentController from '../controllers/departmentController.js'; 
import { verifyToken } from '../middlewares/jwtMiddleware.js'; // jwtMiddleware.js dosyasından middleware'i içe aktar


const DepartmentRoute = express.Router();


// Department rotalarına jwtMiddleware ekle
DepartmentRoute.use(verifyToken); // Tüm rotalara jwtMiddleware'ı ekle

// Auth rotalarını hariç tut
DepartmentRoute.use('/auth', (req, res, next) => {
  next(); // Auth rotaları için jwtMiddleware uygulanmayacak
});

DepartmentRoute.route('/createDept').post(departmentController.createDepartment); 
DepartmentRoute.route('/getDept').get(departmentController.getDepartment);
DepartmentRoute.route('/getAllDept').get(departmentController.getAllDepartments);
DepartmentRoute.route('/deleteDept').delete(departmentController.deleteDepartment);
DepartmentRoute.route('/updateDept').put(departmentController.updateDepartment);


export default DepartmentRoute;