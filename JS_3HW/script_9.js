// Оголосити константу з регулярним виразом для виявлення ідентифікатора відео YouTube
const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

// Запитати у користувача рядок з посиланням на YouTube
var userInput = prompt("Введіть посилання на відео YouTube:");

// Здійснити відповідність регулярним виразом та витягнути ідентифікатор відео
var matchResult = userInput.match(youtubeRegex);

// Перевірити, чи було знайдено відповідність та ідентифікатор відео
if (matchResult && matchResult[1]) {
    // Вийміть ідентифікатор відео
    var videoId = matchResult[1];

    // Створити рядок з HTML кодом вбудовування відео
    var embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

    // Вивести отриманий рядок на сторінку
    document.write(embedCode);
} else {
    // Вивести повідомлення про помилку, якщо введене посилання не є дійсним посиланням на YouTube
    document.write("Введіть коректне посилання на відео YouTube.");
}
