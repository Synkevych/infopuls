function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.sleep = function () {
            console.log("sleep");
        }
        //this.sleep();
    this.eat = function () {
        console.log("eat");
    }
    this.changeSurname = function (surname) {
        this.surname = surname;
        console.log("Фамилия была измменена на :", this.surname)
    }
}
var person1 = new Person("Kate", "Ivanova"); // Person("Kate"); constructor 
console.log(person1);
person1.sleep();
person1.changeSurname("Petrova");
console.log("////");
console.log(person1);
//
var person2 = new Person("Misha", "Ivanova");
console.log(person2);
person2.eat();
//Мультиварка
// метод делает разные