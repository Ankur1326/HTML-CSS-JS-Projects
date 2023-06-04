const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890";
const symbolSet = "@#$%^&*";

// selectors
const passBox = document.getElementById('pass-box');
const totalChar = document.getElementById('totalChar');
const uppercaseInput = document.getElementById('uppercase-input')
const lowercaseInput = document.getElementById('lowercase-char')
const numberInput = document.getElementById('number-char')
const symbolInput = document.getElementById('symbol-char')

const getRandomData = (dataSet) => {
    return dataSet = dataSet[Math.floor(Math.random() * dataSet.length)];

}

const turncateString = (str, num) => {
    if(str.length > num) {
        let subStr = str.substring(0, num);
        return subStr
    }
    else {
        return str;

    }
} 

const generatePassword = (password = "") => {
    if(uppercaseInput.checked) {
        password += getRandomData(upperSet);
    }
    if(lowercaseInput.checked) {
        password += getRandomData(lowerSet)
    }
    if(numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if(password.length < totalChar.value) {
        return generatePassword(password);
    }
    passBox.innerText = turncateString(password, totalChar.value);
}

document.querySelector('button').addEventListener('click', () => {
    generatePassword()
});
generatePassword();
