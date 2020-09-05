// Форматирование строки в зависимости
// от длинны строки

// Напиши функцию formatString(string)
// которая принимает строку и
// форматирует ее если необходимо.

// Если длина строки не превышает
// 40 символов, функция возвращает
// ее в исходном виде.
// Если длина больше 40 символов,
// то функция обрезает строку
// до 40-ка символов и добавляе
// в конец строки троеточие '...',
// после чего возвращает
// укороченную версию.

const formatString = function (string, maxLength = 40) {
  let result = '';
  if (string.length > maxLength) {
    result = `${string.slice(0, maxLength)}...`;
  } else {
    result = string;
  }
  return result;

  // вариант-1 ⬆;
  // вариант-2 (лучше👍) ⬇;

  //   return string.length > maxLength
  //     ? `${string.slice(0, maxLength)}...`
  //     : string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    30,
  ),
);
// вернется форматированная строка(до 30)
