class Person {
    constructor(n = "Unknow", a = 0) {
        this.name = n;
        this.age = a;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const person1 = new Person("Mithun", 20)
console.log(person1.getDetails()); // Name: Mithun, Age: 20

const person2 = new Person()
console.log(person2.getDetails());  // Name: Unknow, Age: 0