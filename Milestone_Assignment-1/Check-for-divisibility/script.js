const addBtn = document.querySelector("input[value='click here to add this number']");
const resultBtn = document.querySelector("input[value='Click Me to get divisible by 3,but not by 2']");
let display = document.querySelector(".display");

const allNum = document.querySelector(".allnumbers");

addBtn.addEventListener("click", function () {
    const input = document.querySelector("input[type='number']")
    let number = [];
    number.push(input.value)
    
    allNum.innerText = allNum.innerText + " " + number;
    
    resultBtn.addEventListener("click", function() {
        for(let i = 0; number.length > i; i++) {
            if(number[i] % 3 == 0 && number[i] % 2 == 1) {
                display.innerText = display.innerText + " " + number[i];
            } 
        }
        number = [];
    })
    
})