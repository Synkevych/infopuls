//1. создание класа 
//s - означает string 
function Menu(sSelector, bshowAll) { // sSelector = "#menu1"
    var m = this; //(или m/self - menu) 3 создание указателя на функцию
    //4 создание свойств
    m.menu = $(sSelector); // основное свойство - UL 
    m.menuItems = m.menu.children("li"); // пункты меню  - UL
    //5. создание методов 
    m.showSubmenu = function () {}
    m.hideSubmenu = function () {}
    m.showHideSubmenu = function () {
            if (!bshowAll) {
                m.menuItems.children("ul").slideUp();
            }
            $(this).children("ul").stop().slideToggle();
        }
        //6. привязываем к свойствам методу на события 
        //    m.menuItems.mouseover(m.showSubmenu).mouseout(m.hideSubmenu);
    m.menuItems.click(m.showHideSubmenu);
}
$(document).ready(function () {
    var x = this;
    $('.block a').on('click', function () {
        $(this).css('color', '#555');
    });
});
$(document).ready(function () {
    $('.block a').css('background', 'red').css('padding', '20px');
});