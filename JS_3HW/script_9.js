const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

var userInput = prompt("Введіть посилання на відео YouTube:");

var matchResult = userInput.match(youtubeRegex);

if (matchResult && matchResult[1]) {
 
    var videoId = matchResult[1];

    var embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

    document.write(embedCode);
} else {
  
    document.write("Введіть коректне посилання на відео YouTube.");
}
