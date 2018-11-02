console.log("Hello !");
document.body.onload = addEelment;
var my_div = newElement = null;

function addEelment() {
    var newElement = document.createElement("div");
    newElement.innerHTML = "<h1> Script is connected in this page. </h1>";
    my_div = document.getElementById("txt1");
    document.body.insertBefore(newElement, my_div);
}
//function declaration описания
function calcSum(num, num2) { //num, num2 аргументы функции
    var sum = num + num2;
    console.log("local sum=", sum);
    return sum; // return - оператор
}
var sum = 0;
console.log("global sum=", sum);
console.log(calcSum(5, 6));
//function calcR(h, o) {
//    return 0.5 * h * o;
//}
//console.log(calcR(4, 6));
var x = 7;

function test() {
    x = 10; // локальная переменная
    var x = 9; // локальная переменная
}
test();
console.log(x); // глобальная переменная, ефект хостинга
function testg() {
    x = 10; // определена глобальная переменная
}
// если не поставить var  в нутри функции то она создат глобальную функцию
function translit(message) {
    var symbols = {
            "б": "b"
            , "г": "g"
            , "м": "m"
        }
        , newMessage = "";
    for (var i = 0; i < message.length; i++) {
        newMessage += symbols[message[i]] ? symbols[message[i]] : message[i];
    }
    return message;
}
var message = "aбабагаламага";
console.log(translit(message));
//
function getHoliday() {
    var today = new Date()
        , date = today.getDate()
        , month = today.getMonth() + 1
        , year = today.getFullYear()
        , age = 0
        , friendsData = {
            "12": {
                "5": {
                    "Kate": 2000
                    , "Lesha": 1999
                }
            }
        };
    console.log("Birthday:");
    console.log(friendsData[month][date]);
    if (friendsData[month][date]) {
        for (var name in friendsData[month][date]) {
            age = year - friendsData[month][date][name];
            console.log(name, "-", age);
        }
    }
    else {
        console.log(" Дней рождений нет!");
    }
}
getHoliday();
// 10, 20 5 6 7 8 9 10 .. лет
// выводить окончание лет, года,
// 31  22 23 24 25 года
// 26 лет
