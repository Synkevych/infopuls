//Найдите все четырехзначные числа, сумма цифр каждого из которых равна 15.
var newMass = getRandom(100, 9999);
console.log(newMass);

function getSum(mass, sum) {
    var temp = 0
        , faund = false;
    for (i = 0; i < mass.length; i++) {
        temp = (mass[i]).toString(10);
        temp = (+temp.charAt(0)) + (+temp.charAt(1)) + (+temp.charAt(2)) + (+temp.charAt(3));
        if (temp == sum) {
            console.log(" Число: ", mass[i], "позиция елемента", (i + 1), " сума равна - ", temp);
            faund = true;
        }
    }
    if (!faund) console.log("Совпадений не найдено!")
}
console.time(getSum);
getSum(newMass, 15);
console.timeEnd(getSum);