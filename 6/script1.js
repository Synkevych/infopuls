//ideal_weith.js
////Калькулятор золотого веса 
//Идеальный вес для женщины (кг) : (рост (см) х 3,5 : 2,54 - 108) х 0,453. 
//Идеальный вес для мужчины (кг) : (рост (см) х 4,0 : 2,54 - 128) х 0,453.
function getIW(sex, height, weight) {
    var k = {
            "male": [4, 128]
            , "female": [3.5, 108]
        }
        , iw = Math.round((height * k[sex][0] / 2.54 - k[sex][1]) * 0.453)
        , diff = weight - iw;
    if ((sex == "female") || (sex == "male")) {
        if (diff > 0) {
            console.log("Вам нужно худеть на", diff, "кг");
        }
        else if (diff < 0) {
            console.log("Вам нужно поправится на", Math.abs(diff), "кг");
        }
        else {
            console.log("Вы идеальны!");
        }
        return iw;
    }
    else {
        console.log("Not correct!");
    }
}
//console.log(getIW("female", 175, 60));
function getCals(aFood) {
    var table = {
            "Икра кеты зернистая": 250
            , "Икра лещевая пробойная": 144
            , "Икра минтая пробойная": 127
            , "Икра осетровая зернистая": 201
            , "Икра осетровая пробойная": 235
        }
        , cals = 0;
    for (var title in aFood) {
        cals += aFood[title] * table[title] / 100;
    }
    return cals;
}
console.log(getCals({
    "Икра кеты зернистая": 500
    , "Икра осетровая зернистая": 300
}), "kcal");
// вы скушали - как потратить на что