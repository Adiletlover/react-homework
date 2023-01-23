
/////////////////////////
//////FIRST/////////////
////////////////////////


let student = {
    id: 2544324,
    name: "Adilet" ,
    age: 16,
    course: 2,
    lessons: [
        {
            id: 2544324,
            name: 'Taylor-English-Course',
            nameOfTeacher: "Jesus"
        }
    ]
}
// console.log(student)


/////////////////////////
////////SECOND///////////
////////////////////////

let arr = [1,2,3,4,5,435,65,3,23,65,87]
let newArray =[];
for ( let i= 0; i<arr.length; i++){
    if(arr[i]>10){
        newArray.push(arr[i])
    }
}
console.log(newArray);



/////////////////////////
////////THIRD///////////
////////////////////////

let country = prompt("Any Country");
switch(country){
    case "Kyrgyzstan":
        console.log("It's, Bishkek");
        break;
    case "The USA":
        console.log("It's, The Washington, D.C.");
        break;
    case "Russia":
        console.log("It's, Moscow");
        break;
    case "Spain":
        console.log("It's, Madrid");
        break;
    case "Japan":
        console.log("It's, Tokio");
        break;
    case "China":
        console.log("It's, Beijing");
        break;
    default:
        console.log("No, match");
}