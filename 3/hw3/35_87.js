//Даны натуральные числа от 35 до 87. Вывести на консоль те из них, которые при делении на 7 дают остаток 1, 2 или 5
console.log(" ");
console.log("Даны натуральные числа от 35 до 87. Вывести на консоль те из них, которые при делении на 7 дают остаток 1, 2 или 5.");
var newMassiv = []
    , MassivChecked = []
    , temp = 0;
//for (var i = 35, j = 0; i < 88; i++) {
//    newMassiv[j] = i;
//    j++;
//}
for (var i = 0; i < 53; i++) {
    newMassiv[i] = 35 + i;
}
console.log("Сгенерированый массив: ", newMassiv);

function getNum(mass) {
    for (i = 0, j = 0; i < mass.length; i++) {
        temp = mass[i] % 7;
        if ((temp == 1) || (temp == 2) || (temp == 5)) {
            MassivChecked[j] = mass[i];
            j++;
        }
    }
    console.log("Масив елементов которые при делении на 7 дают остаток 1, 2 или 5:", MassivChecked);
}
getNum(newMassiv);