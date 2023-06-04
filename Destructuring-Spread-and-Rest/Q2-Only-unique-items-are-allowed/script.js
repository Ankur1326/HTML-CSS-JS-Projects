/*2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements. */

const removeDublicate = (numbers) => {
    const uniquElem = new Set(numbers);
    return uniquElem;
}

const numbers = [1, 2, 3, 4, 3, 2, 5]
console.log(removeDublicate(numbers));