var userName = prompt("Будь ласка, введіть своє ім'я:");

if (userName !== null && userName.trim() !== "") {
 
    alert("Привіт, " + userName + "!");
} else {

    alert("Введіть коректне ім'я.");
}
