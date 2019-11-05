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

function fullName(person :{firstName: string, lastName: string, age: number}){
    console.log(`${person.firstName} ${person.lastName} e pich
    Godinite sa mu ${person.age}` );
}
// function that prints Name

let p = {
    firstName:'Jhon',
    lastName:'Wayne',
    age: 21
};
// object 
let p1 = {
    firstName: person[0],
    lastName: person[1],
    age: person[2]
}

fullName(p1);
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
    public nameEmployee: string;

    public constructor(name: string){
        this.nameEmployee = name;
    }

    
    public getName() {
        return this.nameEmployee;
    }

    public setName(name: string) {
        this.nameEmployee = name;
    }

    public greet(){
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
man1.setName("Peshko");
console.log(man1.getName());


let myTuple = [16, `Hello`, `Ivailo`, `g`]

let myTuple2 = [];
myTuple2 [0] = 12;
myTuple2 [1] = `Goshko`;

myTuple[0] = 122;
myTuple.push(`43`);
console.log(myTuple.length);
myTuple.pop();
console.log(myTuple.length);

//myTuple can be destructed by elements
let [a ,b] = myTuple;
console.log(a); // outputs myTuple[0]
console.log(b); // myTuple [1]

function productSearch(type: string | number){
    if(typeof type == "string"){
        console.log(`searching by text...`)
    } else if(typeof type == "number"){
        console.log(`searching by id...`)
    }
}
productSearch(13)

function displayingNames(name: string| string[]){
    if(typeof name == "string"){
        console.log(`${name}`)
    } else {
        for (let i = 0; i < name.length; i++) {
            console.log(name[i]);
            
        }
    }
}
displayingNames(`Kolio`);
displayingNames([`Jorko`, `Salamcho`, `Kostenurcho`]);


interface Animal{
    type: string,
    food: string,
    animalRoar: ()=> string
}

let dog: Animal = {
    type: 'home animal',
    food: 'dog food',
    animalRoar: ():string =>{return "uaf, uaf"}
}

console.log(dog.type)
console.log(dog.food)
console.log(dog.animalRoar())

interface testProgram{
    program: string,
    doing: string| string[] | (()=> string)
}

let firstType:testProgram = {
    program: `prints string`,
    doing: `word`
}

let secondType: testProgram = {
    program: `prints array of string`,
    doing: [`salata`, `kosh, mosh`]
}

let thirdType: testProgram = {
    program: `calls function`,
    doing: (): string => {return `hi there`}
}

interface miniProgram extends testProgram{
    author: string
}
let firstAttemp = <miniProgram>{}
firstAttemp.author = `Qsu`
firstAttemp.doing = `something`
firstAttemp.program = `prints something`

interface bigNumber{
    num1: number
}

interface lowNumber{
    num2: number
}

interface moreNumbers extends bigNumber, lowNumber {}
let obj:moreNumbers = {num1:12, num2:3}



