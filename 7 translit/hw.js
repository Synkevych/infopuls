var randomNamber = [];

function getRandom(num, symbolLength) {
    for (i = 0; i < num; i++) {
        randomNamber[i] = Math.round(Math.random() * symbolLength);
    }
    return randomNamber;
}
//
var mass = getRandom(100, 9999);
console.log(mass);

function getSum() {
    var temp = 0
        , faund = false
        , sum = document.getElementById("txt1")
        , newMessage = document.getElementById("newMessage");
    newMessage.innerHTML = "";
    for (i = 0; i < mass.length; i++) {
        temp = (mass[i]).toString(10);
        temp = (+temp.charAt(0)) + (+temp.charAt(1)) + (+temp.charAt(2)) + (+temp.charAt(3));
        if (temp == sum.value) {
            console.log(" Число: ", mass[i], "позиция елемента", (i + 1), " сума равна - ", temp);
            newMessage.innerHTML += " Число: " + mass[i] + " позиция елемента " + (i + 1) + " сума равна - " + temp;
            faund = true;
        }
    }
    if (!faund) newMessage.innerHTML = ("Совпадений не найдено!")
}
var btn1 = document.getElementById("btn1");
btn1.onclick = getSum;
//
//функция вызывает функцию 
//
function filter(source, fn) {
    var result = [10, 100];
    for (var i = 0; i < source.length; i++) {
        if (fn(source[i])) {
            result.push(source[i]);
        }
    }
    return result;
}
var array = [4, 2, 10, 100, 5, 200];
var res = filter(array, function (value) {
    return value > 10;
});
console.log(res);
//
//
//
function func1() {
    function func2() {
        return 'Привет';
    }
    return func2;
}
console.log(func1()());
//
//
//
let zodiacSings = {
    aries: {
        0: "Воскресение."
        , 2: "Вторник."
        , 3: "Среда."
        , 4: "Четверг."
        , 5: "Пятница."
        , 6: "Субота."
        , 1: "Понедельник."
    }
    , taurus: {}
    , gemini: {}
    , cancers: {}
    , lion: {}
    , virgos: {}
    , libra: {}
    , scorpios: {}
    , sagittarius: {}
    , capricorns: {}
    , aquarius: {}
    , pisces: {}
}

function getHoroscope() {
    var newDate = new Date()
        , zodiac = document.getElementById("txt2").value
        , day = document.getElementById("answer").value
        , res = document.getElementById("res")
        , rand = ["Ваше счастье должно иметь первостепенное значение для вас. Все остальное вторично, не так важно.", " Эгоизм должен быть скрытым — не стоит давать людям лишних поводов ненавидеть вас или недолюбливать.", " Солнце будет в тройном аспекте с Марсом, Нептуном и Юпитером. День может оказать не самым простым, но весьма насыщенным.", " Живите для себя, но не забывайте иногда делать что-то для других.", " Меркурий помог бы вам решить многие проблемы, но вместо этого он даст вам невероятную свободу действий.", " Все будет хорошо до тех пор, пока вы не решите выйти за рамки дозволенного.", "  У вас пройден незаметно. В этот день вы сможете понять, что ваша жизнь скоро изменится."];
    console.log(zodiac);
    console.log(day);
    res.innerHTML = "";
    if (!(zodiacSings[zodiac][day])) {
        zodiacSings[zodiac][day] = "";
    }
    zodiacSings[zodiac][day] = zodiacSings["aries"][day] + rand[day];
    res.innerHTML = ("Здраствуй пользователь, вот твой гороскоп", zodiac, "на   - ", zodiacSings["aries"][day]);
}
var answer = document.getElementById("answer");
answer.onchange = getHoroscope;
answer.value
    /*
    4. Написать функцию для вывода погоды в зависимости от времени суток.
    */
let weather = {
    "1": {
        t: 2
        , sun: "Преимущ. солнечно"
        , precipitation: "Вероятность осадков: 0%"
        , humidity: "Влажность: 86%"
        , wind: "Ветер: 6 км/ч"
    }
    , "2": {
        t: 4
        , sun: "Преимущ. солнечно"
        , precipitation: "Вероятность осадков: 0%"
        , humidity: "Влажность: 84%"
        , wind: "Ветер: 11 км/ч"
    }
    , "3": {
        t: 5
        , sun: "Переменная облачность"
        , precipitation: "Вероятность осадков: 4%"
        , humidity: "Влажность: 83%"
        , wind: "Ветер: 16 км/ч"
    }
    , "4": {
        t: 5
        , sun: "Переменная облачность"
        , precipitation: "Вероятность осадков: 0%"
        , humidity: "Влажность: 83%"
        , wind: "Ветер: 13 км/ч"
    }
    , "5": {
        t: 8
        , sun: "Переменная облачность"
        , precipitation: "Вероятность осадков: 0%"
        , humidity: "Влажность: 83%"
        , wind: "Ветер: 13 км/ч"
    }
    , "6": {
        t: 10
        , sun: "Переменная облачность"
        , precipitation: "Вероятность осадков: 0%"
        , humidity: "Влажность: 83%"
        , wind: "Ветер: 13 км/ч"
    }
    , "7": {
        t: 6
        , sun: "Переменная облачность"
        , precipitation: "Вероятность осадков: 0%"
        , humidity: "Влажность: 83%"
        , wind: "Ветер: 13 км/ч"
    }
    , "8": {
        t: 4
        , sun: "Переменная облачность"
        , precipitation: "Вероятность осадков: 0%"
        , humidity: "Влажность: 83%"
        , wind: "Ветер: 13 км/ч"
    }
};
// 1;3;6;9;12;15;18;21;24 period
function getWeather() {
    var times = Math.ceil((time) / 3)
        , res2 = document.getElementById("res2");
    if (!isFinite(time)) console.log("Введено не правильное время");
    else {
        res2.innerHTML = ("В" + times * 3 + ":00 часов погода будет такая:");
        (weather[times]["sun"]);
        res2.innerHTML += ("Температура: " + weather[times]["t"]);
        res2.innerHTML += (weather[times]["precipitation"]);
        res2.innerHTML += (weather[times]["humidity"]);
        res2.innerHTML += (weather[times]["wind"]);
    }
}
var btn3 = document.getElementById("btn3")
    , time = document.getElementById("weather").value;
btn3.onclick = getWeather;