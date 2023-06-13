function doubleArray(originalArray, callback) {
    const doubledArray = originalArray.map((elem) => {
        return callback(elem)
    })
    return doubledArray;
}
function callback(elem) {
    return elem*2
}
const originalArray = [1, 2, 3, 4, 5, 6]
let result = doubleArray(originalArray, callback);
console.log(result); // -> [ 2, 4, 6, 8, 10, 12 ]