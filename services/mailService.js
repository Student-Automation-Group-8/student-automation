// npm install nodemailer
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// mail'e erişim için nodemailer transporter'ı oluşturun
const transporter = nodemailer.createTransport({
  service : 'hotmail',
  secure : false,
  auth: {
     user: process.env.EMAIL_USER.toString(),
    pass: process.env.EMAIL_PASS.toString()
  }
});

const pathFile = () =>{
    const __dirname = path.dirname(new URL(import.meta.url).hostname);
    const dataFolder = path.join(__dirname, 'data');
    const fileName = 'student_list.json';
    const filePath = path.join(dataFolder, fileName);
      
    return filePath;
}
// Fonksiyon, belirtilen metni bir e-posta olarak gönderir
const sendEmail = (text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Yedek",
    text:text,
    attachments: [
      {
          filename: 'student_list.json', // E-posta ek dosyanın adı
          path: pathFile() // Dosyanın yolunu belirtin
      }
  ]
  };

    // E-postayı gönderme işlemi
  transporter.sendMail(mailOptions, (error, info) => {
    //hata kontrolü
    if (error) {
      console.log('E-posta gönderilemedi: ' + error.message);
    } else {
      console.log('E-posta başarıyla gönderildi: ' + info.response);
    }
  });
};

export default sendEmail;
