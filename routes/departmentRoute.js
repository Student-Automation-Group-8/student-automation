import express from 'express';
import * as departmentController from '../controllers/departmentController.js'; 


const DepartmentRoute = express.Router();
DepartmentRoute.route('/createDept').post(departmentController.createDepartment); 
DepartmentRoute.route('/getDept').get(departmentController.getDepartment);
DepartmentRoute.route('/getAllDept').get(departmentController.getAllDepartments);
DepartmentRoute.route('/deleteDept').delete(departmentController.deleteDepartment);
DepartmentRoute.route('/updateDept').put(departmentController.updateDepartment);


export default DepartmentRoute;