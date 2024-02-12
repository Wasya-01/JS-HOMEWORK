var userInput = prompt("Введіть рядок:(буде підраховано кількість слів в рядку)");

if (userInput !== null && userInput.trim() !== "") {
    var wordsArray = userInput.split(" ");
    var wordCount = wordsArray.length;

    alert("Кількість слів у рядку: " + wordCount);
} else {
   alert("Введіть коректний рядок.");
}
