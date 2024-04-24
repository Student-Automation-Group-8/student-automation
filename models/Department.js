//'use strict'; // Bu dosyada ES6 standartlarına göre kod yazılacağını belirtir.

// Department modeli tanımlanıyor. Bu model, veritabanında student tablosunu temsil edecek. Aynı zqamanda bir class gibi kullanılabilecek.
export default (sequelize, DataTypes) => {

  const Department = sequelize.define("department", {
          // Model alanları ve özellikleri tanımlanıyor.
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
              // email alanı, STRING türünde ve boş bırakılamaz (allowNull: false) olarak tanımlanıyor. Ayrıca bu alanda boş bir değer kabul edilmiyor (notEmpty: true).
    },
    dept_std_id: {
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
    timestamps: true,
    createdAt: 'created_at',//Bir kaydın oluşturulduğu tarihi ve saati tutar.
    updatedAt: 'updated_at'//Bir kaydın en son güncellendiği tarihi ve saati tutar.
  });

  // Oluşturulan model return ediliyor.
  return Department;
}
