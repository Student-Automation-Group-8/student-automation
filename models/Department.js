'use strict'; // Bu dosyada ES6 standartlarına göre kod yazılacağını belirtir.
/* deparment.js yapılıcaklar:
student modeline benzer bir model, department için buraya yazılacak.
*/
//'use strict'; // Bu dosyada ES6 standartlarına göre kod yazılacağını belirtir.

// Student modeli tanımlanıyor. Bu model, veritabanında student tablosunu temsil edecek. Aynı zqamanda bir class gibi kullanılabilecek.
export default (sequelize, DataTypes) => {

    const Department = sequelize.define("department", {
      // Model alanları ve özellikleri tanımlanıyor.
      dpid:{
        type: DataTypes.INTEGER, 
      
      },    
      name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
        // email alanı, STRING türünde ve boş bırakılamaz (allowNull: false) olarak tanımlanıyor. Ayrıca bu alanda boş bir değer kabul edilmiyor (notEmpty: true).
      },
      dept_std_id:{
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
      timestamps: false
    });
  
    // Oluşturulan model return ediliyor.
    return Department;
  }