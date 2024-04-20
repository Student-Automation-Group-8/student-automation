'use strict'; // Bu dosyada ES6 standartlarına göre kod yazılacağını belirtir.

// Student modeli tanımlanıyor. Bu model, veritabanında student tablosunu temsil edecek. Aynı zqamanda bir class gibi kullanılabilecek.
export default (sequelize, DataTypes) => {

  const Student = sequelize.define("student", {
    // Model alanları ve özellikleri tanımlanıyor.
    name:{
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: true
      }
      // name alanı, STRING türünde ve boş bırakılamaz (allowNull: false) olarak tanımlanıyor. Ayrıca bu alanda boş bir değer kabul edilmiyor (notEmpty: true).
    },    
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
      // email alanı, STRING türünde ve boş bırakılamaz (allowNull: false) olarak tanımlanıyor. Ayrıca bu alanda boş bir değer kabul edilmiyor (notEmpty: true).
    },
    deptid:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        notEmpty: true
      }
      // deptid alanı, INTEGER türünde ve boş bırakılamaz (allowNull: false) olarak tanımlanıyor. Ayrıca bu alanda boş bir değer kabul edilmiyor (notEmpty: true).

    } 
  },
  {
    // Bu alanda ek ayarlar yapılabilir. Sequelize default ayarları değiştirebilir. Bir çok gelişmiş configrasyon tabloya özel yapılabilir.

    // dedault özellik olan; createdAt ve updatedAt alanlarını devre dışı bırakıyoruz.
    timestamps: false
  });

  // Oluşturulan model return ediliyor.
  return Student;
}