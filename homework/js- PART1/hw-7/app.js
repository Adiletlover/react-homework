class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(rate, days) {
        let salary = this.rate * this.days;
        return salary;
    }
}
let Jolboldu = new Worker('Jolboldu', 'Oldzhobaiev', 100, 15);
console.log(Jolboldu.getSalary());
let Arsen = new Worker('Arsen', 'Ysmailov', 300, 15);
console.log(Arsen.getSalary());

class MyString {
    reverse(str) {
        let reversStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversStr += str[i];
        }
        return reversStr;
    }
    ucFirst(str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
        return newStr;
    }
    ucWords(str) {
        let arr = str.split(' ');
        let strArr = [];
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let newStr = a[0].toUpperCase() + a.slice(1);
            strArr.push(newStr);
        }
        return strArr.join(' ');
    }
}
let slovo = new MyString();
console.log(slovo.reverse('раз два три'));
console.log(slovo.ucFirst('раз два три'));
console.log(slovo.ucWords('Раз, два, три'));
