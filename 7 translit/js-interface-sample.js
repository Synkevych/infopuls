function showMessage() {
    console.log("button click");
}

function changeBtnStyle() {
    btn1.style.background = "red";
    btn1.style.boxShadow = " 0 0 3px rgba(0,100,0,0.5)";
}

function changeBtnStyle2() {
    btn1.style.background = "white";
    btn1.style.boxShadow = "none";
}
//поставить кнопке в соответствии обект JS
var btn1 = document.getElementById("btn1");
console.log(btn1.tagName, btn1.type); // смотреть через отладчик 
//привязать функцию 
// назначить на клик по кнопке функцию 
btn1.onclick = showMessage;
btn1.onmouseover = changeBtnStyle;
btn1.onmouseout = changeBtnStyle2;