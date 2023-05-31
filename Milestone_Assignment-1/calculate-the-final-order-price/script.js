const calculateTotalCostOfItems = (customerCart) => {

    return customerCart.reduce((totalCost, item) => {
        return totalCost + item.unitPrice * item.quantity
    }, 0) 
    
}
customerCart = [
    {
        unitPrice: 15,
        quantity: 2
    },
    {
        unitPrice: 10,
        quantity: 5
    }
]
console.log("Total price : " + calculateTotalCostOfItems(customerCart));
// Output --> Total price : 80