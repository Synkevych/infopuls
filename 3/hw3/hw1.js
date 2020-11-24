/*
ДЗ:
Создать простой массив из 10 элементов
- удалить один элемент из начала
- добавить один элемент в конец
- добавить элемент в середину
- удалить два предпоследних элемента
- отсортировать по возрастанию
- соединить с массивом из трёх нулей
- сделать в обратном порядке
- вывести индекс числа 5 в этом массиве
- преобразовать массив в строку по разделителю "-" 
*/
var nums = getRandom(20, 50)
    , nulls = [0, 0, 0];
console.log("Первоначальный массив: ", nums);
console.log(nums.shift());
console.log("После удаления первого елемента", nums);
console.log(nums.push(10));
console.log("После добавления 19 елемента", nums);
console.log(nums.splice(10, 0, 5));
console.log("После добавления в серидину 5:", nums);
console.log(nums.splice((nums.length - 3), 2));
console.log("После удаления двух предпоследних елементов:", nums);
nums.sort(function (a, b) {
    return a - b;
});
console.log("После сортировки елементов: ", nums);
console.log(nums = nums.concat(nulls));
console.log("После добавления массива нулей: ", nums);
console.log(nums.reverse());
console.log("После реверса массива: ", nums);
console.log("5 елемент массива: ", nums.indexOf(5))
console.log("Преобразование массива в строку: ", nums.join("-"));