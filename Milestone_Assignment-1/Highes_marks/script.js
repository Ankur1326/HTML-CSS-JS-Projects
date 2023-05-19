const btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let input = document.querySelectorAll("label input");
    console.log(input)
    for(let i = 0; i < input.length; i++) {
        const heighestMark = (input[0].value > input[1].value) ?
                input[0].value :
            (input[1].value > input[2].value) ? 
                input[1].value :
            (input[2].value > input[3].value) ? 
                input[2].value :
            (input[3].value > input[4].value) ? 
                input[3].value :
                input[4].value ;
        const display = document.querySelector('.display');
        display.innerHTML = heighestMark;
        }

})