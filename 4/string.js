function translit() {
    var symbols = {
            "б": "b"
            , "г": "g"
            , "м": "m"
        }
        , newMessage = "";
    for (var i = 0; i < message.length; i++) {
        newMessage += symbols[message[i]] ? symbols[message[i]] : message[i];
    }
    return message;
}
var message = "aбабагаламага";
console.log(translit(message));