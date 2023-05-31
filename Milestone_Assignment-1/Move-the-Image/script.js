const image = document.getElementById('image');

// set the initial position of the image
let positionX = 0;
let positionY = 0;
const moveAmount = 10;

document.addEventListener("keydown",(event) => {
    console.log(event);
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 37: //left arrow key
            positionX -= moveAmount;
            break;
        case 38: //up arrow key
            positionY -= moveAmount;
            break;
        case 39: //right arrow key
            positionX += moveAmount;
            break;
        case 40: //down arrow key
            positionY += moveAmount;
            break;
        default:
            return;
    }
    image.style.left = positionX + "px"
    image.style.top = positionY + "px"
});