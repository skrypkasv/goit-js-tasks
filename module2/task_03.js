// Поиск самого длинного слова
// в строке с пробелами

// Напиши фукцнию
// findLongestWord(string = ""),
// которая принимает параметром
// произвольную строку(в строке
// будут только слова и пробелы)
// и возвращает самое длинное
// слово в этой строке.

const findLongestWord = function (string) {
  const turnToArray = string.split(' ');
  let longest = turnToArray[0];

  for (const element of turnToArray) {
    if (element.length > longest.length) {
      longest = element;
    }
  }

  return longest;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
