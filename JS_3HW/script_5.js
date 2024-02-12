let str = "Було жарко. Василь пив пиво вприкуску з креветками";

var words = str.split(" ");

for (var i = 0; i < words.length; i++) {
    if (words[i] === "пиво") {
        words[i] = "чай";
    }
}

var result = words.join(" ");

console.log(result);
