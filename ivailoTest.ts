export{}
let message = "Hi";
console.log(message);
// prints message

let x = 10;
const y = 20;
// variable declarations

let sum;
const sum1 = 10;
sum = 10;
// const variable cannot be reinitializated

let isBegginer: boolean = true;
let num: number = 13;
let name: string = 'Jorko';
// variable types

let isCute: boolean = undefined;
let isCool: boolean = null;
isCute = true;
// undefined and null  bottom types

let sentence: string = `His name is ${name}
h
j`;
console.log(sentence);
//multi row sentence


let arr: number[] = [2,4,3,4,32,32];
// array initializatian

let person: [string, string, number,] = ['Ivan', 'Ivanov', 22];
// another one

enum Color {Red = 1, Green, Blue };
let c: Color = Color.Green;
// enum with Red set to 1; Red had value of 0
console.log(c);
// prints 2

let randomVariable: any = 10;
randomVariable = true;
randomVariable = 'gashti';
// any type variable
// any type can be anything (makes sense)

let myVariable: unknown = 'qwwq';
(myVariable as string).toUpperCase();
name.toUpperCase;
console.log(name.toUpperCase())
console.log((myVariable as string).toUpperCase());
// trying UpperCase function
// we don't know what is it; we can only check with functions


let multiType: number | string;
multiType = 10;
multiType = 'adsda';
// union type; any type isn't better here


function add(num1: number, num2?: number): number{
    if(num1){
        return num1;
    } else{
        return num1 + num2;
    }
    
}

add(10,10);
add(5)

function fullName(person :{firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName} e pich` + ' e pich.')
}
// function that prints Name

let p = {
    firstName:'Jhon',
    lastName:'Wayne'
}
// object 

fullName(p);
// calling the function

interface Person{
    firstName: string;
    lastName?: string;
}

function fullNameButBetter(person: Person){
    console.log(`${person.firstName} ${person.lastName}` + ' e golqm pich');
}

fullNameButBetter(p);

class Employee{
    private nameEmployee: string;

    constructor(name: string){
        this.nameEmployee = name;
    }

    greet(){
        console.log(`Hello ${this.nameEmployee}`)
    }
}

let emp1 = new Employee(`Ivcho`);
emp1.greet();

class Manager extends Employee{
    constructor(nameManager: string){
        super(nameManager);
    }
}

let man1 = new Manager("Koko")
man1.greet();





