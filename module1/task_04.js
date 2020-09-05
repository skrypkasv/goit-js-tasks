// Использование if else и арифметических операторов

// Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.
// Переменная credits хранит количество средств - 23580 кредитов.
// Единица товара(дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.
// Переменная orderPieces принимает значения null(отказ от покупок) и целое положительное число(количество единиц товара).
// Переменная message будет выводить сообщение.В эту переменную
// надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// Вы купили ${ } дроидов, на счету осталось ${ } кредитов
// const ACCESS_DENIED = 'Недостаточно средств на счету!'

// Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
// Используйте вспомогательную переменную balanceCredit, которая принимает разницу между credits и totalPrice.
// А также используйте if else для выбора значений переменной message.

const orderPieces = 5;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = pricePerDroid * orderPieces;
let balanceCredit = credits - totalPrice;
let message;

if (orderPieces === null) {
  message = 'Отменено пользователем!';
} else if (orderPieces >= 0 && credits >= totalPrice) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else {
  message = ACCESS_DENIED;
}

console.log(message);
