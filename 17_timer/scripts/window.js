function Window(sSelector)
{
var w = this;
// 1. Секция данных (свойства, переменные принадлежащие объекту) ===================================================================
//w.init(sSelector);
    w.win = $(sSelector);
w.startCountdownBtn = w.win.find('.b-mywindow__start-countdown');
w.stopCountdownBtn 	= w.win.find('.b-mywindow__stop-countdown');
w.startTickerBtn 	= w.win.find('.b-mywindow__start-ticker');
w.stopTickerBtn 	= w.win.find('.b-mywindow__stop-ticker');
w.openWindowBtn 	= w.win.find('.b-mywindow__open-window');
w.closeWindowBtn 	= w.win.find('.b-mywindow__close-window');
w.ticker			= null;
w.countdown			= null;
w.tickerTime		= 0;
w.tickerPeriod		= 2;
w.newWindow			= null;
w.scrollLeft        =0;

    $(window).scroll(function(){
        var iCurScrollPos = $(this).scrollTop();
        if(iCurScrollPos>w.scrollLeft){
            console.log(w.scrollLeft);
        }
        else {
            console.log(iCurScrollPos);
        }
        w.scrollLeft = iCurScrollPos;
    })
// 2. Секция логики  ===================================================================
w.countdownNotification = function(){
	alert('Время иссякло.');
	}
w.tickerNotification = function(){	
	w.tickerTime += w.tickerPeriod;
	console.log('Прошло ' + w.tickerTime + ' секунд');
	}
w.startCountdown	= function(){
	var mayIstart = window.confirm('Можно приступать?');
		if (mayIstart){
			w.countdown = window.setTimeout(w.countdownNotification, 7000);
			}
		else {
			alert('Ну, не хотите, как хотите.');
			}
	}
w.stopCountdown		= function(){
	window.clearTimeout(w.countdown);
	alert('Таймер остановлен.');
	}
w.startTicker		= function(){
	w.ticker = window.setInterval(w.tickerNotification, w.tickerPeriod*1000);
	}
w.stopTicker		= function(){
	window.clearInterval(w.ticker);
	console.log('Таймер остановлен.');
	}
w.openWindow = function(){
	w.newWindow = window.open(
		'https://www.w3schools.com'
		, '_blank'
		, 'width=auto, height=auto'
		);
	}
w.closeWindow = function(){
	w.newWindow.close();
	}
// 3. Секция событий ============================================================
w.startCountdownBtn .bind('click', w.startCountdown);
w.stopCountdownBtn 	.bind('click', w.stopCountdown);
w.startTickerBtn 	.bind('click', w.startTicker);
w.stopTickerBtn 	.bind('click', w.stopTicker);
w.openWindowBtn 	.bind('click', w.openWindow);
w.closeWindowBtn 	.bind('click', w.closeWindow);


}

//Window.prototype = new Component();