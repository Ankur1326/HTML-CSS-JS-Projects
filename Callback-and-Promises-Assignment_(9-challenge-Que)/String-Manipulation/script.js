function manipulateString(string, logString) {
    const manupulatedString = string.toUpperCase()
    return logString(manupulatedString);
}
function logString(manupulatedString) {
    console.log("The manipulated string is: ", manupulatedString);

}
manipulateString("Hello Words", logString)