//1
let user_input = prompt("Введіть число:");
let number = parseFloat(user_input);
if (!isNaN(number)) {
    if (number % 2 === 0) {
        console.log("Введене число є парним.");
    } else {
        console.log("Введене число не є парним.");
    }
} else {
    console.log("Помилка! Введіть коректне число.");
}




// 2
let userText = prompt("Введіть текст:");
let badWords = ["fuck", "bitch", "dick", "cock", "pussy", "ass"];
let hasBadWords = false;
for (let i = 0; i < badWords.length; i++) {
    if (userText.toLowerCase().indexOf(badWords[i].toLowerCase()) !== -1) {
        hasBadWords = true;
        break;
    }
}
if (hasBadWords) {
    console.log("Текст містить некоректні слова.");
} else {
    console.log("Текст відповідає вимогам.");
}





// 3-4
let what1 = confirm("Ви патріот своєї країни?");
let  what2 = confirm("Довіряєте своїй половинці?");
let isFemale = confirm("Ви жінка?");

if ( what1) {
    console.log("ви патріот");
} else {
    console.log("ви не патріот");
}

if ( what2) {
    console.log("Довіряєте");
} else {
    console.log("Не довіряєте");
}
if (isFemale) {
    alert("Ви жінка.");
} else {
    alert("Ви чоловік.");
}




// 6
let isMale = confirm("Ваша стать - чоловік?");
alert(isMale ? "Ви чоловік" : "Ви жінка");




// 8
let age = prompt("Введіть свій вік:") || "";
if (!age) {
        alert("Помилка! Введіть коректний вік.");
} else {
    alert("Ваш вік: " + age);
}




// 9 
let isShopping = confirm("шопінг?") || false;
if (isShopping) {
    alert("Відмінно, давайте йти на шопінг!");
} else {
    alert("Ти - бяка!");
}




// 10
let isShopping_1 = confirm("шопінг?");
if (isShopping_1) {
    alert("Відмінно, давайте йти на шопінг!");
} else {
    alert("Ти - бяка!");
}



// 11
let lastName = prompt("Введіть ваше прізвище:") || "Іванов";
let firstName = prompt("Введіть ваше ім'я:") || "Іван";
let middleName = prompt("Введіть ваше по батькові:") || "Іванович";
alert("ПІБ: " + lastName + " " + firstName + " " + middleName);



// 12
let lastName_1 = prompt("Введіть ваше прізвище:");
if (!lastName_1) {
    lastName_1 = "Іванов";
}
let firstName_1 = prompt("Введіть ваше ім'я:");
if (!firstName_1) {
    firstName_1 = "Іван";
}
let middleName_1 = prompt("Введіть ваше по батькові:");
if (!middleName_1) {
    middleName_1 = "Іванович";
}
alert("ПІБ: " + lastName_1 + " " + firstName_1 + " " + middleName_1);




// 13

let enteredLogin = prompt("Введіть логін:");

if (enteredLogin === "admin") {
      let enteredPassword = prompt("Введіть пароль:");

    if (enteredPassword === "qwerty") {
           alert("Логін та пароль вірні. Ласкаво просимо!");
    } else {
        alert("Помилка: Невірний пароль.");
    }
} else {
    alert("Помилка: Невірний логін.");
}
