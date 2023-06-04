// get elements
const btn = document.querySelector("input[type='button']");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const display = document.querySelector(".display");

// add click event
btn.addEventListener("click", function() {
    let emailValue = email.value;
    let emailValueInArray = emailValue.split("")

    function validOrNot(emailValueInArray, character) {
        return emailValueInArray.includes(character);
    }
    const character = "@";
    const found = validOrNot(emailValueInArray, character)

    const passwordValue = password.value;
    if(found && passwordValue.length >= 8) {
        display.innerText = "valid email or password"
        display.style.color = "green";
    }
    else {
        display.innerText = "Invalid email or password"
        display.style.color = "red";
    }
})