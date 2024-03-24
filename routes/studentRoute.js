const express = require('express');
const studentController = require('../controllers/studentController');
//const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
router.route('/create').post(studentController.createStudent); // Create a new Student

module.exports = router;