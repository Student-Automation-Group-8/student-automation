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
    `Student.findOne()` gibi yapıları sequelizer ile birlikte çok daha efektif bir şekilde, veritabanı bağımsız olarak kullanabiliyoruz.
    */
    const studentExist = await Student.findOne({ email: req.body.userMail })
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
exports.getStudent = async (req, res) => {
    /* 
    Get method access
    Student get
    */
};

exports.getAllStudents = async (req, res) => {
    /*
    Get method access    
    Student get all
    */
};

exports.deleteStudent = async (req, res) => {
    /*
    Selete method access
    Student delete
    */
};

exports.updateStudent = async (req, res) => {
    /*
    Put method access
    Student update
    */
};