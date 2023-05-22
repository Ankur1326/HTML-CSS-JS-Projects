let count = 0;
let display = document.querySelector(".display");

// for decrement 
function incBYOne() { 
    if(count < 10) {
        count++;
        display.innerText = count;
    }
    else {
        alert("10+ value not allow")
    }
}


// for increment 
function decBYOne() {
    if (count > 0) {
        count--;
        display.innerText = count;
    }
    else {
        alert("less then of 0 value not allowed")
    }
}

// for reset value 
function reset() {
    count = 0;
    display.innerHTML = 0;
} 