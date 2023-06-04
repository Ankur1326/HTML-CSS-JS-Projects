/*
3. Swap the values.
You are working on a project that requires you to swap the values of two variables without using a temporary
variable. You decide to write a function that takes two variables as input and swaps their values using
destructuring assignment with an array. The function should take the two variables as arguments, destructure
them into an array, and then swap their positions within the array. Finally, the function should return an array
with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should
return an array [10, 5] with x now equal to 10 and y equal to 5.
*/


function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
  
  // Example usage:
  let x = 5;
  let y = 10;
  
  console.log(swapValues(x, y)); // Output: [10, 5]
  console.log(x); // Output: 10
  console.log(y); // Output: 5

//   or.......................................

const swapValue = (a, b) => {
    a = a + b;  // 10 + 20 => 30
    b = a - b;  // 30 - 20 => 10
    a = a - b;  // 30 - 10 => 20;
    return [a, b] // [20, 10]
}

let a = 10;
let b = 20;
console.log(swapValue(a, b)); // output - [20, 10]
