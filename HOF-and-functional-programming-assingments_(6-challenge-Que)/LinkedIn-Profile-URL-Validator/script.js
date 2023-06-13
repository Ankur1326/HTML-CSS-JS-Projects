const linkedinRegPattern = /^(https:\/\/www\.linkedin\.com\/)([a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]*)$/;

document.querySelector('button').addEventListener('click', () => {
    const urlValue = document.querySelector('input').value;
    console.log(linkedinRegPattern.test(urlValue));
    if (linkedinRegPattern.test(urlValue)) {
        alert("This is a valid URL");
    }
    else {
        alert('This is not valid URL');
    }
})