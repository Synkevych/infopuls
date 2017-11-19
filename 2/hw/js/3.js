"use stric";
// 3. Массив чисел c нулями:
// - положительные числа
// - отрицательные числа, которые больше -8
// - чётные числа nums[i]%2
// - нечетные числа в диапазоне от -5 до 5
// - числа через одно i += 2
// - количество нулей
// - максимальное число в массиве
// - попарно поменять элементы массива местами
// tmp
var randomNamber = []
	,minusNumber = []
	,minusNumber8 =[]
	,positiveNum = []
	,evenNumber = []
	,notEvenNumber = []
	,throughOne = []
	,nullSum = 0
	,maxNumber
	,minNumer
	,i = 0
	,j = 0
	,k = 0
	;
//функция для получения случайных чисел
function getRandom(num) {
    for (i = 0; i < num; i++) {
        randomNamber[i] = Math.round(Math.random() * 10);
        if(i%2 && (randomNamber[i]!=0)){
        	var minus = Math.round(Math.random());
        	if(minus == 0)
        		randomNamber[i] *= -1;
        }
    }
    console.log("Массив из 20 чисел: ", randomNamber);
}
getRandom(20);

// 1 положительные числа
function getPositiveNum(num){
	for (j = 0, i = 0; i < num.length; i++) {
		if(num[i] > 0){
			positiveNum[j] = num[i]; j++;
		}
	}console.log("Все положительные числа: ", positiveNum);
}
getPositiveNum(randomNamber);

// 2 отрицательные числа больше -8
function getMinusNumber(num){
	for(j=0,k=0, i=0; i<num.length; i++){
		if((num[i])<0){
			minusNumber[j]=num[i]; j++;
		}
		if((num[i])<0 && (num[i]>-8)){
			minusNumber8[k]=num[i]; k++;
		}
	}
	console.log("Все отрицательные числа больше -8: ", minusNumber8);
}
getMinusNumber(randomNamber);

// 3 четные числа 
function getEvenNumber(num){
	 for(j = 0, i = 0; i < num.length; i++){
	 	if(!(num[i]%2)){
	 		evenNumber[j] = num[i]; j++;
	 	}
	 }
	console.log("Все четные числа: ", evenNumber);
}
getEvenNumber(randomNamber);

// 4 нечетные в диапазоне от -5 до 5 
function getNotEvenNumber(num){
	 for(j = 0, i = 0; i < num.length; i++){
	 	if((num[i]%2)&&(num[i]<5)&&(num[i]>-5)){
	 		notEvenNumber[j] = num[i]; j++;
	 	}
	 }
	console.log("Все нечетные числа от 5 до -5: ", notEvenNumber);
}
getNotEvenNumber(randomNamber);

// 5 числа через одно 
function getThroughOne(num){
	 for(j = 0, i = 0; i < num.length; i++){
	 	if((i%2)){
	 		throughOne[j] = num[i]; j++;
	 	}
	 }
	console.log("Числа через одно: ", throughOne);
}
getThroughOne(randomNamber);

// 6 количество нулей 
function getNull(num){
	 for(i = 0; i < num.length; i++){
	 	if((num[i]===0)){
	 		nullSum ++;
	 }
	}
	console.log("Количество нулей: ", nullSum);
}
getNull(randomNamber);

// 7 максимальное число в массиве 
function getMax(num){
	maxNumber = 0;
	 for(i = 0; i < num.length; i++){
	 	if((num[i] > maxNumber)){
	 		maxNumber = num[i];
	 }
	}
	console.log("Максимальный елемент в массиве: ", maxNumber);
}
getMax(randomNamber);
// *7 минимальное число в массиве 
function getMin(num){
	minNumer = 0;
	 for(i = 0; i < num.length; i++){
	 	if((num[i] < minNumer)){
	 		minNumer = num[i];
	 }
	}
	console.log("Минимальный елемент в массиве: ", minNumer);
}
getMin(randomNamber);
// попарно поменять елементы массива
function getChangeInPairs(num){
	var tmp = 0;
		console.log("Начальный массив: ", randomNamber);
	 for(i = 0; i < (num.length); i++){
	 	    tmp = randomNamber[i+1];
	 	    randomNamber[i+1] = randomNamber[i];
	 	    randomNamber[i] = tmp;
	 	    i++;
	 }
	console.log("Измененный массив: ", randomNamber);
}
getChangeInPairs(randomNamber);
