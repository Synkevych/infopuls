// 10, 20 5 6 7 8 9 10 .. лет
// выводить окончание лет, года,
// 31  22 23 24 25 года
// 26 лет
//getLabel(), количество рулонов обоев в зависимости от площади помещение, вычесть размер окон и дверей
var door = {
        width: 2
        , height: 3
        , quantity: 1
    }
    , win = {
        width: 5
        , height: 2
        , quantity: 2
    }
    , room = {
        perimeter: 46
        , height: 3
        , quantity: 1
    }
console.log("");

function getSum(room, window, door) {
    var area = (room.height * room.perimeter) * room.quantity
        , cut = (win.height * win.width) * win.quantity + (door.height * door.width) * door.quantity
        , sum = area - cut;
    console.log("Количество дверей:", door.quantity, " Общая площадь:", ((door.height * door.width) * door.quantity));
    console.log("Количество окон:", win.quantity, " Общая площадь:", ((win.height * win.width) * win.quantity));
    console.log("Количество комнат:", room.quantity, " Общая площадь:", ((room.height * room.perimeter) * room.quantity));
    return sum;
}
console.log("Количество обоев:", getSum(room, window, door));
//
//
function getHoliday() {
    var today = new Date()
        , date = today.getDate()
        , month = today.getMonth() + 1
        , year = today.getFullYear()
        , age = 0
        , friendsData = {
            "12": {
                "7": {
                    "Kate": 2000
                    , "Lesha": 1999
                    , "Ajrin": 1998
                    , "Mark": 1997
                    , "Ljova": 1996
                    , "Petia": 1995
                    , "Tioma": 1994
                }
            }
        };
    console.log("Birthday:");
    console.log(friendsData[month][date]);
    if (friendsData[month][date]) {
        for (var name in friendsData[month][date]) {
            age = year - friendsData[month][date][name];
            console.log(name, "-", age, getEnd(+age));
        }
    }
    else {
        console.log(" Дней рождений нет!");
    }
}
getHoliday();
// 10-5-6-7-8-9 - лет
// 1 - год
// 2-3-4 - года
function getEnd(num) {
    var str = "";
    if (num >= 10) {
        num = num % 10;
    }
    // (num => 10 ? num % 10)
    if (num === 1) {
        str = "год";
    }
    else if (num >= 2 && num <= 4) {
        str = "годa";
    }
    else {
        str = "лет";
    }
    return str;
}
// вывести рекурсией все елементы масива без if / for
var a = [1, 2, 3, 4, 5, 6, "Hellp"];

function getMass(mas, s) {
    for (var i = 0; i < mas.length; i++) {
        mas[i];
    }
    //    return mas[ getMass(s - 1)];
    console.log(getMass(a, a.length));
    //
    //функция удаляет "-" и увиличиват последующий символ
    //A-Z 65-90 a-97 z-122 /-32
    var newStr = "style-border-background-margin-padding-border";

    function delDef(str) {
        var str1 = []
            , charS = 0;
        for (var i = 0; i < str.length; i++) {
            charS = str.charCodeAt(i);
            if (charS === 45) {
                charS = str.charCodeAt(i + 1) - 32;
                //  str1[i + 1] = String.fromCharCode(charS);
                str1[i] = str[i + 1].toUpperCase();
                i++;
            }
            else {
                str1[i] = str[i];
            }
        }
        return str1.join("");
    }
    console.log(delDef(newStr));
