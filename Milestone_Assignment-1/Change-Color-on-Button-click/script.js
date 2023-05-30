const btn = document.querySelector("button");
const bodyElem = document.querySelector("body");

const str = "0123456789ABCDEF";
const numChars = 6;

btn.addEventListener("click", function() {
    let randomChars = "";
    for(let i = 0; i < numChars; i++) {
        let randomIndex = Math.floor(Math.random() * str.length)
        randomChars += str.charAt(randomIndex)
    }
    bodyElem.style.backgroundColor = "#" + randomChars;
})
