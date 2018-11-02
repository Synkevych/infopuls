$(document).ready(function () {
$('.menu__item').on('click', function () {
    var id  = $(this).attr("id");
    if(id=="all"){
        $(".content").show(); 
    }
    else {
    $(".content").hide();
    $("."+id).show();
    }
  console.log(id);
});
                      
    $(".image").click(function () { // Событие клика на маленькое изображение
        var img = $(this); // Получаем изображение, на которое кликнули
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
       src =  src.slice(0,-5);
        src += "popup_img/1.jpg";
        console.log(typeof(src));
        $("body").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>" + // Блок, который будет служить фоном затемненным
            "<img src='" + src + "' class='popup_img' />" + // Само увеличенное фото
            "</div>");
        $(".popup_bg").css('margin-top', scrolled + 'px');
        $(".popup_img").css('margin-top', scrolled + 'px');
        $(".popup").fadeIn(800); // Медленно выводим изображение
        $(".popup_bg").click(function () { // Событие клика на затемненный фон	   
            $(".popup").fadeOut(800); // Медленно убираем всплывающее окно
            setTimeout(function () { // Выставляем таймер
                $(".popup").remove(); // Удаляем разметку всплывающего окна
            }, 800);
        });
    });
});