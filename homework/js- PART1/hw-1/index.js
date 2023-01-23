// FIRST

let student = "I want to be a great programmer";
let mentor = " Sure, you'll be";
let result ="Student: " + student+"!" + "--" + " Mentor:" + mentor;
console.log(result);

// SECOND

let age = prompt("How Old Are You");
if(age < 18 ){
    alert("Ты еще молодой")
}
else if(age > 18 && age <30){
    alert("Все еще молод и свеж")
}
else if(age > 30 && age <50){
    alert("В самом расцвете сил")
}
else if(age <50  && age >75){
    alert("Старость- не радость")
}
else if(age >75){
    alert("Поздравляю, вы долгожитель")
}
else{
    alert("Введите правильные данные")
}