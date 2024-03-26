import express from 'express';
// import departmentController from '../controllers/departmentController'; // Removed as it's not used


const router = express.Router();
router.route('/createDept').post(departmentController.createDepartment); 
router.route('/getDept').get(departmentController.getDepartment);
router.route('/getAllDept').get(departmentController.getAllDepartments);
router.route('/deleteDept').delete(departmentController.deleteDepartment);
router.route('/updateDept').put(departmentController.updateDepartment);


export default DepartmentRoute;