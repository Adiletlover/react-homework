//-----------------------------------------------
//Создание объекта с помощью функции-конструктор
// ----------------------------------------------

// function Human(firstName,lastName){
//     this.firstName = firstName
//     this.lastName = lastName
// };

// const chris =new  Human('Chris', 'Brown');
// const alex = new Human ('Alex', 'Green')
// console.log(chris)
// console.log(chris.firstName)
// console.log(chris.lastName)
// console.log(alex)

// ----------------------------------------
// Создание объекта с помощью класса
// ----------------------------------------

// class Human {
//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// const oleg = new Human('Oleg', 'Putin');
// console.log(oleg)
// console.log(oleg.firstName)
// console.log(oleg.lastName)

// ----------------------------------------
// Создание объекта с помощью связки
// ----------------------------------------

// const Human = {
//     init(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// };
// const chris = Object.create(Human);
// chris.init("Chris", "Brown");
// console.log(chris)
// console.log(chris.firstName)
// console.log(chris.lastName)

// ----------------------------------------
//Фабричные функции
// ----------------------------------------

// function Human (firstName, lastName) {
//     return{
//         firstName,
//         lastName
//     }
// }

// const chris = Human('Chris', 'Brown')
// console.log(chris)
// console.log(chris.firstName)
// console.log(chris.lastName)

// ----------------------------------------
//  Методы
//  1 вариант, объединение метода внутри конструктора
// ----------------------------------------

class Animals {
    constructor(type, age){
        this.type = type
        this.age = age
        this.checkName = function(){
            alert(`Hello ${type}`)
        }
    }
}
const tyger = new Animals("Tyger", "10")
// console.log(tyger.type);
// tyger.checkName();


// ----------------------------------------
//  2 вариант, объединение метода вне конструктора
// ----------------------------------------

class Student{
    constructor(name, course){
        this.name = name
        this.course = course
    }
    getInfo(){
        return `Name of student - ${this.name}, Course -  ${this.course}`
    }
}

const nurbek = new Student('Nurbek', '3');
// console.log(
//     nurbek.getInfo()
// )

class Bill {
    constructor(amount,guests,quality){
        this.amount = amount
        this.guests = guests
        this.quality =quality
    }
    calculate () {
        return (this.amount * this.quality)/this.guests
    }
}

const yesterdayBill = new Bill(400,5,0.15)
console.log(yesterdayBill.calculate())