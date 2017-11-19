"use strict";
var username = "admin"
    , pswd, colors = ["red", "green", "blue", "yellow"]
    , students = {
        "Ivanov": 5
        , "Petrov": 4
        , "Sudorov": 3
    }
    , langs = {
        "ua": "укр"
        , "ru": "рус"
        , "en": "английский"
    };
var arrey = ['s', 'sd', 's'];
console.log("user name: ", username);
console.log(" #################################");
console.log("user name: ", pswd);
console.log(" #################################");
console.log(colors);
username = "user"; // переопределение значения 
colors[1] = "black";
colors[10] = "white";
console.info(students);
console.log("Петров :", students["Petrov"]);
/* 
comment 
*/
console.log("en: ", langs.en);