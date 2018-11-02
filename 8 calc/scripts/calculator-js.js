function calculate() {
    var num1 = $(".num1")
        , num2 = $(".num2")
        , operators = $(".operators")
        , result = $(".result");
    console.log(num1.val(), num2.val(), operators.val());
    num2.css("box-shadow", "none");
    if (operators.val() == "+") {
        result.val((+num1.val()) + (+num2.val()));
    }
    else if (operators.val() == "-") {
        result.val((+num1.val()) - (+num2.val()));
    }
    else if (operators.val() == "*") {
        result.val((+num1.val()) * (+num2.val()));
    }
    else if (operators.val() == "/") {
        if (+num2.val()) {
            result.val((+num1.val()) / (+num2.val()));
        }
        else {
            result.val("");
            num2.css("box-shadow", "0 0 3px #ff0000");
        }
    }
}
$(".calc_btn").click(calculate);