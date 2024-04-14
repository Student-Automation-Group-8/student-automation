// npm install nodemailer

const nodemailer = require('nodemailer');
import dotenv from 'dotenv';
dotenv.config();

// PostgreSQL bağlantı bilgileri
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

// E-posta ayarları
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gonderici@gmail.com',
    pass: 'gondericisifre'
  }
});

// Veritabanından bilgileri al ve e-posta gönder
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Veritabanı bağlantı hatası', err.stack);
  }
  console.log('Veritabanı bağlantısı başarılı!');

  // Veritabanından ilgili bilgileri al
  client.query('SELECT name FROM student', (err, result) => {
    release();
    if (err) {
      return console.error('Sorgu hatası', err.stack);
    }
    
    // E-posta içeriği oluştur
    const mailOptions = {
      from: 'gonderici@gmail.com',
      to: 'alici@gmail.com',
      subject: 'Veritabanı Bilgileri',
      text: `Merhaba,\n\nVeritabanından alınan bilgiler:\n${JSON.stringify(result.rows)}`
    };

    // E-posta gönder
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('E-posta gönderilemedi: ' + error);
      } else {
        console.log('E-posta başarıyla gönderildi: ' + info.response);
      }
    });
  });
});
