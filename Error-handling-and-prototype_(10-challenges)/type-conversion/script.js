function convertToNumber(str) {
    try {
        const convertedNumber = Number(str)
        if(isNaN(convertedNumber)) {
            throw "Invalid number"
        }
        return convertedNumber;
    }
    catch (error) {
        return error;
    }
}
console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // Invalid number
