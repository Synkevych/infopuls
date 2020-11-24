'use strict';

 var goods = {
 	"бананы" : 40
 	,"яблоки" : 25
 	,"груши" : 55
 	,"апельсины" : 45
 	// ,"апельсины" : 5  нельзя переопределение свойства 
 }
 ,clothes = {
 	"QWE" : {
 		"title" : "платье"
 		,"size" : "S"
 		,"color" : "красный"
 		,"price" : 1300
 	},
 	"ASD" : {
 		"title" : "брюки"
 		,"size" : "L"
 		,"color" : "черный"
 		,"price" : 1000
 	},
 	"ZXC" : {
 		"title" : "шарф"
 		,"size" : "-"
 		,"color" : "фиолетовый"
 		,"price" : 450
 	}
 },
 student = {
 	"001" : {
 		number : 211
 		,name : "Ivan"
 		,surname: "Petrov"
 		,male : true
 	}, 	"002" : {
 		number : 212
 		,name : "Petro"
 		,surname: "Ivanov"
 		,male : true
 	}, 
 	 	"003" : {
 		 number : 213
 		,name : "Ivanna"
 		,surname: "Ivanova"
 		,male : false
 	}, 	 	
 		"004" : {
 		 number : 214
 		,name : "Anna"
 		,surname: "Semenovich"
 		,male : false
 	}
 }
 	var count = 0;
 for (var st in student){
 	console.log(st, "-", student[st].number, " ", student[st]["name"], " ", student[st]["surname"], " ", student[st]["male"]);
 	count ++;
 }
 console.log("Количество студентов :", count)
//  }

//  for (var title in goods){
//  	if(goods[title]>40)
//  	console.log(title, "-", goods[title], "грн.");
//  }

//  for (var id in clothes){
//  	if(goods[title]>40)
//  	{
//  	console.log(id, ":", clothes[id]["title"], " ", clothes[id]["size"], ' ', clothes[id]["color"], " ", clothes[id]["price"]);
// }


