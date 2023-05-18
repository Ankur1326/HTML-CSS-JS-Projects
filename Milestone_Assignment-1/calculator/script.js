const button = document.querySelector("input[type='button']");
button.addEventListener("click", function () {
    // get all Elements from HTML
    const firstInputElement = document.querySelector("input[name='num1']");
    const thirdInputElement = document.querySelector("input[name='num2']");
    const opetatorElement = document.querySelector('input[type="text"]')
    const result = document.querySelector(".result");
    
    const num1 = parseInt(firstInputElement.value);
    const num2 = parseInt(thirdInputElement.value);
    const operator = opetatorElement.value;
    let calculateValue;
    switch (operator) {
        case "+":
            calculateValue = num1 + num2;
            break;

        case "-":
            calculateValue = num1 - num2;
            break;
        case "*":
            calculateValue = num1 * num2;
            break;
        case "/":
            calculateValue = num1 / num2;
            break;
        case "":
            alert("Please Enter Operator");
            break;
        default:
            alert("Invalid Operator, Pleae enter valid operator")
            break;
    }
    result.innerHTML = calculateValue;
}
)