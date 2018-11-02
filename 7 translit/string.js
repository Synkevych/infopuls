function translit(message) {
    var symbols = {
            "б": "b"
            , "г": "g"
            , "в": "v"
            , "п": "p"
            , "н": "n"
            , "с": "s"
            , "к": "k"
            , "л": "l"
        }
        , message = document.getElementById("message")
        , newMessage = document.getElementById("newMessage");
    newMessage.innerHTML = "";
    for (var i = 0; i < message.value.length; i++) {
        newMessage.innerText += symbols[message.value[i]] ? symbols[message.value[i]] : message.value[i];
    }
    return message;
}
//var mes = "aбабагаламага";
//console.log(translit(mes));
var btn1 = document.getElementById("btn1");
btn1.onclick = translit;