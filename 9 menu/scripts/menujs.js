$(document).ready(function () {
    var all = $('.portfolio-wrap')
        , apps = $('.portfolio-wrap').children('.apps')
        , web_dev = $('.portfolio-wrap').children('.web_dev')
        , identity = $('.portfolio-wrap').children('.identity')
        , brand = $('.portfolio-wrap').children('.brand')
        , graphic = $('.portfolio-wrap').children('.graphic')
        , motion = $('.portfolio-wrap').children('.motion');
    var item = $('.work-wrap').children('.works-item');
    $('.works-item a').on('click', function () {
        var x = this;
        console.log(x);
        if ($(x).hasClass("all")) {
            $('.portfolio-wrap').children('.portfolio-item ').css('display', 'block').stop().slideDown();
        }
        if ($(x).hasClass("apps")) {
            $('.portfolio-wrap').children('.portfolio-item ').css('display', 'none').stop().slideUp();
            $(apps).css('display', 'block').fadeIn("slow");
        }
        if ($(x).hasClass("web_dev")) {
            $(web_dev).css('display', 'block');
            $(all).children(".web_dev:nth-child(2n)").css('margin-right:', '20px');
            $(apps).css('display', 'none');
            $(identity).css('display', 'none');
            $(brand).css('display', 'none');
            $(graphic).css('display', 'none');
            $(motion).css('display', 'none');
        }
        if ($(x).hasClass("identity")) {
            $('.portfolio-wrap').children('.portfolio-item ').css('display', 'none').stop().slideUp();
            $(identity).css('display', 'block').fadeIn("slow");
        }
        if ($(x).hasClass("brand")) {
            $('.portfolio-wrap').children('.portfolio-item ').css('display', 'none').stop().slideUp();
            $(brand).css('display', 'block').fadeIn("slow");
        }
        if ($(x).hasClass("graphic")) {
            $('.portfolio-wrap').children('.portfolio-item ').css('display', 'none').stop().slideUp();
            $(graphic).css('display', 'block').fadeIn("slow");
        }
        if ($(x).hasClass("motion")) {
            $('.portfolio-wrap').children('.portfolio-item ').css('display', 'none').stop().slideUp();
            $(motion).css('display', 'block').fadeIn("slow");
        }
        //        $('.portfolio-wrap').children('.portfolio-item ').css('margin', '2%');
    });
    $(".image").click(function () { // Событие клика на маленькое изображение
        var img = $(this); // Получаем изображение, на которое кликнули
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
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