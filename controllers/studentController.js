// Convert to ES module syntax
import db from '../models/database.js';

// create main Model
const Student = db.student;

export const createStudent = async (req, res) => {
    try {
        console.log(req.body);
        /*
        Kullanıcının zaten var olup olmadığını kontrol edin
        `Student.findOne()` gibi yapıları sequelize ile birlikte çok daha efektif bir şekilde, veritabanı bağımsız olarak kullanabiliyoruz.
        */
        const studentExist = await Student.findOne({ where: { email: req.body.email } });
        if (studentExist) {
            return res.status(400).json({
                message: `Başarısız! Kullanıcı, ${studentExist.email} adresi ile zaten var!`
            });
        }
        const student = await Student.create(req.body);

        return res.status(201).json({
            message: "Başarılı! Öğrenci başarıyla oluşturuldu!",
            student: {
                name: student.name,
                email: student.email
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            title: "Hata!",
            message: "Sunucu hatası"
        });
    }
}

export const getStudent = async (req, res) => {
    /* 
    Get method access
    Student get
    */
    try{
        const student = await Student.findOne({where:{ email: req.params.email }});
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getAllStudents = async (_, res) => { // Removed unused req parameter
    try {
        // Tüm öğrencileri veritabanından al
        const students = await Student.findAll();
        
        // Öğrenciler bulunduysa
        if (students.length > 0) {
            return res.status(200).json({
                message: "Başarılı! Tüm öğrenciler alındı.",
                students: students.map(student => ({
                    name: student.name,
                    email: student.email
                }))
            });
        } else {
            // Öğrenci bulunamadı
            return res.status(404).json({
                message: "Öğrenci bulunamadı."
            });
        }
    } catch (error) {
        console.error(error);
        // Sunucu hatası
        return res.status(500).json({
            title: "Hata!",
            message: "Sunucu hatası."
        });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        // Öğrenciyi veritabanından sil
        const successCode = await Student.destroy({
            where: {
                email: req.params.email // E-posta adresini sorgu parametrelerinden al
            }
        });

        // Silinen öğrenci varsa
        if (successCode) {
            return res.status(200).json({
                message: "Başarılı! Öğrenci başarıyla silindi."
            });
        } else {
            // Öğrenci bulunamadı
            return res.status(404).json({
                message: "Öğrenci bulunamadı."
            });
        }
    } catch (error) {
        console.error(error);
        // Sunucu hatası
        return res.status(500).json({
            title: "Hata!",
            message: "Sunucu hatası."
        });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const existingStudentCode = await Student.update(req.body,
            {
                where: { email: req.params.email }
            }
        )
        
         // Eğer öğrenci yoksa
         if (existingStudentCode == 0) {
            return res.status(404).json({
                message: "Öğrenci bulunamadı."
            });
        }

        return res.status(200).json({
            message: "Başarılı! Öğrenci başarıyla güncellendi."
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};