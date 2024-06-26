import db from '../models/database.js';


/* departmentController.js yapılacaklar:
Create,update,delete,get ve getAll fonksiyonları yazılacak.
*/

//create main Model
const Department = db.department;


/* createDepartment açıklaması:
    post method access
*/
export const createDepartment = async (req, res) => {
    try {
        console.log(req.body);
        
        const departmentExist = await Department.findOne({ where: { name: req.body.name } });
        if (departmentExist) {
            return res.status(400).json({
                message: "Başarısız! Department, ${departmentExist.name}  zaten var!"
            });
        }
        
        const department = await Department.create(req.body);

        return res.status(201).json({
            message: "Başarılı! Departmant başarıyla oluşturuldu!",
            department: {
                dpid:department.dpid,
                name: department.name,
                dept_std_id:department.dept_std_id
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            title: "Hata!",
            message: "Sunucu hatası"
        });
    }
    
};



/* deleteDepartment açıklaması:
Delete method access
*/
export const deleteDepartment = async (req, res) => {
    
        try {
            // Departmanı veritabanından sil
            const deletedDepartment = await Department.destroy({
                where: {
                    name: req.body.name // Departman adını sorgu parametrelerinden al
                }
            });
    
            // Silinen departman varsa
            if (deletedDepartment) {
                return res.status(200).json({
                    message: "Başarılı! Departman başarıyla silindi."
                });
            } else {
                // Departman bulunamadı
                return res.status(404).json({
                    message: "Departman bulunamadı."
                });
            }
        } catch (error) {
            console.error(error);
            // Sunucu hatası
            return res.status(500).json({
                title: "Hata!",
                message: "Sunucu hatası."
            });
        }
    
    
};

/* getDepartment açıklaması:
Get method access
*/
export const getDepartment = async (req, res) => {
    
        try {
            console.log(req.body);
            // Örneğin, departmanın adına göre arama yapmak istiyorsanız, req.body.name gibi bir alan kullanabilirsiniz
            
            const department = await Department.findOne(
            {
                where: { name: req.query.name },
                include: [{
                  model: db.student,
                  as: 'students'
                }]
              });

            console.log(department);
            if (department === null) {
                // Departman bulunamadı
                res.send({
                    "mesaj": "Departman bulunamadı",
                });
                return;
            } else {
                res.send({
                    "mesaj": "Departman bulundu",
                    "department": department
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({
                "baslik": "Hata!",
                "mesaj": "Sunucu hatası"
            });
        }
    
    
};

/* getAllDepartments açıklaması:
Get method access
*/
export const getAllDepartments = async (req, res) => {
    
        try {
            // Tüm departmanları veritabanından al
            const departments = await Department.findAll();
            
            // Departmanlar bulunduysa
            if (departments.length > 0) {
                return res.status(200).json({
                    message: "Başarılı! Tüm departmanlar alındı.",
                    departments: departments.map(department => ({
                        name: department.name,
                        dept_std_id: department.dept_std_id // Varsa, diğer departman bilgilerini de buraya ekleyebilirsiniz
                    }))
                });
            } else {
                // Departman bulunamadı
                return res.status(404).json({
                    message: "Departman bulunamadı."
                });
            }
        } catch (error) {
            console.error(error);
            // Sunucu hatası
            return res.status(500).json({
                title: "Hata!",
                message: "Sunucu hatası."
            });
        }
    
    
};

/* updateDepartment açıklaması:
 Put method access
*/
export const updateDepartment = async (req, res) => {
    try {
        const name = req.query.name; // Güncellenecek departmanın yeni adı ve kodu
        
        // Departman kodu veritabanında var mı diye kontrol et
        const existingDepartment = await Department.findOne({ where: { name } });

        // Eğer departman bulunamazsa
        if (!existingDepartment) {
            return res.status(404).json({
                message: "Departman bulunamadı."
            });
        }

        // Departman varsa, güncelleme yap
        await existingDepartment.update(req.body); 

        return res.status(200).json({
            message: "Başarılı! Departman başarıyla güncellendi.",
            updated_dept: existingDepartment
        });
    } catch (error) {
        console.error(error);
        // Sunucu hatası
        return res.status(500).json({
            title: "Hata!",
            message: "Sunucu hatası."
        });
    }
};