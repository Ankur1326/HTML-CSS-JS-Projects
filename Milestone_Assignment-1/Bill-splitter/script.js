const calculateTotalBill = (costOfDisk, numberOfPeople) => {
    const totalBill = costOfDisk * numberOfPeople;
    const paidEachperson = totalBill / numberOfPeople

    return {
        totalBill: totalBill,
        paidEachperson: paidEachperson
    }
}
const costOfDisk = 100;
const numberOfPeople = 5;
console.log(calculateTotalBill(costOfDisk, numberOfPeople));