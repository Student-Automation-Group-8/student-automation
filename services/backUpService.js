import cron from 'node-cron';   
import mailService from './mailService.js'; 
import writeStudentListToJSONService from './writeStudentListToJSONService.js'; 


const backUpService = () =>{
    const taskSendMailBackUp = () => {
        try {
            console.log("E-posta üzerinden data yedekleme görevi çalıştırıldı.");
            writeStudentListToJSONService.writeStudentListToJSON();
            const data = writeStudentListToJSONService.getWritedFile();
            const JsonData = JSON.parse(data); // Assign a valid value to strData
            const strData = JSON.stringify(JsonData);
            mailService(strData);
        } catch (error) {
            console.error("E-posta gönderimi sırasında hata oluştu:", error);
        }
    };
    
    // Cron işini oluştur ve çalışma zamanını ayarla
    // "0 0 * * *" her gün saat 00:00'da çalıştırır
    // "0 0 */7 * *" her 'x' günde bir saat 00:00'da çalıştırır
    // Cron işini oluştur ve çalışma zamanını ayarla
    // "*/3 * * * * *"
    const cronJob = cron.schedule("0 0 */7 * *", taskSendMailBackUp, {
        scheduled: true,
        timezone: "UTC" // Zaman dilimi
    });

    // Cron işini başlat
    cronJob.start();
}

export default backUpService;


