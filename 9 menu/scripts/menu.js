//1. создание класа 
//s - означает string 
function Menu(sSelector) { // sSelector = "#menu1"
    var m = this; //(или m/self - menu) 3 создание указателя на функцию
    //4 создание свойств
    m.menu = $(sSelector); // основное свойство - UL 
    m.menuItems = m.menu.children("li"); // пункты меню  - UL
    //5. создание методов 
    m.showSubmenu = function () {
        // $(this).children("ul").css("display", "block");
        // $(this).children("ul").show();
        //$(this).children("ul").addClass("b-submenu_shown");
        //$(this).children("ul").stop().slideDown();
        $(this).children("ul").stop().css("display", "block").animate({
            "opacity": 1
        }, 900);
        //(params, duration, easing, callback$)
    }
    m.hideSubmenu = function () {
            // $(this).children("ul").css("display", "none");
            //  $(this).children("ul").hide();
            //$(this).children("ul").removeClass("b-submenu_shown");
            // $(this).children("ul").stop().slideUp();
                $(this).children("ul").stop().animate({
                        "opacity": 0
                    }, 400, function () {
                        $(this).css("display", "none");
                    })
                //stop() для анимации ефефктов 
        }
        //6. привязываем к свойствам методу на события 
    m.menuItems.mouseover(m.showSubmenu).mouseout(m.hideSubmenu);
}