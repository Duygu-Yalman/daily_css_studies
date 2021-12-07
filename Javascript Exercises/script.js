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

let IndexCan;
let IndexAda;

const kgCan = 60;
const kgAda = 40;

const heightCan = 1.70;
const heightAda = 1.50;

IndexAda = (kgAda)/(heightAda*heightAda)
IndexCan = (kgCan)/(heightCan*heightCan)

console.log(IndexAda.toFixed(1),IndexCan.toFixed(1));

let adaHigherIndex = IndexAda>IndexCan;
let canHigherIndex = IndexCan>IndexAda;

console.log("Ada is heavier than Can:"+adaHigherIndex);
console.log("Can is heavier than Ada:"+canHigherIndex);

let AdaWeak = (IndexAda>=0) && (IndexAda<=18.4);
let AdaNormal = (IndexAda>=18.5) && (IndexAda<=24.9);
let AdaFat = (IndexAda>=25) && (IndexAda<=29.9);
let AdaObese = (IndexAda>=30) && (IndexAda<=34.9);

console.log("Ada Weak:"+AdaWeak);
console.log("Ada Normal:"+AdaNormal);
console.log("Ada Fat:"+AdaFat);
console.log("Ada Obese:"+AdaObese);



//Date Object

let d = new Date();

//set Methods
d.setFullYear(2021);
d.setMonth(11);

//get Methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(d);
console.log(typeof d);