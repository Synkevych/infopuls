/* 1. написать функцию для вывода вариантов как портатить ккал на основании результатов работы функции getCals()
 */
var spendCalories = {
    "Бег": 800
    , "Плавание": 500
    , "Тенис": 400
    , "Зарядка": 300
    , "Прогулка": 280
    , "Набор_текста": 140
    , "Сон": 50
}

function calcCalories(call) {
    if (call > spendCalories["Бег"]) {
        var t = call / spendCalories["Бег"];
        console.log("Нужно", Math.round(t), "часов бегу, чтобы спалить все калории.");
    }
    //    if (call > spendCalories["Плавание"] || call)
}
calcCalories(getCals({
    "Икра кеты зернистая": 500
    , "Икра осетровая зернистая": 300
}));
/*
    2. создать класс Мультиварка с двумя объектами. Для них вызвать разные методы.
    */
function Multivariate(ingredient, program) {
    var dishes = {
        "bread": 120
        , "casserole": 60
        , "buns": 30
        , "cake": 70
        , "time": 0
    };
    this.workDone = function () {
        console.log("Work done!")
    }
    this.ingredient = ingredient;
    this.program = program;
    this.status = function () {
        if (dishes["time"] === 0) console.log("Ready to do  something!")
        else {
            console.log("Timer run", dishes.time);
        }
        setTimeout(this.workDone, (+dishes.time * 60 * 10000));
    }
    this.cake = function () {
        dishes.time = dishes[program];
        console.log(dishes[program]);
        console.log("Timer start: ", "program :", this.program, ", time:", dishes["time"]);
    }
}
var bakecake = new Multivariate(["sugat", "milk", "flour"], "cake");
console.log("///");
//console.log(bakecake);
bakecake.status();
bakecake.cake();
bakecake.status();

/*
3. Написать функцию гороскоп. На вход - знак зодиака, на выходе - гороскоп для этого знака в зависимости от дня недели
*/
console.log("///");
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

function getHoroscope(zodiac) {
    let newDate = new Date()
        , day = newDate.getDay()
        , i = Math.round(Math.random() * 6.5)
        , rand = ["Ваше счастье должно иметь первостепенное значение для вас. Все остальное вторично, не так важно.", " Эгоизм должен быть скрытым — не стоит давать людям лишних поводов ненавидеть вас или недолюбливать.", " Солнце будет в тройном аспекте с Марсом, Нептуном и Юпитером. День может оказать не самым простым, но весьма насыщенным.", " Живите для себя, но не забывайте иногда делать что-то для других.", " Меркурий помог бы вам решить многие проблемы, но вместо этого он даст вам невероятную свободу действий.", " Все будет хорошо до тех пор, пока вы не решите выйти за рамки дозволенного.", "  У вас пройден незаметно. В этот день вы сможете понять, что ваша жизнь скоро изменится."];
    if (!(zodiacSings[zodiac][day])) {
        zodiacSings[zodiac][day] = "";
    }
    zodiacSings[zodiac][day] += zodiacSings["aries"][day] + rand[i];
    console.log("Здраствуй пользователь, вот твой гороскоп", zodiac, "на   - ", zodiacSings["aries"][day]);
    return zodiacSings[zodiac][day];
}
console.log(getHoroscope("pisces"));
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
function getWeather(time) {
    var times = Math.ceil((time) / 3);
    if (!isFinite(time)) console.log("Введено не правильное время");
    else {
        console.log("В", times * 3, ":00 часов погода будет такая:");
        console.log(weather[times]["sun"]);
        console.log("Температура: ", weather[times]["t"]);
        console.log(weather[times]["precipitation"]);
        console.log(weather[times]["humidity"]);
        console.log(weather[times]["wind"]);
    }
}
console.log("////");
getWeather(7);
/*
5. setInterval() */
function pt() {}
