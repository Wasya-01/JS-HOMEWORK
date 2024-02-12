let str = "<link>якийсь текст у якому є один тег <br /> і всяке інше";

var startIndex = str.indexOf("<");

var endIndex = str.indexOf(">") + 1;

if (startIndex !== -1 && endIndex !== -1) {
    var tag = str.slice(startIndex, endIndex);

   var upperCaseTag = tag.toUpperCase();

    var result = str.slice(0, startIndex) + upperCaseTag + str.slice(endIndex);

    console.log(result);
} else {

    console.log("Тег не знайдено в рядку.");
}
