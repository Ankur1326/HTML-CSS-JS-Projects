const storeItems = {
    apple: 1,
    banana: 2,
    orange: 5,
    mango: 7
};
const exchangeRate = 80;
const convertedPrices = Object.entries(storeItems).map(([item, price]) => {
    const convertedPrices = price * exchangeRate;
    return {price: convertedPrices};
});

console.log(convertedPrices);
//Output -> [ { price: 80 }, { price: 160 }, { price: 400 }, { price: 560 } ]