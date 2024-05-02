//1. İstifadəçidən adını soruşun və cavab olaraq ona "Salam, [adı]!" çap edin

var name = prompt("Enter your name: ");
console.log("Salam, " + name);

// //2. İstifadəçidən doğum ilini soruşun, onun yaşını hesablayın və nəticəni çap edin. Cari il
// //kodda sabit olaraq qeyd edin

var birthYear = prompt("Enter your age: ");
console.log("Birth year : " + (2024 - Number(birthYear)));

// //3. İstifadəçidən kvadratın bir tərəfinin uzunluğunu soruşun və bu kvadratın perimetrini çap
// //edin.

var square = prompt("Enter length of 1 side of the square: ");
console.log("Perimetr : " + 4 * Number(square));

//4. İstifadəçidən bir dairənin radiusunu soruşun və bu dairənin sahəsini çap edin

var radius = prompt("Enter radius of circle : ");
console.log("Area of circle : " + 2 * (3.14 * Number(radius)));

//5. İstifadəçidən iki şəhər arasındakı məsafəni kilometr cinsində və hansısa saatda çatmaq
//istədiyini soruşun. Vaxtında çatmaq üçün lazım olan sürəti hesablayın

var distance = prompt("Enter distance of km : ");
var time = prompt("Enter the time : ");
console.log("Speed : " + Number(distance) / Number(time) + " km/h");

//6. Valyuta çevirici tətbiq edin. İstifadəçi dollarları daxil edir, proqram onları avrolara çevirir.
//Valyuta məzənnəsini bir sabitdə saxlayın.

var dollar = prompt("Enter Dollar$ : ");
console.log("Euro : " + Number(dollar) * 0.93);

// 7. İstifadəçi flash sürücünün həcmi GB olaraq göstərir. Proqram 820 MB ölçüsündəki
// faylların neçəsinin flash sürücünə sığacağını hesablayır

var gb = prompt("Enter GB of Flash : ");
console.log("File Count : " + (Number(gb) * 1024) / 820);

// 8. İstifadəçi cüzdanındakı pul miqdarını və bir cokoladka qiymətini daxil edir. Proqram
// istifadəçinin neçə cokoladka ala biləcəyini və onun əlində qalan qalan pul miqdarını çap edir

var chocoPay = prompt("Enter choco price : ");
var money = prompt("Enter your money : ");
console.log("Choco Count : " + Number(money) / Number(chocoPay));

// 9. İstifadəçidən üç rəqəmli bir ədəd soruşun və onu tərsinə çevirin. Həll etmək üçün%
// operatorundan istifadə etməyiniz tələb olunur (bölmənin qalığı)

var num = prompt("Enter a 3 digit number: ");
var one = num % 10;
var ten = (num % 100) / 10;
var hundreed = num / 100;

var reverseNum = one * 100 + ten * 10 + hundreed;
console.log("Reverse number: " + reverseNum);

// 10. İstifadəçidən bir tam ədəd soruşun və cavab olaraq onun cüt ədəd olub olmadığını çap
// edin. Tapşırıqda mantıq operatorlarını istifadə edin. Şərt operatorları if və ya switch istifadə
// etməyiniz tələb olunur.

var num = prompt("Enter number: ");

if (num % 2 === 0) {
  console.log("Even digit.");
} else {
  console.log("Singele digit.");
}
