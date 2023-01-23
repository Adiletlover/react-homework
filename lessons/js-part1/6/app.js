//ES6+ differents to ES5

// var OLD VARIANT

function varTest() {
    var x = 1
    if(true){
        var x = 2;
        console.log(x)
    }
    // console.log(x)
}
// varTest()


function letTest() {
    let x = 1
    if(true){
        let x = 2;
        console.log(x)
    }
    // console.log(x)
}
// letTest()

let books = [
    {
        title: 'x',
        price: 10
    },
    {
        title: 'y',
        price: 15
    }
]
let titles = books.map(item => item.price)
// console.log(titles)

// ES5

let titles1 = books.map(function(item){
    return item.title
})

//MAP
let lengths = ['Acer','HP', 'MacBook'].map(item => item.length)
// console.log(lengths)

// FILTER
let brands = ['Acer','HP', 'MacBook'].filter(item => item !== "HP")
// console.log(brands)

// REDUCE
let reduce = [0,1,2,3,4,5].reduce(function(prevVal,currentVal){
    return prevVal + currentVal
})
console.log(reduce)

// Shablony literaly(stroki) 
// `name - ${name}`

let student = "Oleg";
let age = 44;
let profession = "SoftWare developer"
// console.log(`Name - ${student}, age - ${age}, profession - ${profession}`)
// console.log("Name")

let studentObj ={
    name: "Sergey",
    age: 32
}
// console.log(`Name - ${studentObj.name}`)

// const array = [1,2,3];
// const array1 = [... array, 4,5]
// console.log(array)
// console.log(array1)

const obj =  {
    mark: "Ford",
    name: "mustang",
}
const obj1 =  {
    ...obj,
    production: "1993 March"
}
// console.log(obj)
// console.log(obj1)

const array = [1,2,3,4,5];
const [firstItem, secondItem, ...otherItem] = array; 
// console.log(firstItem)
// console.log(secondItem)
// console.log(otherItem)

function foo (item, ...args){
    console.log(item)
    console.log(args)
}
// foo(1,2,3,4,5,545,4,6554635)

// let [x,y] = [1,2]

// function doSome(){
//     return [1,2]
// }
// let [x,y] = doSome()

// import { showLog } from "./helper";
// showLog()