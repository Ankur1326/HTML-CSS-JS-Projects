/*
6. Nested Objects.
Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below.
 */


function getNameStreet({name, address: {street}}) {
    return {
        name,
        street
    }
}
const person = {
    name: 'Mithun',
    age: 21,
    address: {
        street: "B8, block B, Industrial Areaa.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
};
// function calling and print here 
console.log(getNameStreet(person));