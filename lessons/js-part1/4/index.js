// let btnId = document.getElementById('sendBtn');
// // console.log(btnId)

// let btnClass = document.getElementsByClassName('sendBtnClass');
// // console.log(btnClass)

// let btnTag = document.getElementsByTagName('button');
// // console.log(btnTag)

// let btnQueryId = document.querySelector('#sendBtn');
// let btnQueryClass = document.querySelector('.sendBtnClass');
// let btnQueryTag = document.querySelector('button');
// // console.log(btnQueryClass)

// let btns = document.querySelectorAll('button');
// let btnsQueryAll = document.querySelectorAll('.sendBtnClass')
// // console.log(btnsQueryAll)

//Sobytiaâ
//навешивание обработчика через хтмл атрибуты (не актуальный)
// function sendInfo (){
//     console.log("Info Sended")
// }
// // sendInfo()


// //Добавление свойства обработчика событий к переменной

// function showAccept () {
//     console.log('Info Accepted')
// }
// let btn = document.querySelector('.sendBtnClassNew');
// btn.onclick = showAccept;

// //addEventListener()

// function showAlert(){
//     alert("addEventExample was clicked")
// }

// let btnEvent = document.querySelector('#addEventExample')
// btnEvent.addEventListener('click', showAlert)

// let solveBtn = document.querySelector('#calcBtn')
// function plusNums(){
//     let firstIn = document.querySelector('#firstIn').value;
//     let secondtIn = document.querySelector('#secondtIn').value;
//     let result = document.querySelector('.textResult');
//     result.textContent = Number(firstIn) - Number(secondtIn)
// }
// solveBtn.addEventListener('click', plusNums)

// let blocks = document.querySelectorAll('.block');
// function randomColor (){
//     let x = Math.floor(Math.random()*256)
//     let y = Math.floor(Math.random()*256)
//     let z = Math.floor(Math.random()*256)
//     let color = "rgb("+ x +','+ y+','+z+")"
//     return color
// }
// function changeColor(e){
//     let color = randomColor();
//     e.target.style.backgroundColor = color
// }
// blocks.forEach(function(block){
//     block.addEventListener('click', changeColor)
// })
// console.log(randomColor())

function sayHello(name,text) {
    alert(name + " " + text)
}
sayHello("Oleg")
