let someValue = "Text"
let showlowCopySomeValue= someValue;
someValue = 'changed'

// console.log(someValue, showlowCopySomeValue)

let person = {
    userName: "Akjol",
    userAge: "22"
}

let showlowCopyPerson = person;
showlowCopyPerson.userAge =190;
const trueShallowCopy = {
    ...person
}

trueShallowCopy.userAge = 9000;
trueShallowCopy.hobbi = "Games"
console.log(showlowCopyPerson, person, trueShallowCopy)

let number = 0;

for(i =0; i<2; i++){
    number += 5;
    console.log(`step ${i}: number = ${number}`);
}
console.log(number, "-- result");

const Arsen = {
    userName: "Arsen",
    userAge: 17,
    userStatus: "Geniy"
}
const JsonArsen = JSON.stringify(Arsen)
console.log(JsonArsen)

const parseJsonArsen = JSON.parse(JsonArsen)
console.log(parseJsonArsen)

if(true){
    var aa = 10;
}
let aaa = 19999

for(let iter = 0; iter<= 10; iter++) {
    setTimeout(() => {
        console.log("hello", iter);
    }, 2000)
}
// console.log(window)


//============================
//        РЕКУРСИЯ
//============================

const getFactorial = (number) => {
    if(number === 1){
        return 1;
    }
    return number * getFactorial(number -1)
}
const result = getFactorial(5)
// console.log(result);