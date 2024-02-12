var a = 5;  
var b, c;

b = (a * 5);  
b = (c = (b/2));



var age = prompt("Будь ласка, вкажіть скільки вам повних років:");

age = parseInt(age);

var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

alert("Ваш рік народження: " + birthYear);



var celsiusTemperatur = prompt("Введіть температуру в градусах Цельсія:");

var celsius = parseFloat(celsiusTemperatur);

var fahrenheit = (celsius * 9/5) + 32;

alert("Температура в градусах Фаренгейта: " + fahrenheit.toFixed(2));


var divided = prompt("Введіть ділене:");
var divider = prompt("Введіть дільник:");

divided = parseFloat(divided);
divider = parseFloat(divider);

if (isNaN(divided) || isNaN(divider) || divider === 0) {
    alert("Введіть коректні числа. Дільник не може дорівнювати нулю.");
} else { 
    var result = Math.floor(divided / divider);
    alert("Результат поділу націло: " + result);
}



const rate = 38.1; 

var amountInCurrency = prompt("Введіть суму потрібну для обміну:");


amountInCurrency = parseFloat(amountInCurrency);


if (isNaN(amountInCurrency)) {
    alert("Введіть коректну суму.");
} else {
    var exchangedAmount = (amountInCurrency * rate).toFixed(2);
    alert("Результат обміну: " + exchangedAmount);
}


var red = prompt("Введіть значення для red (0-255):");
var green = prompt("Введіть значення для green (0-255):");
var blue = prompt("Введіть значення для blue (0-255):");

red = parseInt(red);
green = parseInt(green);
blue = parseInt(blue);

if (isNaN(red) || isNaN(green) || isNaN(blue) ||
    red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
    alert("Введіть коректні значення в межах від 0 до 255.");
} else {
 
    var hexRed = red.toString(16).padStart(2, '0');
    var hexGreen = green.toString(16).padStart(2, '0');
    var hexBlue = blue.toString(16).padStart(2, '0');

     var cssColor = '#' + hexRed + hexGreen + hexBlue;
    alert("CSS-колір: " + cssColor);
}


var totalFloors = prompt("Введіть кількість поверхів у будинку:");
var flatsPerFloor = prompt("Введіть кількість квартир на поверсі:");
var targetFlatNumber = prompt("Введіть номер квартири:");

totalFloors = parseInt(totalFloors);
flatsPerFloor = parseInt(flatsPerFloor);
targetFlatNumber = parseInt(targetFlatNumber);

if (isNaN(totalFloors) || isNaN(flatsPerFloor) || isNaN(targetFlatNumber) ||
    totalFloors <= 0 || flatsPerFloor <= 0 || targetFlatNumber <= 0) {
    alert("Введіть коректні числа більше за 0.");
} else {
     var entrance = Math.ceil(targetFlatNumber / (flatsPerFloor * totalFloors));
    var floor = Math.ceil((targetFlatNumber % (flatsPerFloor * totalFloors)) / flatsPerFloor);

    alert("Квартира #" + targetFlatNumber + " розташована в " + entrance + " під'їзді на " + floor + " поверсі.");
}
