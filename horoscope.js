/**
 * Sisteme dogum gunu @day ve ayi degisken olarak elle girilicek,
 * const olarak girilicek,
 * Girilen degerler 12 kosuldan (burc tarihlerinden),hangisini saglarsa
 * ekrana o burc yazdirilacak.
 * 
 * 
 */

let month = 2;
let day = 2;
function dayPrint(){
let daycheck=document.getElementById("datecheck").value;
   month=  daycheck.substr(5, 2);
   day=daycheck.substr(8, 2);
  
   helloWorld();
}
function helloWorld(){
   
   let name=document.getElementById("text");
   let img=document.getElementById("photos");
   let content=document.getElementById("comment");
if (((month == 3) && (day >= 21)) || ((month == 4) && (day <= 19))) {
   name.innerHTML=("Aries")
   name.style.fontSize="55px"
document.getElementById("photos").src="https://symbolikon.com/wp-content/uploads/edd/2019/09/astrology-aries-bold-400w.png"
content.innerHTML="Ay Terazi burcunda ilerlemeyi sürdürürken ikili ilişkilerde denge ve uyumu korumak önemli hale geliyor. Adil ve eşitlikçi olmaya çalışabilir, ilişkinizde kendiniz kadar karşı tarafı da düşünebilirsiniz. Sabah saatlerinde özellikle size düşen sorumlulukları dikkate almalısınız."
} else if (((month == 4) && (day >= 20)) || ((month == 5) && (day <= 20))) {
   name.innerHTML=("Taurus")
   name.style.fontSize="55px"
   img.src="https://seeklogo.com/images/T/taurus-logo-0112B030BE-seeklogo.com.png"
   content.innerHTML="Günlük iş ve sorumluluklar özellikle sabah saatlerinde kendilerini çok daha fazla hatırlatabilir. Detaylarla, titizlik ve çalışma gerektiren konularla ilgilenmeniz gerekebilir. Kaygı ve kuruntuların üzerinde durmamalısınız."
} else if (((month == 5) && (day >= 21)) || ((month == 6) && (day <= 20))) {
   name.innerHTML=("Gemini")
   name.style.fontSize="55px"
   img.src="https://i.pinimg.com/originals/c9/33/97/c93397a8dfac77a0038018f16703ef40.jpg"
   content.innerHTML="Ay Terazi burcunda ilerlemeyi sürdürürken aşk hayatınıza dair konular gündemde olabilir. Yüreğinizin sesini dinlemek isteyebilir, tutkularınızın peşinden koşabilir, yaratıcılığınızı, sanatsal yönlerinizi ortaya çıkarabilirsiniz."

} else if (((month == 6) && (day >= 21)) || ((month == 7) && (day <= 22))) {
   name.innerHTML=("Cancer")
   name.style.fontSize="55px"
  img.src="https://symbolikon.com/wp-content/uploads/edd/2019/09/astrology-cancer-bold-400w.png"
  content.innerHTML="Ev ve aileye ilişkin konular gündeminize gelirken sorumluluklarınızın bilincinde hareket edebilirsiniz. Geçmiş, tarih ve anılar size yol gösterebilir. Evinizle daha çok ilgilenebilirsiniz."
} else if (((month == 7) && (day >= 23)) || ((month == 8) && (day <= 22))) {
   name.innerHTML=("Leo")
   name.style.fontSize="55px"
   img.src="https://symbolikon.com/wp-content/uploads/edd/2019/09/astrology-leo-bold-400w.png"
   content.innerHTML="İletişim açısından hareketli bir gün olabilir, kısa yolculuklar ve ziyaretler gündeminize gelebilir. Randevularınızı, saatleri ve trafiği sıkı takip etmeniz gerekebilir."
} else if (((month == 8) && (day >= 23)) || ((month == 9) && (day <= 22))) {
   name.innerHTML=("Virgo")
   name.style.fontSize="55px"
   img.src="https://symbolikon.com/wp-content/uploads/edd/2019/09/astrology-virgo-bold-400w.png"
   content.innerHTML="Maddi konular söz konusu olduğunda biraz daha kaygılı hareket edebilirsiniz. Zira sahip olduklarınızı, kaynaklarınızı, yeteneklerinizi iyice değerlendirmek isteyebilirsiniz. Bazı alışveriş ve harcamalar söz konusu olabilir."

} else if (((month == 9) && (day >= 23)) || ((month == 10) && (day <= 22))) {
   name.innerHTML=("Libra")
   name.style.fontSize="55px"
   img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Libra.svg/1225px-Libra.svg.png"
   content.innerHTML="Ay burcunuzda ilerlerken hayatınızın kontrolü daha fazla elinizde olabilir. Daha cesur ve girişimci davranabilirsiniz, lider yönleriniz daha çok ortaya çıkabilir. İlişkilerinizde söz sahibi olabilirsiniz."
} else if (((month == 10) && (day >= 23)) || ((month == 11) && (day <= 21))) {
   name.innerHTML=("Scorpio")
   name.style.fontSize="55px"
   img.src="https://i.pinimg.com/originals/0c/4f/d9/0c4fd9740a65310b4d32ea63893108ed.png"
   content.innerHTML="Ay Terazi burcunda ilerlerken hayatı genel akışına daha fazla bırakabilirsiniz. Ancak dalgınlık, unutkanlık ve ihmallere daha çok dikkat etmelisiniz. Kontrolünüz dışı gelişmeler, etrafınızın hareketliliği gündeminize şekil verebilir."
} else if (((month == 11) && (day >= 22)) || ((month == 12) && (day <= 21))) {
   name.innerHTML=("Sagittarius")
   name.style.fontSize="55px"
   img.src="https://previews.123rf.com/images/gvais/gvais2002/gvais200200013/142849869-sagittarius-astrological-zodiac-sign-isolated-on-white-background-simple-horoscope-icon-astrology-lo.jpg"
   content.innerHTML="Ay Terazi burcunda ilerlerken sosyal paylaşımlara oldukça açık bir gün olabilir, arkadaşlarınızla, dostlarınızla bir araya gelebilir, onların yanlarında duygularınızı daha çok ortaya koyabilir, fikirlerinizi, görüşlerinizi paylaşabilirsiniz."
} else if (((month == 12) && (day >= 22)) || ((month == 1) && (day <= 19))) {
   name.innerHTML=("Capricorn")
   name.style.fontSize="55px"
   img.src="https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Capricorn_horoscope_zodiac_astrology_sign_symbol-512.png"
   content.innerHTML="Görev ve sorumluluklarınızın ön plana geçtiği bir gün olabilir, iş hayatınıza ve kariyerinize ilişkin konular gündeminize gelebilir. Üstlerinizle ve otorite konumundaki kişilerle daha fazla temas ve irtibat halinde olabilirsiniz"
} else if (((month == 1) && (day >= 20)) || ((month == 2) && (day <= 18))) {
   name.innerHTML=("Aquarius")
   name.style.fontSize="55px"
   img.src="https://cdn0.iconfinder.com/data/icons/astronomical-signs/16/Capricorn_horoscope_zodiac_astrology_sign_symbol-512.png"
   content.innerHTML="Terazi burcunda ilerlemeyi sürdüren Ay, yabancı, yurt dışı bağlantılı konulara işaret ediyor. Seyahatler ya da uzaklarla ilgili haberler gündeme gelebilir. Sosyal paylaşıma açık, hareketli bir günde olabilirsiniz."
} else if (((month == 2) && (day >= 19)) || ((month == 3) && (day <= 20))) {
   name.innerHTML=("Pisces")
   name.style.fontSize="55px"
   img.src="https://symbolikon.com/wp-content/uploads/edd/2019/09/astrology-pisces-bold-400w.png"
   content.innerHTML="Maddi konular, iş ve para konuları gündeme gelirken sabah saatlerinde sorumluluklar ön plana geçebilir. Hareketli bir gün mücadeleci yönünüz ortaya çıkabilir. Fiziksel, sportif aktivitelerle ilgilenebilirsiniz."
}

} 

