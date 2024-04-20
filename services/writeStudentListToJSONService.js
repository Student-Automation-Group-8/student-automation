import fs from 'fs';
import db from '../models/database.js';
import path from 'path';

const Student = db.student;
const __dirname = path.dirname(new URL(import.meta.url).hostname);

// Fonksiyon, öğrenci listesini veritabanından alır ve JSON dosyasına yazar
const writeStudentListToJSON = async () => {
    try {
        // Veritabanından öğrenci listesini sorgula
        const studentsWithDepartments = await Student.findAll({
            include: {
                model: db.department,
                as: 'department'
            }
        });

        // Öğrenci listesini JSON dosyasına yaz
        const dataFolder = path.join(__dirname, 'data');
        const fileName = 'student_list.json';
        const filePath = path.join(dataFolder, fileName);

        if (!fs.existsSync(dataFolder)) {
            fs.mkdirSync(dataFolder);
        }

        fs.writeFileSync(filePath, JSON.stringify(studentsWithDepartments, null, 2));
        console.log("Öğrenci listesi student_list.json dosyasına yazıldı.");
    } catch (err) {
        console.error("Hata:", err);
    }
};

const getWritedFile = () => {
    try {
        // Dosyayı oku ve içeriğini döndür
        const dataFolder = path.join(__dirname, 'data');
        const fileName = 'student_list.json';
        const filePath = path.join(dataFolder, fileName);

        if (!fs.existsSync(filePath)) {
            console.error("Dosya bulunamadı:", filePath);
            return null;
        }

        const data = fs.readFileSync(filePath, 'utf8');

        console.log("student_list.json dosyası okundu.");
        return data;
    } catch (err) {
        console.error("Hata:", err);
    }
};

export default { writeStudentListToJSON, getWritedFile };
