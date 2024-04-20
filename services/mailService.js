// npm install nodemailer
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Gmail'e erişim için nodemailer transporter'ı oluşturun
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Fonksiyon, belirtilen metni bir e-posta olarak gönderir
const sendEmail = (text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Yedek",
    text: "Öğrenci listesi yedek",
    attachments: [
      {
          filename: 'student_list.json', // E-posta ek dosyanın adı
          path: 'student_list.json' // Dosyanın yolunu belirtin
      }
  ]
  };

    // E-postayı gönderme işlemi
  transporter.sendMail(mailOptions, (error, info) => {
    //hata kontrolü
    if (error) {
      console.log('E-posta gönderilemedi: ' + error);
    } else {
      console.log('E-posta başarıyla gönderildi: ' + info.response);
    }
  });
};

export default sendEmail;
