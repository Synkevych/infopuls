// 1 Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице 
// 2 Сформировать возрастающий массив из четных чисел
// 3 Найти количество четных чисел в массиве
// 4 Найти среднее арифметическое
// 5 Найти сумму чисел массива, которые стоят на четных местах
// 6 Найти сумму чисел массива, которые стоят на нечетных местах и при этом превосходят сумму крайних элементов массива
//
var evenNumber = []
    , tempNumber = 0
    , sum = 0
    , arrayOfNumber = getRandom(40, 15)
    , i = 0
    , j = 0;
arrayOfNumber.length = 40;
console.log(arrayOfNumber);
// 2
for (j = 0, i = 0; i < arrayOfNumber.length; i++) {
    if (!(arrayOfNumber[i] % 2)) {
        evenNumber[j] = arrayOfNumber[i];
        j++;
    }
}
evenNumber.sort(function (a, b) {
    return a - b;
});
console.log(" Возростающий массив с четных чисел:", evenNumber);
// 3
console.log("В массиве есть ", evenNumber.length, "четных елементов");
// 4
for (i = 0; i < evenNumber.length; i++) {
    tempNumber += evenNumber[i];
}
tempNumber /= evenNumber.length;
console.log("Среднее арифметическое массива = ", tempNumber);
// 5
tempNumber = 0;
for (i = 1; i < evenNumber.length; i += 2) {
    // console.log("Число на четных местах:", evenNumber[i]);
    tempNumber += evenNumber[i];
}
console.log("Сума чисел массива, которые стоят на четных местах = ", tempNumber);
// 6
tempNumber = 0;
console.log("Крайние елементы массива:", arrayOfNumber[0], " ", arrayOfNumber[arrayOfNumber.length - 1]);
sum = arrayOfNumber[(arrayOfNumber.length - 1)] + arrayOfNumber[0];
for (i = 0; i < arrayOfNumber.length; i += 2) {
    if (sum < arrayOfNumber[i]) {
        //   console.log("Число на нечетных местах:", arrayOfNumber[i]);
        tempNumber += arrayOfNumber[i];
    }
}
console.log("Сума чисел, которые стоят на нечетных местах = ", tempNumber);
//
console.log(" ");
console.log(" ");