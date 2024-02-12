var userInput = prompt("Введіть рядок:(блін)");

if (userInput !== null && userInput.trim() !== "") {
  
    var words = userInput.split(" ");

    for (var i = 0; i < words.length - 1; i++) {
        if (words[i].endsWith(",")) {
            words[i + 1] = "блін";
        }
    }

    var modifiedString = words.join(" ");

    alert("Результат: " + modifiedString);
} else {
    alert("Введіть коректний рядок.");
}
