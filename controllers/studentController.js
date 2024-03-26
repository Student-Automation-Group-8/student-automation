const db = require('../models/database.js');

// create main Model
const Student = db.student;

/* studentController.js yapılacaklar:
Create,update,delete,get ve getAll fonksiyonları yazılacak.
*/

exports.createStudent = async (req, res) => {
    /*
    Post method access
    Student create
    */
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
};

exports.getStudent = async (req, res) => {
    /* 
    Get method access
    Student get
    */
    try {
        console.log(req.body);
        const student = await Student.findOne({ where: { email: req.body.email } }); // Burada req.body.email kullanıldı
        console.log(student);
        if (student === null) {
            // Öğrenci bulundu
            res.send({
                "mesaj": "Öğrenci bulunamadı",
            });
            return;
        } else {
            res.send({
                "mesaj": "Öğrenci bulundu"
            });
        }
    
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            "baslik": "Hata!",
            "mesaj": "Sunucu hatası"
        });
    }

};


exports.getAllStudents = async (req, res) => {
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


exports.deleteStudent = async (req, res) => {
    try {
        // Öğrenciyi veritabanından sil
        const deletedStudent = await Student.destroy({
            where: {
                email: req.body.email // E-posta adresini sorgu parametrelerinden al
            }
        });

        // Silinen öğrenci varsa
        if (deletedStudent) {
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


exports.updateStudent = async (req, res) => {
    try {
        const { name, email } = req.body; // Güncellenecek öğrencinin yeni adı ve e-posta adresi
        
        // E-posta adresi veritabanında var mı diye kontrol et
        const existingStudent = await Student.findOne({ where: { email } });

        // Eğer öğrenci yoksa
        if (!existingStudent) {
            return res.status(404).json({
                message: "Öğrenci bulunamadı."
            });
        }

        // Öğrenci varsa, güncelleme yap
        await existingStudent.update({ name }); // Sadece adı güncellemek için
        // Alternatif olarak, hem adı hem de e-posta adresini güncellemek için:
        // await existingStudent.update({ name, email });

        return res.status(200).json({
            message: "Başarılı! Öğrenci başarıyla güncellendi."
        });
    } catch (error) {
        console.error(error);
        // Sunucu hatası
        return res.status(500).json({
            title: "Hata!",
            message: "Sunucu hatası."
        });
    }
};
