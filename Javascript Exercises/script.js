// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tc kimlik
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler

// var customerName = 'Çınar';
// var customerLastName = 'Turan';

// var fullName = 'Çınar Turan';
// var customerId = '1322323232';

// var total = 205.6;
// var gender = false; // erkek true, kadın false

// // object
// var address ={
//     city : 'Kocaeli',
//     district : 'İzmit',
//     body : 'Ömerağa mah.No:45'
// }

// // array
// var hobbies = ['Sinema','Kitap','Spor'];


// // ** Aşağıdaki siparişlerin toplamını hesaplayınız.

// var order1=Number('100');
// var order2=Number('150');

// var totalOrder = order1 + order2;
// console.log(totalOrder);

// // ** Aşağıdaki siparişlerin toplamını hesaplayınız.

// var order3=Number('158.2');
// var order4=Number('150.5');

// var totalOrder2 = order3 + order4;
// console.log(totalOrder2);

// // ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.

// var order4=parseInt('100.2');
// var order5=parseInt('174.5');

// var totalOrder3 = order4+order5
// console.log(totalOrder3);

// // ** Aşağıda verilen doğum yılına göre yaş hesaplayınız.

// const yearOfBirth = 1986;
// // yearOfBirth = 1987;

// console.log(new Date().getFullYear()-yearOfBirth);

// // ** Aşağıdaki string ifadenin karakter sayısını bulunuz.

// let course = 'Modern Javascript Kursu';

// console.log(course.length);



//Demo : Operators

//1-Can ve Adan'nın boy ve kg bilgilerini alın.
//2-Alınan bilgilere göre kilo endekslerini hesaplayınız.
// ** Formül: Kişinin kilosu/Boy uzunluğunun karesi
//3-Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
//4-Aşağıdaki tabloya göre Can ve Ada hangi gruba giriyor?

//0-18,4: Zayıf
//18,5-24,9: Normal
//25,0-29,9: Kilolu
//30,0-34,9: Şişman (Obez) 

// let IndexCan;
// let IndexAda;

// const kgCan = 60;
// const kgAda = 40;

// const heightCan = 1.70;
// const heightAda = 1.50;

// IndexAda = (kgAda)/(heightAda*heightAda)
// IndexCan = (kgCan)/(heightCan*heightCan)

// console.log(IndexAda.toFixed(1),IndexCan.toFixed(1));

// let adaHigherIndex = IndexAda>IndexCan;
// let canHigherIndex = IndexCan>IndexAda;

// console.log("Ada is heavier than Can:"+adaHigherIndex);
// console.log("Can is heavier than Ada:"+canHigherIndex);

// let AdaWeak = (IndexAda>=0) && (IndexAda<=18.4);
// let AdaNormal = (IndexAda>=18.5) && (IndexAda<=24.9);
// let AdaFat = (IndexAda>=25) && (IndexAda<=29.9);
// let AdaObese = (IndexAda>=30) && (IndexAda<=34.9);

// console.log("Ada Weak:"+AdaWeak);
// console.log("Ada Normal:"+AdaNormal);
// console.log("Ada Fat:"+AdaFat);
// console.log("Ada Obese:"+AdaObese);



//Date Object

// let d = new Date();
// let birthday = new Date(1990,1,5);

// //set Methods
// d.setFullYear(2021);
// d.setMonth(12);
// d.setDate(8);
// d.setHours(15);
// d.setMinutes(16);

// //get Methods
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());

// console.log(d.getFullYear()-birthday.getFullYear());
// console.log(d.getMonth()-birthday.getMonth());
// console.log(d.getDate()-birthday.getDate());

// console.log(d);
// console.log(typeof d);


// Dates & Times

    // ** Şu anki tarihin gün,ay,yıl bilgilerini yazdırınız.
        var dt = new Date();

        console.log(dt);
        console.log(dt.getMonth()+1);
        console.log(dt.getDate());
        console.log(dt.getFullYear());

    // ** Tarih ve saat bilgisini içeren bir Date object oluşturunuz.
        var dtA = new Date('8/24/2010 15:38:44');
        var dtB = new Date(2010,7,24,14,50,10);
        console.log(dtA);
        console.log(dtB);

    // ** 1/1/1990 tarihinden bir gün öncesini gösteriniz.
        var dtC = new Date('1/1/1990');
        var dayOfMonth = dtC.getDate();
        dtC.setDate(dayOfMonth-1);
        console.log(dtC);

    // ** İki tarih arasında geçen zamanı bulunuz.
    var start = new Date('1/1/1990');
    var end = new Date ('2/1/1992');

    var milisecond = end-start ;
    var second = milisecond / 1000;
    var minute = second / 60;
    var hour = minute /60;
    var day = hour / 24;

    console.log('milisecond :'+milisecond);
    console.log('second :'+second);
    console.log('minute :'+minute);
    console.log('hour :'+hour);
    console.log('day :'+day);
    
// ** Her yıl Mayıs ayının  2.haftası Pazar günü kutlanan anneler günü 2022 yılında ne zaman kutlanacaktır?
    var mothersDay = new Date();
    mothersDay.setHours(0,0,0,0);
    mothersDay.setFullYear(2022);
    mothersDay.setDate(1);
    mothersDay.setMonth(4);

    while(mothersDay.getDay() !=0){
        mothersDay.setDate(mothersDay.getDate()+1)
    }
    mothersDay.setDate(mothersDay.getDate()+7);
    console.log(mothersDay);

// ** Yaş hesaplama nasıl yapılır?
    var birthday = new Date('5/28/1993');
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    console.log(ageDate.getFullYear()-1970);
    // console.log(birthday.getTime);
    // console.log(Date.now());

