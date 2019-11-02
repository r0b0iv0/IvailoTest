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
    console.log(person.firstName + " " + person.lastName + " e pich" + ' e pich.');
}
// function that prints Name
var p = {
    firstName: 'Jhon',
    lastName: 'Wayne'
};
// object 
fullName(p);
function fullNameButBetter(person) {
    console.log(person.firstName + " " + person.lastName + ' e golqm pich');
}
fullNameButBetter(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.nameEmployee = name;
    }
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
