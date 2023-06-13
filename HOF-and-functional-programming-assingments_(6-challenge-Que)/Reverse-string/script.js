const input = "Ankur";
function reverse(input) {
    const reverse = input.split('').reverse().join('');
    console.log(reverse); 
}

setTimeout(reverse, 2000, input)