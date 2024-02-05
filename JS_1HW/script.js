const login = "wassya999";
const password = 0000;
let enterLogin = prompt("login");
let enterPassword = prompt("password");

if (enterLogin == login && enterPassword == password) {
  alert("Hello, master");
} else {
  alert("incorrectly entered password or login");
}


 const fuelConsumptionPer100Km = 8; 
 const fuelPricePerLiter =45;  

 let dailyDistance = parseFloat(prompt("What is your average daily mileage in kilometers?"));
 
 if (isNaN(dailyDistance) || dailyDistance <= 0) {
    alert("Error: Please enter a valid number for daily mileage.");
 } else {
    const daysPerMonth = 30; 
     
    const totalDistance = dailyDistance * daysPerMonth;
 
    const fuelExpenses = (totalDistance / 100) * fuelConsumptionPer100Km;
 
    const myExpenses = fuelExpenses * fuelPricePerLiter;
 
    alert(`My fuel expenses for the month: ${myExpenses.toFixed(2)} UAH`);
 }
 