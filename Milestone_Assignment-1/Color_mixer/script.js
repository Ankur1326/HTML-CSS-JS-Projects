const btn = document.querySelector('.btn');
btn.addEventListener("click", function () {
    const inputOfColor1 = document.querySelector('#color1')
    const inputOfColor2 = document.querySelector('#color2')

    let color1 = inputOfColor1.value
    let color2 = inputOfColor2.value
    let mixcolor;
    switch (color1 + color2) {
        case "redblue":
            mixcolor = "purple";
            break;
        case "bluered":
            mixcolor = "purple";
            break;
        case "redyellow":
            mixcolor = "orange";
            break;
        case "yellowred":
            mixcolor = "orange";
            break;
        case "blueyellow":
            mixcolor = "green";
            break;
        case "yellowblue":
            mixcolor = "green";
            break;
        case "":
            alert("Please Enter Color Name")
            break;
        default:
            alert("Enter valid color");
            break;
    }
    let body = document.querySelector("body");
    body.style.backgroundColor = mixcolor;
})