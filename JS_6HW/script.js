// //Literals + Literals expand + Literals copy

{
  const cat = {name:'Lucky',
age:"2",
breed:'Scotsman'};
let propertyCat = prompt("Введіть додаткову властивість мого кота:");
let valueCat = prompt("Введвіть значеня властивості:");
cat[propertyCat]=valueCat;

const myphone = {brand:'iphone',
model:'14 pro',
memory:'128gb'}
let propertyPhone = prompt("Введіть які властивості ще ви знаєте про цю модель:");
let valuePhone = prompt("Введіть значення властивості:")
myphone[propertyPhone]=valuePhone;

const catCopy = { ...cat };
let propertyCat1 = prompt("Введіть додаткову властивість мого кота:");
let valueCat1 = prompt("Введвіть значеня властивості:");
cat[propertyCat1]=valueCat1;

console.log(cat, myphone, catCopy);

}

{var htmlTree = {
  tagName: 'body',
  children: [
      {
          tagName: 'div',
          children: [
              {
                  tagName: 'span',
                  children: ["Enter a data please:"],
              },
              {
                  tagName: 'br',
              },
              {
                  tagName: 'input',
                  attrs: {
                      type: 'text',
                      id: 'name',
                  },
              },
              {
                  tagName: 'input',
                  attrs: {
                      type: 'text',
                      id: 'surname',
                  },
              },
          ],
      },
      {
          tagName: 'div',
          children: [
              {
                  tagName: 'button',
                  attrs: {
                      id: 'ok',
                  },
                  children: ["OK"],
              },
              {
                  tagName: 'button',
                  attrs: {
                      id: 'cancel',
                  },
                  children: ["Cancel"],
              },
          ],
      },
  ],
};

console.log(htmlTree.children[1].children[0].children[0]); 

console.log(htmlTree.children[0].children[2].attrs.id); 

//parent

function addParent(tree, parent = null) {
  tree.parent = parent;
  if (tree.children) {
      for (let child of tree.children) {
          addParent(child, tree);
      }
  }
}

addParent(htmlTree);

//Change OK

let newOkButtonId = prompt("Введіть нове значення атрибуту id для кнопки 'OK':");
htmlTree.children[1].children[0].attrs.id = newOkButtonId;

//Destructure

var {
  children: [
      {
          children: [
              { children: [spanText] },
              ,
              { attrs: { id: inputId } },
              ,
          ],
      },
      {
          children: [
              { attrs: { id: okButtonId } },
              ,
          ],
      },
  ],
} = htmlTree;

console.log(spanText);    
console.log(okButtonId); 
console.log(inputId);      

}

//Destruct array

{let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

let {
  0: even1,
  1: odd1,
  2: even2,
  3: odd2,
  4: even3,
  5: letter1,
  6: letter2,
  7: letter3,
} = arr;

let evenNumbers = [even1, even2, even3];
let oddNumbers = [odd1, odd2, even3];
let letters = [letter1, letter2, letter3];

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);
console.log("Letters:", letters);

{//Destruct string

let arr = [1, "abc"];

let [number, [s1, s2, s3]] = arr;

console.log("Number:", number);
console.log("s1:", s1);
console.log("s2:", s2);
console.log("s3:", s3);

//Destruct 2
let obj = {
  name: 'Ivan',
  surname: 'Petrov',
  children: [{ name: 'Maria' }, { name: 'Nikolay' }]
};

let { children: [{ name: name1 }, { name: name2 }] } = obj;

console.log("Name1:", name1);
console.log("Name2:", name2);
}

{//Destruct 3

let arr = [1, 2, 3, 4, 5, 6, 7, 10];

let [a, b, ...rest] = arr;
let length = arr.length;

console.log("a:", a);
console.log("b:", b);
console.log("length:", length);


}}

// Copy delete
{
const { [propertyCat1]: removedKey, ...catCopyWithoutKey } = { ...cat };
let propertyCat1 = prompt("Введіть додаткову властивість мого кота:");
let valueCat1 = prompt("Введіть значення властивості:");
catCopyWithoutKey[propertyCat1] = valueCat1;

console.log("Оригінальний кіт:", cat);
console.log("Мій телефон:", myphone);
console.log("Копія кота без вказаного ключа:", catCopyWithoutKey);
}

// Currency real rate

fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
          const upperCaseCurrencies = Object.keys(data.rates).map(currency => currency.toUpperCase());

        let fromCurrency = prompt("Введіть вихідну валюту (наприклад, USD):").toUpperCase();
        let toCurrency = prompt("Введіть валюту, в яку конвертувати (наприклад, EUR):").toUpperCase();
        let amount = parseFloat(prompt("Введіть суму у вихідній валюті:"));

            if (upperCaseCurrencies.includes(fromCurrency) && upperCaseCurrencies.includes(toCurrency) && !isNaN(amount)) {
        
            let exchangeRate = data.rates[toCurrency] / data.rates[fromCurrency];
            let convertedAmount = amount * exchangeRate;

            console.log(`Кількість ${fromCurrency} (${amount}) еквівалентна ${toCurrency}: ${convertedAmount.toFixed(2)}`);
        } else {
            console.log("Введено некоректні дані або валюти не підтримуються.");
        }
    })
    .catch(error => console.error("Помилка при завантаженні курсів валют:", error));


    //Currency drop down

fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        const currencies = Object.keys(data.rates);
        let dropdownOptions = '';

        currencies.forEach(currency => {
            dropdownOptions += `<option value="${currency}">${currency}</option>`;
        });

        const selectDropdown = `<select id="currencyDropdown">${dropdownOptions}</select>`;
        document.body.innerHTML += selectDropdown;

        document.getElementById('currencyDropdown').addEventListener('change', function () {
            const selectedCurrency = this.value;
            console.log(`Вибрано валюту: ${selectedCurrency}`);
        });
    })
    .catch(error => console.error("Помилка при завантаженні курсів валют:", error));


//Currency table

fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        const currencies = Object.keys(data.rates);
        const exchangeRates = [];

        currencies.forEach(fromCurrency => {
            const row = [fromCurrency];
            currencies.forEach(toCurrency => {
          
                const crossRate = data.rates[toCurrency] / data.rates[fromCurrency];
                row.push(crossRate.toFixed(2));
            });
            exchangeRates.push(row);
        });

        let tableHTML = '<table border="1">';

        tableHTML += '<tr><td></td>';
        currencies.forEach(currency => {
            tableHTML += `<td>${currency}</td>`;
        });
        tableHTML += '</tr>';

        exchangeRates.forEach(row => {
            tableHTML += '<tr>';
            row.forEach(cell => {
                tableHTML += `<td>${cell}</td>`;
            });
            tableHTML += '</tr>';
        });

        tableHTML += '</table>';
       
        document.body.innerHTML += tableHTML;
    })
    .catch(error => console.error("Помилка при завантаженні курсів валют:", error));


    Form
    const car = {
      "Name": "chevrolet chevelle malibu",
      "Cylinders": 8,
      "Displacement": 307,
      "Horsepower": 130,
      "Weight_in_lbs": 3504,
      "Origin": "USA",
      "in_production": false
  };
  
  function createForm(obj) {
      const form = document.createElement('form');
  
      Object.keys(obj).forEach(key => {
          const label = document.createElement('label');
          const input = document.createElement('input');
  
          label.textContent = key + ': ';
  
          switch (typeof obj[key]) {
              case 'number':
                  input.type = 'number';
                  break;
              case 'boolean':
                  input.type = 'checkbox';
                  input.checked = obj[key];
                  break;
              default:
                  input.type = 'text';
          }
  
          input.value = obj[key];
          label.appendChild(input);
          form.appendChild(label);
      });
  
      document.body.appendChild(form);
  }
  
  createForm(car);

  //Table
  const persons = [
    {
        name: 'Марія',
        fatherName: 'Іванівна',
        surname: 'Іванова',
        sex: 'female'
    },
    {
        name: 'Миколай',
        fatherName: 'Іванович',
        surname: 'Іванов',
        age: 15
    },
    {
        name: 'Петро',
        fatherName: 'Іванович',
        surname: 'Іванов',
        married: true
    },
];

function generateTable(data) {
    // Перший прохід - пошук колонок
    const columns = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));

    // Заголовок таблиці
    const tableHeader = `<tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>`;

    // Другий прохід - відображення таблиці
    const tableRows = data.map(obj => `<tr>${columns.map(col => `<td>${obj[col]}</td>`).join('')}</tr>`);

    // З'єднання всього разом
    const tableHTML = `<table border="1">${tableHeader}${tableRows.join('')}</table>`;

    document.body.innerHTML += tableHTML;
}

generateTable(persons);
