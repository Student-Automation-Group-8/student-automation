// Convert to ES module syntax
import db from '../models/database.js';

// create main Model
const Student = db.student;

export const createStudent = async (req, res) => {
   try {
    const studentExist = await Student.findOne({where:{ email: req.body.email }})
    if (studentExist) {
        res.send({
            "mesaj": `Başarısız! Kullanıcı, ${studentExist.email} adresi ile zaten var!`
        });
        return;
    }
    const student = await Student.create(req.body);
    res.status(201).json({
        "mesaj": "Başarılı! student başarıyla oluşturuldu!",
        "student": {
            "student-name": student.name,
            "student-email": student.email
        }
    });
} catch (error) {
    console.log(error);
    res.status(500).send({
        "baslik": "Hata!",
        "mesaj": "Sunucu hatası"
    });
}
}

export const getStudent = async (req, res) => {
    try{
        const student = await Student.findOne({where:{ email: req.params.email }});
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getAllStudents = async (_, res) => { // Removed unused req parameter
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const student = await Student.destroy({where:{ email: req.params.email }});
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const boolInt = await Student.update(req.body,
            {
                where: { email: req.params.email }
            }
        )
        
        if (boolInt == 1) {
            return res.json({ message: 'Student is updated successfully' });
        }

        return res.status(404).json({ message: 'Student not found or req.body is empty ' });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};