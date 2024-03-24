# student automation group 8

Öğrenci otomasyon sistemleri için örnek bir RestAPI.

<h3 align="center" color="Darkblue">4. Sınıf Bahar Dönemi Node.ks Dersi Proje Ödevi</h3>
<h6 align="center" >Grup-8</h6>

<ol>
<li>
      <h4 color="Red">Proje Amacı ve Hedefleri:</h4>
      <p>Bu projenin amacı, öğrenci otomasyon işlemlerinni güvenli ve kullanışlı bir şekilde yapmamıza olanak sunan  bir RestAPI geliştirilmesidir. Projenin hedefleri şunlardır:</p>
      <ul>
        <li>* Öğrenci verilerinin depolanması.</li>
        <li>* Bölüm verilerinin depolanması.</li>
        <li>* Veritabqnı bütünlüğünün sağlanamsı</li>
        <li>* Uygulamanın yüksek performanslı, ölçeklenebilir, stabil ve mümkün olduğunca uç sistemlerden bağımsız çalışmasını sağlamak.</li>
      </ul>
  </li>
  <li>
      <h4 color="Red">Benimsenen Yazılım Geliştirme Metodolojisi:</h4>
      <p>Projede Agile metodolojilerinden Scrum modeli kullanılacaktır. Scrum, proje geliştirme sürecini daha esnek ve iteratif bir şekilde yönetmeye olanak sağlayan bir modeldir. Scrum modeli projeyi küçük parçalara yani sprintlere böler ve her sprintte önceden belirlenmiş işler üzerinde çalışma yapılmasına olanak sağlar.

Scrum modelinin temel özellikleri şunlardır:

	Ürün sahibi: Projede ürün sahibi olarak belirlenen kişi kullanıcı gereksinimlerini belirler ve sprintlerin öncelik sırasını belirleyerek geliştirme sürecine yön verir.

	Scrum Master: Projenin Scrum uygulamalarını yöneten ve takımın sorunsuz bir şekilde çalışmasını sağlayan kişidir. Engelleri kaldırmak takımı desteklemek ve süreci optimize etmek gibi görevleri vardır.

	Geliştirme Takımı: Projenin gerçekleştirilmesinden sorumlu olan ekip üyeleridir. Back-End ve Front-End geliştiriciler veri tabanı uzmanı gibi roller bu takımda yer alabilir.

Scrum modelinde, projenin geliştirilmesi iteratif bir şekilde gerçekleştirilir. Her sprint, genellikle 1 ila 2 hafta arasında değişen bir zaman dilimini kapsar. Her sprint öncesinde sprint planlama toplantıları yapılır ve sprint boyunca takımın hedefleri gerçekleştirmesi beklenir. Sprint sonunda gerçekleştirilen işler gözden geçirilir ve kullanıcı/ekip üyelerinin geri bildirimleri dikkate alınır.

Bu proje kapsamında, Scrum modeli kullanılarak sprintler oluşturulacak, işler belirlenecek ve süreç düzenli olarak gözden geçirilecektir Bu sayede proje ilerlemesi takip edilecek, esneklik ve müşteri odaklılık sağlanacak ve geliştirme süreci optimize edilmesi kolaylaşacaktır.</p>
  </li>
  <li>
      <h4 color="Red">Takım Üyeleri ve Yetkinlikleri:</h4>
      <ul>
        <li>Lead: Ahmet Bahadır Aksakal - Full Stack Developer</li>
        <li>?</li>
        <li>?</li>
        <li>?</li>
		<li>?</li>
      </ul>
  </li>
  <li>
      <h4 color="Red">Takım Üyelerinin Görev Dağılımları Ve Çalışma Stratejisi:</h4>
      <p>Takım üyelerimiz tümü proje için gerekli teknoolojilere hakimdir bu nedenle görev dağılımı iş odaklı ilerlemektedir. Örneğin bir task verilidiğinde, ilgili işin yapılması için gereken Back-End çalışması ve Veritabanı çalışmasını, ilgili mühendis tarafından tamamlanır. Bu şekilde uygulama geliştirilmesinde hız ve esneklik kazanılmış olur. Tamamlanan iş iligili repoya yüklenir ve en son Git Sistemi Yönetim Uzmanı tarafından tüm repolar birleştirilir. </p>
      <p>Proje geliştiricilerinin neler yaptığı, hangi işleri aldığı ve tamamladığı Git sistemi üzerinden takip edilir.</p>
  </li>
  <li>
      <h3 color="Red">Projede Kullanılan Teknolojiler:</h3>
      <ul>
        <li>Node.js</li>
        <li>Sequelizer CLI</li>
        <li>JWT</li>
        <li>Bcrypt</li>
        <li>ES6 Standart</li>
      </ul>
  </li>
  <li>
      <h4 color="Red">Proje Ayağa Kaldırma Adımları:</h4>
      <ul>
		<li> Git CLI üzerinden `git clone https://github.com/Student-Automation-Group-8/student-automation.git` komutu ile ilgili repo çekilir.
        <li><strong>npm</strong> paket yöneticisine ihtiyacımız var. Node.js web sitesinden npm paket yöneticisini kurun.</li>
        <li>Projenin bulunduğu klasör altında komut terminali açın.</li>
        <li>npm install komutunu çalıştırın.</li>		
		<li>BackEnd - Veritabanı (PostgreSQL) bağlantısını yapmak için .env dosyası içindeki config bilgilerini düzenleyin.</li>
        <li>`nodemon app.js` komutunu çalıştırın.</li>   
		<li>BackEnd default olarak localhost:3000 adresinde çalışacaktır.</li>
      </ul>
  </li>
  <li>
      <h4 color="Red">Uygulamamızın Özellikleri:</h4>
      <ul>        
        <li>Kullanıcı Kayıt</li>
        <li>Kullanıcı Giriş</li>
        <li>Öğrenci Bilgisi İşleme</li>
        <li>Bölüm Bilgisi İşleme</li>
      </ul>
  </li>
  <li>
      <h4 color="Red">Programdan Görseller:</h4>
      <ul>        
       <li><img src="/img/1.png"> sample1 </li>
       <li><img src="/img/2.png"> sample2 </li>
       <li><img src="/img/3.png"> sample3 </li>
       <li><img src="/img/4.png"> sample4 </li>
      </ul>
  </li>	
</ol>


