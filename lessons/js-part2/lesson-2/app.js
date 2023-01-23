// console.log("Client to request to get data...", "loading started");

// setTimeout(() => {
//   const response = {
//     status: 200,
//     url: "https://example.com",
//   };

//   console.log("Server send response --", response);
//   console.log("Preparing Data");

//   setTimeout(() => {
//     const data = {
//       username: "Tima",
//       userage: 22,
//     };

//     console.log("Server send data", data);
//   }, 2000);
// }, 2000);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const errorIndicator = false;
//     if (!errorIndicator) {
//       const response = {
//         status: 200,
//         url: "https://example.com",
//       };

//       console.log("Server send response --", response);
//       console.log("Preparing Data");
//       resolve(response);
//     }
//     else{
//       reject("Что то пошло не так статус 404")
//     }
//   }, 2000);
// })
//   .then((res) => {
//     setTimeout(() => {
//       const data = {
//         username: "Tima",
//         userage: 22,
//       };

//       console.log("Server send data", data);
//       console.log("Respone --", res);
//     }, 2000);
//   })
//   .catch((err) => {
//     console.log("TypeEror", err);
//   }).finally(() => {
//     console.log("loading end");
//   })
setTimeout(()=>{
  helloSome()
},10000)

const helloSome = () => {
  console.log("hello");
}

console.log("hello2");

setTimeout(()=>{
  console.log("Hello4")
},1000)

const helloSomeTwo = () => {
  console.log("hello3");
}
helloSomeTwo()
helloSome()