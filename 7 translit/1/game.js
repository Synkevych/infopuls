function game() {
    var userAnswer = this.value
        , result = document.getElementById("result")
        , answers = ["камень"
            , "ножницы"
            , "бумага"]
        , m = 0
        , n = 2
        , randNum = Math.floor(Math.random() * (n - m + 1)) + m
        , computerAnswer = answers[randNum]
        , table = {
            "камень": {
                "камень": 0
                , "ножницы": 1
                , "бумага": -1
            }
            , "ножницы": {
                "камень": -1
                , "ножницы": 0
                , "бумага": 1
            }
            , "бумага": {
                "камень": 1
                , "ножницы": -1
                , "бумага": 0
            }
        }
        , messages = {
            "-1": "Вы проиграли"
            , "1": "Вы выграли"
            , "0": "Упс, ничья"
        };
    console.log(this);
    console.log("Ваш ответ:", userAnswer, " ", "Ответ компютера:", computerAnswer);
    console.log(messages[table[userAnswer][computerAnswer]]);
    answer.selectedIndex = 0;
    result.innerText = userAnswer + " " + computerAnswer + " " + messages[table[userAnswer][computerAnswer]];
}
var answer = document.getElementById("answer");
answer.onchange = game;
answer.value