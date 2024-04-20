import db from "../models/database.js";

const Student = db.student;
const Department = db.department;
const StudentCounter = db.studentCounter;



const createTestExample = async () => {

    const students = [
    { name: 'John Doe', email: 'john.doe@example.com', deptid: 1 },
    { name: 'Jane Doe', email: 'jane.doe@example.com', deptid: 2 },
    { name: 'Bob Smith', email: 'bob.smith@example.com', deptid: 3 },
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', deptid: 4 },
    { name: 'Charlie Brown', email: 'charlie.brown@example.com', deptid: 1 },
    { name: 'David Davis', email: 'david.davis@example.com', deptid: 2 },
    { name: 'Eva White', email: 'eva.white@example.com', deptid: 3 },
    { name: 'Frank Green', email: 'frank.green@example.com', deptid: 4 },
    { name: 'Grace Lee', email: 'grace.lee@example.com', deptid: 1 },
    { name: 'Henry Miller', email: 'henry.miller@example.com', deptid: 2 }
    ];

    const departments = [
    { name: 'Computer Science', dept_std_id: 1 },
    { name: 'Electrical Engineering', dept_std_id: 2 },
    { name: 'Mechanical Engineering', dept_std_id: 3 },
    { name: 'Civil Engineering', dept_std_id: 4 }
    ];  

    try {
        for (const department of departments) {
        await Department.findOrCreate({
            where: { name: department.name },
            defaults: department
        });
        }

        await StudentCounter.findOrCreate({
            where: { id:1 },
            defaults: { id:1, counter: 10 }
         });

        students.forEach(async student => {
            await Student.findOrCreate({
                where: { email: student.email },
                include: { model: Department, as: 'department' },
                defaults: student
            });
        });
        
         
        console.log('1 counter, 10 students and 4 departments created successfully!');
    } catch (err) {
        console.error(err);
    }
};

export default createTestExample;   