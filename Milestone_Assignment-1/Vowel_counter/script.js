let name1 = "Ankur";
let count = 0;
let charname = name1.split("");
while (charname.length > 0) {
    firstLetter = charname.shift();
    if (firstLetter == "a" || firstLetter == "E" || firstLetter == "I" || firstLetter == "O" || firstLetter == "U" || firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u") {
        count++;
    }
}
console.log("Number of vowel is = " + count)