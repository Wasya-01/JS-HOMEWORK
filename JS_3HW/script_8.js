var userInput = prompt("Введіть рядок (використовуйте \\n для нового рядка):");

if (userInput !== null && userInput.trim() !== "") {

    var multiLineString = userInput.split("\\n").join("\n");

    console.log(multiLineString);

    alert(multiLineString);
} else {
    console.log("Введіть коректний рядок.");
}
