const dbConfig = require('../config/config.js');
/*
  Sequelize için yapılandırma dosyasını çağırdık.
*/

const {Sequelize, DataTypes} = require('sequelize');
/*
  Sequelize modülünü çağırdık.
*/

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        },
        logging: dbConfig.loggingLevel

    }
)
/* 'const sequelize' nedir:
  Sequelize ile veritabanına bağlantı nesnesi oluşturduk.
*/

sequelize.authenticate()
  .then(() => {
      console.log('connected..')
  })
  .catch(err => {
      console.log('Error'+ err)
  });
/* 'sequelize.authenticate()' açıklaması:
  Veritabanına bağlantıyı kurulup-kurulamadığını doğruladık.
  Not: dbConfig.DB referansı oluşturduğumuz veritabanı adını gösteriyor. Bu isimde bir veritabnının önceden oluşturulmuş olması gerekiyor.
*/

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.student = require('./Student.js')(sequelize, DataTypes);
db.department = require('./Department.js')(sequelize, DataTypes);
/* Yeni modelleri veri tabanına ekleme işlemleri:
  Yeni eklenecek tabloları buraya ekleyeceğiz.
  veritabanına stdudent şemasını(nesnesini) ekledik.
*/



/* Veri tabanı tablo ilişkileri ekleme örneği:
veri tabanındaki tablolar arasındaki ilişkileri aşağıdaki gibi tanımlayacağız:
db.department.hasMany(db.student, {
  foreignKey: 'deptid',
  as: 'students'
});
db.student.belongsTo(db.department, {
  foreignKey: 'deptid',
  as: 'department'
});

Not: bu tanımlar örnektir doğru olmayabilir.
Not2: tablo yapılarında bir miktar değişiklik yapmak gerekebilir. Örneğin sutdent tablosunada zaten modelde var olan deptid alanı silmemiz gerekebilir. Galiba yukarıdaki kod ilgili sütunu otomatik ekliyordu.
Not3: tablolar arasındaki ilişkiler model dosyasında da tanımlanmabilir. Bu konuya bakacağım.
*/


db.sequelize.sync({ force: false}).then(() => {
  console.log('Veritabanı başarıyla oluşturuldu.');
}).catch(err => {
  console.error('Veritabanını oluştururken bir hata oluştu:', err);
});

/* 'db.sequelize.sync' açıklaması:
  Sequelize nesnemize eklediğimiz tabloları(nesne özelliği gösteriyor), veritabanında oluşturduk.
  'force: true' olursa sürekli tabloyu silip yeniden oluşturur.
  'force: false' olursa tablo yoksa oluşturur varsa oluşturmaz. Fakat tablo yapısında değişiklik olunca tabloyu güncellemiyor.(bunu araştırıcam şimdilik true kullanalım.)
*/

module.exports = db;
/*
 Tüm configrasyonnlarımızı tutan db nesnesini dışarıya return ettik.
*/