const regUrl =  /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm;  

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const urlValue = document.querySelector('input').value;
    console.log(urlValue);
    if (regUrl.test(urlValue)) {
        alert(`${urlValue} is a valid url`)
    } else {
        alert(`${urlValue} is a invalid url`)
    }
})