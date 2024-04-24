//'use strict'; // Bu dosyada ES6 standartlarına göre kod yazılacağını belirtir.

// Student modeli tanımlanıyor. Bu model, veritabanında student tablosunu temsil edecek. Aynı zqamanda bir class gibi kullanılabilecek.
export default (sequelize, DataTypes) => {

  const Student = sequelize.define("student", {
        // Model alanları ve özellikleri tanımlanıyor.
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
            // name alanı, STRING türünde ve boş bırakılamaz (allowNull: false) olarak tanımlanıyor. Ayrıca bu alanda boş bir değer kabul edilmiyor (notEmpty: true).
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
            // email alanı, STRING türünde ve boş bırakılamaz (allowNull: false) olarak tanımlanıyor. Ayrıca bu alanda boş bir değer kabul edilmiyor (notEmpty: true).
    },
    deptid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        notEmpty: true
      }
    }
          // deptid alanı, INTEGER türünde ve boş bırakılamaz (allowNull: false) olarak tanımlanıyor. Ayrıca bu alanda boş bir değer kabul edilmiyor (notEmpty: true).
  },
  {
    timestamps: true,
    createdAt: 'created_at',//Bir kaydın oluşturulduğu tarihi ve saati tutar.
    updatedAt: 'updated_at'//Bir kaydın en son güncellendiği tarihi ve saati tutar.
  });

  // Oluşturulan model return ediliyor.
  return Student;
}
