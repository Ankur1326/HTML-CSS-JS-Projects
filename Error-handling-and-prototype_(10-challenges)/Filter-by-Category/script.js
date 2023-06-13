function filterByCategory(products, category) {
    return products.filter(element => element.category === category);
}

var products = [
    {name: "Shift", category: "Clothing"},
    {name: "pants", category: "Clothing"},
    {name: "Hat", category: "Accessories"},
    {name: "Sunglasses", category: "Accessories"}
]
var clothingProducts = filterByCategory(products, "Clothing");
console.log(clothingProducts); 
/*Output ->  [
                { name: 'Shift', category: 'Clothing' },
                { name: 'pants', category: 'Clothing' }
            ]*/