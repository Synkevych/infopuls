////Калькулятор золотого веса 
//Идеальный вес для женщины (кг) : (рост (см) х 3,5 : 2,54 - 108) х 0,453. 
//Идеальный вес для мужчины (кг) : (рост (см) х 4,0 : 2,54 - 128) х 0,453.
var traning = true;
//console.log(food.val(), weight.val(), we, he, male);
function getIW() {
    var res = $(".res")
        , we = $(".we").val()
        , he = $(".he").val()
        , male = $(".male").val();
    res.text("");
    var k = {
            "Мужской": [4, 128]
            , "Женский": [3.5, 108]
        }
        , iw = Math.round(((+he) * k[male][0] / 2.54 - k[male][1]) * 0.453)
        , diff = (+we) - (iw);
    console.log("iw");
    if ((male == "Мужской") || (male == "Женский")) {
        if (diff > 0) {
            res.text("Вам нужно худеть на " + diff + " кг.");
        }
        else if (diff < 0) {
            res.text("Вам нужно поправится на " + Math.abs(diff) + " кг.");
            traning = false;
        }
        else {
            res.text("Вы идеальны!");
        }
        return iw;
    }
    else {
        res.text("Что-то не так, нельзя быть настолько прекрасным, попробуйте еще раз!");
    }
    console.log("iw");
}
console.log(getIW());
$(".btn").click(getIW);
//
//function getCals(aFood) {
//    var table = {
//            "Икра кеты зернистая": 250
//            , "Икра лещевая пробойная": 144
//            , "Икра минтая пробойная": 127
//            , "Икра осетровая зернистая": 201
//            , "Икра осетровая пробойная": 235
//        }
//        , cals = 0;
//    for (var title in aFood) {
//        cals += aFood[title] * table[title] / 100;
//    }
//    return cals;
//}
//console.log(getCals({
//    "Икра кеты зернистая": 500
//    , "Икра осетровая зернистая": 300
//}), "kcal");
// вы скушали - как потратить на что
function calcCalories() {
    var spendCalories = {
            "Бег": 800
            , "Плавание": 500
            , "Тенис": 400
            , "Зарядка": 300
            , "Прогулка": 280
            , "Набор_текста": 140
            , "Сон": 50
        }
        , result = $(".result")
        , food = $(".food").val()
        , weight = $(".weight").val()
        , call = {
            food.Str: (+weight)
        }
        , table = {
            "Икра кеты зернистая": 250
            , "Икра лещевая пробойная": 144
            , "Икра минтая пробойная": 127
            , "Икра осетровая зернистая": 201
            , "Икра осетровая пробойная": 235
        }
        , cals = table[food] * / 100;
        //
    console.log(food, call, traning);
    weight
    if (traning) {
        result.text = ("Лучше посмотри фильмец, у тебя и так недовес!")
    }
    else if (call > spendCalories["Бег"]) {
        var t = call / spendCalories["Бег"];
        result.text("Нужно " + Math.round(t) + " часов бегу, чтобы спалить все калории.");
    }
}
//calcCalories(getCals({
//    "Икра кеты зернистая": 500
//    , "Икра осетровая зернистая": 300
//}));
//
$(".btn1").click(calcCalories);