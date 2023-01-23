// const promise =new Promise((resolve, reject) => {
//     const errorRandom = Math.random() * 100;

//     console.log("start loading");
//     if(errorRandom > 50){
//         setTimeout(()=>{
//             reject("Oops somewhat hass gone wrong")
//             console.log(errorRandom);
//         },2000);
//         return;
//     }
//     setTimeout(()=>{
//         resolve("Promise has successed");
//         console.log(errorRandom);
//     },2000)
// })
// .then((data) =>{
//     console.log(data, "WOW");
// })
// .catch((err) =>{
//     console.log(err, "Not Wow");
// })
// .finally(()=>{
//     console.log("Loading Ending");
// // })
// class User{
//     constructor(userName, userAge) {
//         this.userImya = userAge
//         this.userVozrast = userName
//     }

//     getAge(){
//         return this.userAge
//     }
//     getName(){
//         return this.userName
//     }
//     getFullInfo(){
//         return `user name: ${this.userImya}; user age: ${this.userVozrast}`
//     }
// }

// const oldUser = new User("Tima", 22);
// console.log(oldUser);

// const fullInfoOldUser = oldUser.getFullInfo()
// console.log(fullInfoOldUser);

// var text = 'text'
// console.log(this.text);

// this.alert = () =>{
//     console.log("Changed");
// }
// alert()

