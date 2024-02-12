var userInput = prompt("Введіть рядок:(перша буква в ппершому слові з великої літери)");

if (userInput !== null && userInput.trim() !== "") {
   
    var result = userInput
        .toLowerCase() 
        .charAt(0)
        .toUpperCase() + userInput.slice(1);

    console.log(result);
} else {
     console.log("Введіть коректний рядок.");
}
