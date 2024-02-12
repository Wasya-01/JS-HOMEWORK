String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

var firstName = prompt("Введіть ім'я:");
var lastName = prompt("Введіть прізвище:");
var middleName = prompt("Введіть по батькові:");

firstName = firstName.trim().toLowerCase().capitalize();
lastName = lastName.trim().toLowerCase().capitalize();
middleName = middleName.trim().toLowerCase().capitalize();

var fullName = firstName + " " + lastName + " " + middleName;

console.log(fullName);

alert("ПІБ: " + fullName);
