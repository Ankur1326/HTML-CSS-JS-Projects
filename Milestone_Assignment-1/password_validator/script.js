const input = document.querySelectorAll("input");
input[2].addEventListener("click", function() {
    
    console.log("hii")
    if(input[0].value == input[1].value) {
        alert("Password Matched. Passwordvalidation Successful");
    }
    else {
        alert("Password did'n match.")
    }
});