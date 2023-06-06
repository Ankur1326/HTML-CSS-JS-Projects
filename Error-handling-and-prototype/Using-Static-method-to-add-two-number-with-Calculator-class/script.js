class Calculator {
    static add(num1, num2) {
        let sum = num1 + num2;
        return sum;
    }
}

const result = Calculator.add(4, 5);
console.log(result);