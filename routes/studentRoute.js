const express = require('express');
const studentController = require('../controllers/studentController');
//const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
router.route('/create').post(studentController.createStudent); // Create a new Student
router.route('/get').get(studentController.getStudent); 
router.route('/getAll').get(studentController.getAllStudents); 
router.route('/delete').delete(studentController.deleteStudent); 
router.route('/update').put(studentController.updateStudent); 


module.exports = router;