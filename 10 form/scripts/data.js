'use strict';
var str1 = "Я люблю ЛЮбую JavaScript";
var str = '1е место: Винни\n' +
  '2е место: Пятачок\n' +
  '3е место: Слонопотам';
console.log(str.match(/^\d+/gm));
console.log(str.match(/[а-я]+$/gim));
var str = "+7(903)-123-45-67";
console.log(str);
console.log( str.replace(/\D/g, "") ); 
var str = "+7(903)-123-45-67";
console.log(str1.match(/[юл]+.{3}/gi)); 
var re = /([0-9]{2}[-:]{1}[0-9]{2}){2}/g;
console.log( "Завтрак в 09:00. Обед - в 21-30".match(re) ); // 09:00, 21-30
console.log( "Завтрак в 09:00. Обед - в 21-30".match( /\d\d[-:]\d\d/g) );
//
var reg = /php|html|css|java(script)?|c([#\+\+]{1,2})?/ig;
// 
var str = "Java JavaScript C++ C# HTML CSS PHP C";
var str1 = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\r\\n\\\\" .. ';
//    i = 0;
//var result = str.replace(/ой/ig,function(){ return i++;})
console.log(str.match(reg));
console.log(str1.match(/"(\\.|[^"\\])*"/g));
console.log("<style> <styler> <style test> <style type=\"text\"> ".match(/<style(>| .*>)/g));
console.log("100500 попугаев съели 500100".match(/\d+$/ig));
console.log("01:32:54:67:89:22".match(/^[0-9a-f]{2}(:[0-9a-f]{2}){5}$/ig));

//
//
//
var  pageSettings = {
    "langs" : {
     "b-form__label_name" : {
     "ru" : "Имя"
     ,"ua" : "Ім'я"
     ,"en" : "Name"
     }
     ,"b-form__label_surname" : {
      "ru" : "Фамилия"
     ,"ua" : "Прізвище"
     ,"en": "Surname"
     }
     ,"b-form__label_season" : {
      "ru" : "Ваше любимое время года"
     ,"ua" : "Ваша улюблена пора року"
     ,"en" : "Your favorite season"
     }
     ,"b-form__label_fruit" : {
      "ru" : "Ваш любимый фрукт"
     ,"ua" : "Ваш улюблений фрукт"
     ,"en" : "Your favorite fruit"
     }
     ,"b-form__label_animals" : {
      "ru" : "Ваше любимое животное"
     ,"ua" : "Ваше улюблена тварина"
     ,"en" : "Your favorite animal"
     }
     ,"b-form__label_review" : {
      "ru" : "Ваш отзыв"
     ,"ua" : "Ваш відгук"
     ,"en" : "Your review"
     ,
     }
     ,"b-form__ok-button" : {
      "ru" : "Отправить"
     ,"ua" : "Вiдправити"
     ,"en" : "Send"
     }
      }
     };