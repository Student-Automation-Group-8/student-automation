import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

// Fonksiyon, öğrenci listesini veritabanından alır ve JSON dosyasına yazar
const writeStudentListToJSON = async () => {
    const client = await process.env.DB.connect();
    try {
        // Veritabanından öğrenci listesini sorgula
        const query = 'SELECT * FROM student';
        const result = await client.query(query);

        // Öğrenci listesini JSON dosyasına yaz
        fs.writeFileSync('student_list.json', JSON.stringify(result.rows, null, 2));
        //console.log("Öğrenci listesi student_list.json dosyasına yazıldı.");
    } catch (err) {
        console.error("Hata:", err);
    } finally {
        client.release();
    }
};

writeStudentListToJSON();
