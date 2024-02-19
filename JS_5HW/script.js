// 1

let confirmationAnswers = [];
confirmationAnswers.push(confirm("Ви зробили домашку?"));
confirmationAnswers.push(confirm("Все вірно?"));
confirmationAnswers.push(confirm("А якщо перевірю?"));
alert(confirmationAnswers);




// 2

let answers_0 = [];
answers_0[0] = prompt("Ви поснідали?");
answers_0[1] = prompt("Ви пообідали?");
answers_0[2] = prompt("Ви повечеряли?");
console.log(answers_0);




// 3

let arr_0 = ["pivo", "raki", "anchous", "calmar"];
let userInputIndex = prompt("Введіть індекс у масиві:");
if (!isNaN(userInputIndex) && userInputIndex >= 0 && userInputIndex < arr_0.length) {
  let element = arr_0[userInputIndex];
  alert("Значення елемента за індексом " + userInputIndex + ": " + element);
} else {
  alert("Щось пішло не так((");
}




// 4


let arr_1 = ["pivo", "raki", "anchous", "calmar"];
let InputIndex = prompt("Введіть індекс у масиві:");
let InputValue = prompt("Введіть значення для цього індексу:");

if (!isNaN(InputIndex) && InputIndex >= 0 && InputIndex < arr_1.length) {
  arr_1[InputIndex] = InputValue;
  alert("Значення за індексом " + InputIndex + " було оновлено.");
  alert("Новий масив: " + arr_1);
} else {
  alert("Щось пішло не так((");
}




// 5

const multiplyTable_0 = Array.from({ length: 5 }, (_, i) =>
  Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
);

console.log(multiplyTable_0);





// 6

const n = 5;
const multiplicationTable = Array.from({ length: n }, (_, i) =>
  Array.from({ length: n }, (_, j) => (i + 1) * (j + 1))
);

for (const row of multiplicationTable) {
  console.log(row);
}




// 7

const inputString = prompt('Введіть рядок із кількох слів:');
const targetWord = prompt('Введіть слово, яке ви шукаєте:');
const wordsArra = inputString.split(' ');
const index = wordsArra.indexOf(targetWord);

if (index !== -1) {
  const position = index + 1; 
  console.log(`Слово "${targetWord}" знаходиться на позиції ${position} у рядку.`);
} else {
  
  console.log(`Слово "${targetWord}" не знайдено у рядку.`);
}




// 8-9

const originalArray = [];

for (let i = 0; i < 5; i++) {
  const userInput = prompt(`Введіть елемент №${i + 1}:`);
  originalArray.push(userInput);
}

const reversedArray = [];

while (originalArray.length > 0) {
  reversedArray.push(originalArray.pop());
}
const reversedAgainArray = [];

while (reversedArray.length > 0) {
  reversedAgainArray.unshift(reversedArray.shift());
}

console.log('Оригінальний масив:', originalArray);
console.log('Масив у зворотньому напрямку:', reversedArray);
console.log('Масив знову у зворотньому напрямку (послідовність, як у першому масиві):', reversedAgainArray);




// 10

const multiplyTabl = Array.from({ length: 5 }, (_, i) =>
  Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
);

const shallowCopy = multiplyTabl.slice();
 
console.log('Оригінальний масив:', multiplyTabl);
console.log('Неглибока копія масиву:', shallowCopy);



// 11

const multiplyTab = Array.from({ length: 5 }, (_, i) =>
  Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
);
const deepCopy = multiplyTab.map(innerArray => innerArray.slice());

console.log('Оригінальний масив:', multiplyTab);
console.log('Глибока копія масиву (включаючи вкладені масиви):', deepCopy);




// 12

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.slice();

console.log(arr === arr2); 
console.log(JSON.stringify(arr) === JSON.stringify(arr2));




// 13

const multiplyTable_2 = Array.from({ length: 5 }, (_, i) =>
  Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
);
const flattenedArray_2 = [...multiplyTable_2.flat()];
console.log(flattenedArray_2);
console.log('Довжина масиву:', flattenedArray_2.length);





// 14

const userTX = prompt("Введіть рядок:");

const [firstLetter, , , , fifthLetter, , , , ninthLetter] = userTX;

console.log("Перша літера:", firstLetter);
console.log("П'ята літера:", fifthLetter);
console.log("Дев'ята літера:", ninthLetter);





// 15

const userInput0 = prompt("Введіть рядок:");
const [secondLetter = '!', , fourthLetter = '!', fifthLetter_0 = '!'] = userInput0;

console.log("Друга літера:", secondLetter);
console.log("Четверта літера:", fourthLetter);
console.log("П'ята літера:", fifthLetter_0);




// 16

const multiplyTable_3 = Array.from({ length: 5 }, (_, i) =>
  Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
);
const [[...firstRow], [...secondRow], [...thirdRow], [...fourthRow]] = multiplyTable_3;
const flattenedArray = [...firstRow, ...secondRow, ...thirdRow, ...fourthRow].filter(element => element !== 0);
console.log(flattenedArray);




// 17

const names_0 = ["John", "Paul", "George", "Ringo"];

for (const name of names_0) {
  alert(name);
}




// 18

const curren = ["USD", "EUR", "GBP", "UAH"];
let str_0 = "<select>";

for (const currency of curren) {
  str_0 += `<option value="${currency}">${currency}</option>`;
}

str_0 += "</select>";
document.write(str_0);





// 19

const namess = ["John", "Paul", "George", "Ringo"];
let str_1 = "<table><tr>";

for (const name of namess) {
  str_1 += `<td>${name}</td>`;
}

str_1 += "</tr></table>";
document.write(str_1);





// 20

const names = ["John", "Paul", "George", "Ringo"];
let str_2 = "<table>";

for (const name of names) {
  str_2 += `<tr><td>${name}</td></tr>`;
}

str_2 += "</table>";
document.write(str_2);




// 21

const currenci = ["USD", "EUR", "GBP", "UAH"];
let str_3 = "<table>";

for (let i = 0; i < currenci.length; i++) {
  str_3 += "<tr>";
  
  for (let j = 0; j < 3; j++) {
    const letter = currenci[i][j] || ""; 
    str_3 += `<td>${letter}</td>`;
  }

  str_3 += "</tr>";
}

str_3 += "</table>";
document.write(str_3);






// 22

const multiplyTable = Array.from({ length: 5 }, (_, i) =>
  Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
);

document.write("<table>");

for (const [rowIndex, row] of multiplyTable.entries()) {
  document.write("<tr>");

  for (const [colIndex, cell] of row.entries()) {
    const backgroundColor = rowIndex % 2 === 0 ? "red" : "green";
    document.write(`<td style="background-color: ${backgroundColor}">${cell}</td>`);
  }

  document.write("</tr>");
}

document.write("</table>");





// 23

const capitaliz = str => {
    if (typeof str !== 'string' || str.length === 0) {
      return str;
    }
  
    const firstLetter = str.charAt(0).toUpperCase();
    const restOfStr = str.slice(1).toLowerCase();
  
    return firstLetter + restOfStr;
  };
  
  console.log(capitaliz("cANBerRa"));
  





// 24

const capitalize = str => {
    if (typeof str !== 'string' || str.length === 0) {
      return str;
    }
  
    const firstLetter = str.charAt(0).toUpperCase();
    const restOfStr = str.slice(1).toLowerCase();
  
    return firstLetter + restOfStr;
  };
  
  const userIn = prompt("Введіть рядок:");
  
  const wordsArrayy = userIn.split(' ').map(word => capitalize(word));
  
  const resultStringg = wordsArrayy.join(' ');

  console.log(resultString);
  




// 25

const badWords = ["bad", "words", "here"];

const userInp = prompt("Введіть рядок:");

const wordsArray = userInp.split('').filter(word => ! badWords.includes(word.toLowerCase()));

const resulString = wordsArray.join(' ');

console.log(resultString);




// 26

const forbiddenWords = ["bad", "words", "here"];

const userInput = prompt("Введіть рядок:");

const modifiedWordsArray = userInput.split(' ').map(word => forbiddenWords.includes(word.toLowerCase()) ? "BEEP" : word);

const resultString = modifiedWordsArray.join(' ');

console.log(resulString);





// 27

const currencies = ["USD", "EUR", "GBP", "UAH"];
const str = "<select>" +
  currencies.reduce((accumulator, currency) => accumulator + `<option>${currency}</option>`, "") +
  "</select>";

document.write(str);





// 28

const line = prompt();
const bracketsStack = [];
let i = 0;

for (const character of line) {
  if (character === '(' || character === '[' || character === '{') {
    bracketsStack.push({ character, index: i });
  } else if (character === ')' || character === ']' || character === '}') {
    if (bracketsStack.length === 0) {
      console.log(`Помилка: Дужка ${character} на позиції ${i} не має відповідної відкриваючої дужки.`);
      break;
    }

    const lastOpenedBracket = bracketsStack.pop().character;
    if (
      (character === ')' && lastOpenedBracket !== '(') ||
      (character === ']' && lastOpenedBracket !== '[') ||
      (character === '}' && lastOpenedBracket !== '{')
    ) {
      console.log(`Помилка: Дужка ${character} на позиції ${i} не відповідає відкриваючій дузці ${lastOpenedBracket} на позиції ${i - 1}.`);
      break;
    }
  }
  i++;
}
if (bracketsStack.length === 0) {
 console.log("Красава!!!");
} else {
  const lastUnclosedBracket = bracketsStack.pop();
 console.log(`Помилка: Немає відповідної закриваючої дужки для відкриваючої дужки ${lastUnclosedBracket.character} на позиції ${lastUnclosedBracket.index}.`);
}

