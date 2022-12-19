const student = "Айдарбеков Адахан Таалайбекович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;


const p1 = Array(16).fill([4, 1, 2, 5, 2, 2, 0]).flat();
const j1 = Array(1).fill([0, 2, 0, 2, 0, 0, 0]).flat();
const p2 = Array(2).fill([0, 0, 0, 0, 0, 0, 0]).flat();
const j2 = Array(23).fill([1, 4, 4, 2, 5, 0, 0]).flat();
const n  = Array(1).fill([2, 0, 2, 0, 2, 0, 0]).flat();

let array = [p1, j1, p2, j2, n].flat();

let desire = +prompt('Деньги за приставку', 56000);
let ticket = +prompt('Стоимость билета', 30);
let ride = +prompt('Деньги на проезд', 250);
let lunch = +prompt('Деньги на обед', 500);

const difference = ride - ticket;

let cash = 0;
let days = 0;


if ( difference < 0) {
    alert('Ошибка! Стоимость проезда не может быть больше суммы которую даёт мама.')
} else {
    for (let element = 0; element < array.length; element++) {

        if (cash >= desire) {
            break
        }

        if ((array[element] <= 3) && (array[element] > 0)) {
            cash = cash + lunch + difference
        
        } else if (array[element] > 3) {
            cash = cash + difference 
        
        }

        days = days + 1
        continue
        
    }
}


if (cash >= desire) {
    alert('На приставку накопить удалось за ' + Number(days) + ' дней.');
} else {
    alert('На приставку накопить не удалось, но за все время было накоплено ' + Number(cash) + ' рублей.');
}



