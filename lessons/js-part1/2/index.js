// alert("Hello")

// let num = 3;

// if(num==3 || num ==4){
//     alert("yes!")
// }
// else{
//     alert("No!")
// }

// let str = "string";
// if((str == "string" || str == "boolean") && str == "string"){
//     alert("yes!")
// }
// else{
//     alert("no!")
// }

// Not equal !==

// let num = 3;
// if (num !== 4){
//     alert("yes!")
// }



// let str = "string";
// switch(str){
//     case "boolean":
//         console.log("Yes, boolean");
//         break;
//     case "number":
//         console.log("Yes, number");
//         break;
//     case "string":
//         console.log("Yes, string");
//         break;
//     default:
//         console.log("No, match");
// }



// masssive

// let array = ["ReactJs", "AngularJs", "VueJs", "NodeJS" ];
// let arr = [1, false, "string", [], {}]
// console.log(array[1]);
// console.log(arr[3]);

//Replacing the value under the index 0
// array [0] = "RxJs"
// console.log(array);


//Add meaning on index 4
// array[4]= "TreeJS";

// length - length massive
// console.log(array.length);

//push - add in the end
// let names = ["Adilet", "Kolya", "Arsen", "Putin"]
// names.push("Trump")
// console.log(names);

//pop - delete the last one
// names.pop()
// console.log(names);

//shift -  delete the first element
// names.shift()
// console.log(names);

//unshift - adds an element at the beginning
// names.shift("doko")
// console.log(names);

//OBJECTS

let car = {
    id: 25,
    mark: "Toyota",
    model: "Camry 55 SE",
    color: "Black",
    volume: 3.5,
    owners: [
        {
            name: "Adilet",
            age: 16,
            yearsStart: 2021,
            yearsEnd: 2023,
        },
        {
            name: "Aibek",
            age: 43,
            yearsStart: 2015,
            yearsEnd: 2018,
        },
        {
            name: "Serik",
            age: 18,
            yearsStart: 2018,
            yearsEnd: 2021,
        }
    ],
    serialNumber: 31254352452,
    owner: {
        name: "Saule",
        age: 22,
        passportNumber: 324345435
    }
}
// console.log(car.mark + " " + car.model)
// console.log(car.owners[0])
// console.log(car.owner.passportNumber)

//циклы

// for (let i =1; i<=10; i++){
//     console.log(i)
// }

let arr2 = [23, 34234,4324, -423423, 43244]
for(let i = 0; i<arr2.length; i++){
    console.log(arr2[i])
}
// let arr3 = ["My","Name","Is","Adilet"]
// for(let element of arr3){
//     console.log(element)
// }

for(let i = 0; i<car.owners.length; i++){
    // console.log(car.owners[i].name)
}
