function showText() {
    $(".content").text($(".editorContent").val());
}

function changeTextStyle(event) {
    event.preventDefault(); //предотвращение события по умолчанию 
    console.log(this); //this елемент которий стал причиной события 
    var className = ($(this).attr("class")).replace("btn", "");
    $(".content").toggleClass(className);
}
$(".okBtn").click(showText);
$(".btn").click(changeTextStyle);