const calculateRentalCost = (days, carType) => {
    switch (carType) {
        case "Economy":
            return 4000 * days;
            break;
        case "Midsize":
            return 10000 * days;
            break;
        case "Luxury":
            return 20000 * days;
            break;
        default:
            console.log("Enter valid carType");
            break;
    }
}
const days = 5;
const carType = "Economy";
console.log(`Car type is ${carType}, days ${days} and rental cost is :`+ calculateRentalCost(days, carType));

//Output --> Car type is Economy, days 5 and rental cost is :20000