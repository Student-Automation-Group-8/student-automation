// authController.js

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import db from '../models/database.js';

const User = db.user;

// Kullanıcı kayıt metodu
export const register = async (req, res) => {
  const { name, password } = req.body;

  try {
    // Kullanıcının şifresini hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcıyı oluştur ve veritabanına ekle
    const newUser = await User.create({ name, password: hashedPassword });

    // Başarılı yanıt gönder
    res.status(201).json({ message: 'Yeni kullanıcı başarıyla oluşturuldu', user: newUser });
  } catch (error) {
    // Hata durumunda yanıt gönder
    console.error("Kullanıcı ekleme hatası:", error);
    res.status(500).json({ message: "Bir hata oluştu" });
  }
};

// Kullanıcı giriş metodu
export const login = async (req, res) => {
  const { name, password } = req.body;

  try {
    // Veritabanından kullanıcının bilgilerini al
    const user = await User.findOne({ where: { name } });

    // Kullanıcı bulunamazsa hata döndür
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    // Kullanıcının girdiği şifreyi veritabanından çekilen hashlenmiş şifre ile karşılaştır
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Şifreler eşleşmiyorsa hata döndür
    if (!passwordMatch) {
      return res.status(401).json({ message: "Geçersiz şifre" });
    }

    // JWT oluştur
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log(`login secret: `+process.env.JWT_SECRET);
    console.log(`login token: `+token);


    // JWT'yi kullanıcıya dön
    res.status(200).json({ token });
  } catch (error) {
    console.error("Login hatası:", error);
    res.status(500).json({ message: "Bir hata oluştu" });
  }
};
