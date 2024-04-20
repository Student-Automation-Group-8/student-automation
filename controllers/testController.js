import db from '../models/database.js';
import writeStudentListToJSONService from '../services/writeStudentListToJSONService.js';
import mailService from '../services/mailService.js';

// create main Model
const Student = db.student;
const Department = db.department;

export const writeStudentListToJSONIntoFile = async (req, res) => {
    try {
        await writeStudentListToJSONService.writeStudentListToJSON();
        return res.status(200).json({
            message: "Başarılı! Öğrenci listesi JSON dosyasına yazıldı!"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            title: "Hata!",
            message: "Sunucu hatası"
        });
    }
};

export const readStudentListToJSONIntoFile = async (req, res) => {
    try {
        const data = await writeStudentListToJSONService.getWritedFile();
        const parsedData = JSON.parse(data);
        return res.status(200).json({
            message: "Başarılı! Öğrenci listesi JSON dosyasından okundu!",
            data: parsedData
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            title: "Hata!",
            message: "Sunucu hatası"
        });
    }
}

export const sendMailWithMailService = (req, res) => {
    const data = writeStudentListToJSONService.getWritedFile(); // JSON dosyasını oku
    mailService(data);
    return res.status(200).json({
        message: "Başarılı! E-posta başarıyla gönderildi!"
    });
};





