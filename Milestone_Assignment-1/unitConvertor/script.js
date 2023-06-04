
// progriam is convert unit calsius to fahrenheit
const btn = document.querySelector("input[type='button']");

btn.addEventListener("click", function () {
    const calsius = document.querySelector(".calsius input");
    const fahrenheit = document.querySelector('.fahrenheit input[type="number"]');
    fahrenheit.value = (calsius.value * 9/5) + 32;
})