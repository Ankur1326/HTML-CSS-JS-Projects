const btn = document.querySelector("input[type='button']");
console.log(btn);
btn.addEventListener("click", function() {
    const input = document.querySelector("input").value;
    const display = document.querySelector(".display");
    display.innerText = input.charAt('0').toUpperCase() + input.slice(1)
})