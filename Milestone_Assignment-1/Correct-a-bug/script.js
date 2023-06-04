function doubleQuantity(cart) {
    cart.forEach((currentElement, index) => {
        cart[index] = currentElement * 2; // doubld the quantity of currentElement and store in the cart 
    })
    return cart; // return the modified cart array 
}
cart = [1, 4, 7, 90];
newCart = doubleQuantity(cart) 
console.log(newCart);