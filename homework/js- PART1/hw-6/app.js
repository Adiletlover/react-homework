// Домашнее задание: 
// 1) Массив чисел [1,2,41,5,25,55,22,55] использую метод map(), вернуть новый массив  состоящий из квадратов этих чисел

let arr = [1,2,41,5,25,55,22,55]
let square = arr.map(item => item ** 2)
// console.log(square)

// 2) Массив чисел [33,12,331,35,25,55,22,55] использую метод filter, вернуть значения больше 10 и меньше 35

let filerMassive = [33,12,331,35,25,55,22,55]
let moreTen = []
for(let i=0; i< filerMassive.length; i++){
    if (filerMassive[i]>=10 && filerMassive[i]<35){
        moreTen.push(filerMassive[i])
    }
}
console.log(moreTen)

// 3) Массив строк [‘reactjs’, ‘vuejs’, ‘angularjs’, ‘nodejs’] используя  reduce вернуть самое длинное значение (length)
let strings = ['reactjs', 'vuejs', 'angularjs', 'nodejs']
function findLongestWord (input) {
    return input
      .reduce(
        function (longest, word) {
          return word.length > longest.length
            ? word
            : longest;
        }, 
        ''
      );
  }
// console.log(findLongestWord(strings));

// Доп:
// 1)Создать массив элементов со строками, вернуть все элементы массива с заглавной буквы (использовать map и toUpperCase())

let stroki= ['first','second','third','forth']
console.log(stroki.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '))

``