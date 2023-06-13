function randomNumber(min, max, delay) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
}

setInterval(randomNumber, 1000, 1, 10)