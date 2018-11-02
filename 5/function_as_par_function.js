//функция вызывает функцию
//
function filter(source, fn) {
    var result = [10, 100];
    for (var i = 0; i < source.length; i++) {
        if (fn(source[i])) {
            result.push(source[i]);
        }
    }
    return result;
}

var array = [4, 2, 10, 100, 5, 200];
var res = filter(array, function (value) {
    return value > 10;
});
console.log(res);
//
//
//
function func1() {
    function func2() {
        return 'Привет';
    }
    return func2;
}
//var res = func1();
//res();
console.log(func1()());
//
//
let arrays = [2, 3, 4];
let array2s = arrays.map(number => {
    return number * number;
//});//console.log(arrays);
//console.log(array2s);
