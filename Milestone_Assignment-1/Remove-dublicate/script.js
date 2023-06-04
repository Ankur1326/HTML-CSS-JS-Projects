const addBtn = document.querySelector(".addBtn");
const input = document.querySelector('input')
const ulElem = document.querySelector('ul')

let removeBtn = document.querySelector(".removeDublicate")
let cart = [];
addBtn.addEventListener(('click'), () => {
    cart.push(input.value)
    ulElem.innerText = "[" + cart + "]";
})

removeBtn.addEventListener('click', () => {
    console.log(cart);
    let r = Array.from(new Set(cart))
    console.log(r);
    ulElem.innerText = r;
    cart = []; 
})