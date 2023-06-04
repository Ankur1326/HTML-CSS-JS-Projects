/*
5. Min and max values.
You are building a program that needs to find the maximum and minimum values in an array of numbers. You
decide to write a function that can accomplish this task by taking an array of numbers as input and using the
spread operator with the Math methods max() and min(). The function should return an object with two
properties, max, and min, representing the maximum and minimum values in the input array, respectively. For
example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }.
*/
function getMaxMinValue() {
    let maxValue = Math.max(...arguments);
    let minValue = Math.min(...arguments);
    return {
        maxValue,
        minValue 
    };
}
numbers = [1, 4, 5, 2, 6, 16, 9]
console.log(getMaxMinValue(...numbers)); 
// Output -> { maxValue: 16, minValue: 1 }