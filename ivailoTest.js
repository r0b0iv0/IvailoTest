"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hi";
console.log(message);
// prints message
var x = 10;
var y = 20;
// variable declarations
var sum;
var sum1 = 10;
sum = 10;
// const variable cannot be reinitializated
var isBegginer = true;
var num = 13;
var name = 'Jorko';
// variable types
var isCute = undefined;
var isCool = null;
isCute = true;
// undefined and null  bottom types
var sentence = "His name is " + name + "\nh\nj";
console.log(sentence);
//multi row sentence
var arr = [2, 4, 3, 4, 32, 32];
// array initializatian
var person = ['Ivan', 'Ivanov', 22];
// another one 
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// enum with Red set to 1; Red had value of 0
console.log(c);
// prints 2
var randomVariable = 10;
randomVariable = true;
randomVariable = 'gashti';
// any type variable
// any type can be anything (makes sense)
var myVariable = 'qwwq';
myVariable.toUpperCase();
name.toUpperCase;
console.log(name.toUpperCase());
console.log(myVariable.toUpperCase());
// trying UpperCase function
// we don't know what is it; we can only check with functions
var multiType;
multiType = 10;
multiType = 'adsda';
// union type; any type isn't better here
function add(num1, num2) {
    if (num1) {
        return num1;
    }
    else {
        return num1 + num2;
    }
}
add(10, 10);
add(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName + " e pich\n    Godinite sa mu " + person.age);
}
// function that prints Name
var p = {
    firstName: 'Jhon',
    lastName: 'Wayne',
    age: 21
};
// object 
var p1 = {
    firstName: person[0],
    lastName: person[1],
    age: person[2]
};
fullName(p1);
function fullNameButBetter(person) {
    console.log(person.firstName + " " + person.lastName + ' e golqm pich');
}
fullNameButBetter(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.nameEmployee = name;
    }
    /**
     * getName
     */
    Employee.prototype.getName = function () {
        return this.nameEmployee;
    };
    Employee.prototype.setName = function (name) {
        this.nameEmployee = name;
    };
    Employee.prototype.greet = function () {
        console.log("Hello " + this.nameEmployee);
    };
    return Employee;
}());
var emp1 = new Employee("Ivcho");
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(nameManager) {
        return _super.call(this, nameManager) || this;
    }
    return Manager;
}(Employee));
var man1 = new Manager("Koko");
man1.greet();
man1.setName("Peshko");
console.log(man1.getName());
var myTuple = [16, "Hello", "Ivailo", "g"];
var myTuple2 = [];
myTuple2[0] = 12;
myTuple2[1] = "Goshko";
myTuple[0] = 122;
myTuple.push("43");
console.log(myTuple.length);
myTuple.pop();
console.log(myTuple.length);
//myTuple can be destructed by elements
var a = myTuple[0], b = myTuple[1];
console.log(a); // outputs myTuple[0]
console.log(b); // myTuple [1]
function productSearch(type) {
    if (typeof type == "string") {
        console.log("searching by text...");
    }
    else if (typeof type == "number") {
        console.log("searching by id...");
    }
}
productSearch(13);
function displayingNames(name) {
    if (typeof name == "string") {
        console.log("" + name);
    }
    else {
        for (var i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
displayingNames("Kolio");
displayingNames(["Jorko", "Salamcho", "Kostenurcho"]);
var dog = {
    type: 'home animal',
    food: 'dog food',
    animalRoar: function () { return "uaf, uaf"; }
};
console.log(dog.type);
console.log(dog.food);
console.log(dog.animalRoar());
var firstType = {
    program: "prints string",
    doing: "word"
};
var secondType = {
    program: "prints array of string",
    doing: ["salata", "kosh, mosh"]
};
var thirdType = {
    program: "calls function",
    doing: function () { return "hi there"; }
};
var firstAttemp = {};
firstAttemp.author = "Qsu";
firstAttemp.doing = "something";
firstAttemp.program = "prints something";
var obj = { num1: 12, num2: 3 };
