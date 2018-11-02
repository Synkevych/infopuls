//function expression - без названия функции
function Gallery(sSelector){
    var g = this;
    g.keyboardEvents = function(event){
        if(event.which == 27 ){
            g.closePreview();
              console.log("escape pressed");
        }
        else if(event.which == 39 || event.which == 32|| event.which == 13){
            g.showNext();
        }
        else if(event.which == 37){
            g.showPrevious();
            window.scroll.left = 0;
        }
        console.log(event.which);
    }
    g.gallery = $(sSelector); // передача параметров галереи 
    //метод - сущность со своими функциями 
    g.pictures      = g.gallery.find('.b-picture');//все картинки внутри дива 
    g.arrowPrev     = g.gallery.find('.b-preview__arrow_prev');//предыдующее фото
    g.arrowNext     = g.gallery.find('.b-preview__arrow_next');// следующее фото 
    g.preview       = g.gallery.find('.b-preview');// блок с увеличеным фото 
    g.previewImage  = g.gallery.find('.b-preview__image');//увеличеное фото 
    g.previewText   = g.gallery.find('.b-preview__text');//текст увеличеного фото 
    g.current       = 0; // номер текущего изображения
    g.max           = g.pictures.length;//максимальное количество фото 
    g.maxPlace      = g.gallery.find('.b-preview__maxPlace');//максимальное количество фото
    g.currentPlace  = g.gallery.find('.b-preview__currentPlace');// номер текущего изображения 
    g.controlBtn    = g.gallery.find('.b-preview__control-btn');//кнопка автоматического перехода на следующее фото 
    g.time          = 3;//скорость перехода на другую фотку сек.
    g.slideshowPlay     = g.controlBtn.data("condition");//
    g.startSlideshow = null;
    
    g.showPreview =function(){ // показать блок
    var currentPicture = $(this);
        g.current = g.pictures.index(currentPicture);
        g.display(currentPicture);

        
    } // объкт 
    g.closePreview = function(event){
        //  скрыть блок 
        if(!event || $(event.target).hasClass('b-preview')){
            g.preview.removeClass('b-preview_shown');
            g.stopSlideShow();
        }
        // console.log(this, event.target);
}    
    g.showImage = function(iShift){ // i - int Shift - сдвиг 
        // отобразить большое фото
        g.current += iShift;
          if(g.current>=g.max){
              g.current = 0;
          }
        else if(g.current<0){
            g.current = g.max-1;
}
        //eq по порядковому номеру определяем обект среди набора других объектов 
        // листаем обекты div
        g.display(g.pictures.eq(g.current));
        
}
    g.display = function(oPicture){
        //  отобразить большое фото
        var smallimage = oPicture.find('.b-picture__image'),
        bigImageSrc = smallimage.attr('src').replace('small_','');
        g.previewImage.attr('src',bigImageSrc);
        g.previewText.html(smallimage.attr('alt'));
        g.preview.addClass('b-preview_shown');
        g.currentPlace.html(g.current+1);
        g.maxPlace.html(g.max);
}
    g.showPrevious = function(){
        // показать предыдущее 
        g.showImage(-1);
        
}
    g.showNext = function(){
        // показать следующее фото 
        g.showImage(+1);
    
    
}
    g.slideShow = function(){
        if(g.slideshowPlay){
            g.stopSlideShow();
        }
        else {
            g.startSlideshow = setInterval(g.showNext, g.time * 1000);
            g.controlBtn.text('stop');
            g.slideshowPlay= 1;
        }
    
    }
    g.stopSlideShow = function(){
            clearInterval(g.startSlideshow);
            g.controlBtn.text('start');
            g.slideshowPlay  = 0;
    }
g.pictures.click(g.showPreview);
g.preview.click(g.closePreview);
g.arrowPrev.click(g.showPrevious);
g.arrowNext.click(g.showNext);  
g.controlBtn.click(g.slideShow);
$('body').keyup(g.keyboardEvents);
};