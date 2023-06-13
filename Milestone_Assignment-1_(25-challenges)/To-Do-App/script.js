const input = document.querySelector('input[type="text"]');
const addBtn = document.querySelector("input[type='button']");
const ul = document.querySelector("ul");

addBtn.addEventListener('click', () => {
    const liElemCreate = document.createElement("li")
    liElemCreate.innerText += input.value;
    ul.appendChild(liElemCreate)
    deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = '<i class="fa-solid fa-minus"></i>'
    deleteBtn.setAttribute("class", "deleteBtn")
    liElemCreate.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", () => {
        ul.removeChild(liElemCreate)
    })
})