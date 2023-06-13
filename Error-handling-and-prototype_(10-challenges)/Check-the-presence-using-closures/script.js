function numberChecker(arr) {
    return function(num) {
        const isNumberFound = arr.includes(num); //if this value found in an array then return true otherwise false
        return isNumberFound;
    }
}
const arr = [1, 2, 3, 4, 5]
const checkNum = numberChecker(arr);

console.log(checkNum(3)); // true
console.log(checkNum(6)); // false