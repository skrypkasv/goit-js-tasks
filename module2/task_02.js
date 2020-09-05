// Подсчет стоимости
// гравировки украшений

// Напиши скрипт подсчета стоимости
// гравировки украшений.
// Для этого создай функцию
// calculatePrice(message = "", pricePerWord = 0)
// принимающую строку(в строке будут
// только слова и пробелы) и цену
// гравировки одного слова, и
// возвращающую цену гравировки всех
// слов в строке.

// Для решения этой задачи не используйте
// циклы. Т.е.никаких for, while,
// do while, for of, for in,
// forEach или функциональных методов.

const calculatePrice = (message = '', pricePerWord = 0) =>
  message.split(' ').length * pricePerWord;

const message1 = 'Proi sos nat et magn pent mone est';
const message2 = 'Proi sos nat et magn pent mone est';
const message3 = 'Don orci lect aliqum est magi';
const message4 = 'Don orci lect aliqum est magi';
const price1 = 10;
const price2 = 20;
const price3 = 40;
const price4 = 20;

console.log(calculatePrice(message1, price1));
console.log(calculatePrice(message2, price2));
console.log(calculatePrice(message3, price3));
console.log(calculatePrice(message4, price4));
