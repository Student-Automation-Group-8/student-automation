const express = require('express');
const departmentController = require('../controllers/departmentController');
//const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
router.route('/createDept').post(departmentController.createDepartment); 
router.route('/getDept').get(departmentController.getDepartment);
router.route('/getAllDept').get(departmentController.getAllDepartments);
router.route('/deleteDept').delete(departmentController.deleteDepartment);
router.route('/updateDept').put(departmentController.updateDepartment);

module.exports = router;