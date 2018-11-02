function calculate() {
    var num1 = document.getElementById("num1")
        , num2 = document.getElementById("num2")
        , operators = document.getElementById("operators")
        , result = document.getElementById("result");
    console.log(num1.value, num2.value, operators.value);
    num2.style.boxShadow = "none";
    if (operators.value == "+") {
        result.value = (+num1.value) + (+num2.value);
    }
    else if (operators.value == "-") {
        result.value = (+num1.value) - (+num2.value);
    }
    else if (operators.value == "*") {
        result.value = (+num1.value) * (+num2.value);
    }
    else if (operators.value == "^") {
        result.value = (+num1.value) ** (+num2.value);
    }
    else if (operators.value == "/") {
        if (+num2.value) {
            result.value = (+num1.value) / (+num2.value);
        }
        else {
            result.value = "";
            num2.style.boxShadow = "0 0 3px #f00";
        }
    }
}
var btn = document.getElementById("calc_btn");
//calc_btn.onclick = this.style.display = (this.style.display == 'none') ? '' : 'none';