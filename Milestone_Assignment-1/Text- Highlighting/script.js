const p = document.querySelector('p');

var words = p.textContent.split(" ");
console.log(words);
for (let i = 0; words.length > i; i++) {

    if (words[i].length > 8) {
        words[i] = "<span style='background: yellow'>" + words[i] + "</span>"
        // console.log(words[i]);
    }
    
}
console.log(words.join(" "));
p.innerHTML = words.join(" ")