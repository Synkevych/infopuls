console.log("Hello !");
document.body.onload = addEelment;
var my_div = newElement = null;

function addEelment() {
    var newElement = document.createElement("div");
    newElement.innerHTML = "<h1> Script is connected in this page. </h1>";
    my_div = document.getElementById("txt1");
    document.body.insertBefore(newElement, my_div);
}
/*
Переменная абзац текста - строка.
- получить одно какое-то слово
- посчитать количество слов
- посчитать количество предложений
- зашифровать строку
- вывести время словами
- лотерея */
var randString = "15 главных трендов контент-маркетинга в 2018 году: 1. Все хорошие компании будут работать хорошо, а все плохие — плохо. Люди будут читать и смотреть то, что им интересно, а что неинтересно— не будут. 2. Контент-маркетинг по-прежнему будет дорогим, его мало кто будет делать, а из тех, кто его делает, почти все будут делать его плохо. 3. Все будут много писать о контент-маркетинге, но мало кто им будет заниматься. 4. Просто проверка."
    , i = 0
    , tempString = ""
    , tempMass = []
    , count = 0
    , temp = ""
    , dateString = ["ноль", "один", "два", "три", "четыри", "пять", "шесть", "седмь", "восем", "девять", "десять", "надцать", "двадцать"]
    , stringSecond = ["ноль", "десять", "двадцать", "тридцать", "сорок", "пьядесят"]
    , newDate = new Date(2011, 0, 1, 18, 33, 14, 567);; // правильно ли сохранять в переменную или прироста в скорости не будет 
console.log(randString.substring(19, 26)); // контент
console.log(randString.substr(19, 7));
console.log(randString.slice(19, 26)); //
//
//      - посчитать количество слов
// удалить знаки пунктуации(46 44 48-57-59,60)и числа
for (i = 0; i < randString.length; i++) {
    temp = randString.charCodeAt(i);
    if (((temp < 44) || (temp > 60)) && (temp != 8212)) {
        tempString += randString.charAt(i);
    }
}
console.log("|", tempString, "|");
for (i = 0; i < tempString.length; i++) {
    temp = tempString.charCodeAt(i);
    if (temp == 32 && (tempString.charCodeAt(i - 1) != 32)) {
        count++;
    }
}
console.log("Kоличество  букв - ", tempString.length);
console.log("Kоличество  слов - ", count);
//
// посчитать количество предложений
// пердложение заканчивается на !(33), ?(63), .(46), ;(59)
count = 0;
tempString = [];
for (var j = 0, i = 0; i < randString.length; i++) {
    temp = randString.charCodeAt(i);
    if ((temp == 33) || (temp == 63) || (temp == 46) || (temp == 59) || (temp == 58)) {
        tempMass[count] = randString.substring(j, i + 1);
        j = (i + 1);
        count++;
    }
}
for (i = 0; i < tempMass.length; i++) {
    temp = tempMass[i].charCodeAt(1);
    if ((temp >= 48) && (temp <= 57) && (tempMass[i].charCodeAt(2) == 46) && (tempMass[i].charCodeAt(0) == 32)) {
        tempMass[i + 1] = tempMass[i] + tempMass[i + 1];
        tempMass.splice(i, 1);
    }
}
console.log("Kоличество  предложений - ", tempMass);
console.log("Kоличество  предложений - ", tempMass.length);
//
//- зашифровать строку
//
var newString = "15 главных трендов контент-маркетинга в 2018 году"
    , newString2 = "";

function getEncryption() {
    var temp = newString.length;
    for (var i = 0; i < temp; i++) {
        newString2 += String(newString.charCodeAt(i + 2)) + " ";
    }
    // return newString;
}
getEncryption();
console.log("Зашифрованый код:", newString2);
//
//- вывести время словами
//
console.log(newDate);
console.log("Сейчас :", stringSecond[String(newDate.getHours()).charAt(0)], dateString[String(newDate.getHours()).charAt(1)], "часов,", stringSecond[String(newDate.getMinutes()).charAt(0)], dateString[String(newDate.getMinutes()).charAt(1)], " минуты,", stringSecond[String(newDate.getSeconds()).charAt(0)], dateString[String(newDate.getSeconds()).charAt(1)], "секунд");
console.log(newDate.getHours(), " часа", newDate.getMinutes(), " минут", newDate.getSeconds(), " секунд");
//
//лотарея 
//
var newRand = ""
    , userNum = "1111";

function randomNum() {
    for (var i = 0; i < 5; i++) {
        newRand += Math.round(Math.random() * 5 + 0.5);
    }
}
randomNum();
console.log("com=", newRand, "user=", userNum);
if (userNum === newRand) {
    console.log("Congratulations, you win!");
}
else {
    console.log("You're lose!");
}