import express from 'express';
import * as testController from '../controllers/testController.js';

const TestRoute = express.Router();

TestRoute.route('/sendmail').post(testController.sendMailWithMailService);
TestRoute.route('/writefile').post(testController.writeStudentListToJSONIntoFile);
TestRoute.route('/readfile').get(testController.readStudentListToJSONIntoFile);

export default TestRoute;