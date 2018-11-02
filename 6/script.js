console.log("Hello !");
document.body.onload = addEelment;

function addEelment() {
    var newElement = document.createElement("div");
    newElement.innerHTML = "<h1> Script is connected in this page. </h1>";
    my_div = document.getElementById("txt1");
    document.body.insertBefore(newElement, my_div);
}
//
//
//
var human = {
    name: "Sergej"
    , lastName: "Melukov"
}
Object.defineProperty(human, 'fullName', {
    get: function () {
        return this.name + ' ' + this.lastName;
    }
    , set: function (newName) {
        var newData = newName.split(' ');
        if (!newData[0] || !newData[1]) {
            throw new Error('name is not correct!');
        }
        this.name = newData[0];
        this.lastName = newData[1];
    }
})
console.log(human.fullName);
for (var prop in human) {
    console.log(prop);
}
console.log(Object.keys(human)); // не покажет скрытые
console.log(Object.getOwnPropertyNames(human)); // покажет скрытые
human.fullNames = "Sunkevuch Roman";
console.log(human.name);
console.log(human.lastName);
//human.fullName = "Roma";
function makeCounter() {
    var currentCount = 1;

    function counter() {
        return currentCount++;
    }
    counter.set = function (value) {
        currentCount = value;
    };
    counter.reset = function () {
        currentCount = 1;
    };
    //        getNext: function () {
    //            return currentCount++;
    //        }
    //        , set: function (value) {
    //            currentCount = value;
    //        }
    //        , reset: function () {
    //            currentCount = 1;
    //        }
    return counter;
}
var counter = makeCounter(8);
console.log(counter());
counter.set(9);
console.log(counter());
counter();
console.log(counter());
var sum = new Function('a, b', ' return a + b; '); // берет только глобальные переменные 
var a = 1
    , b = 2;
alert(sum(a, b)); // 3