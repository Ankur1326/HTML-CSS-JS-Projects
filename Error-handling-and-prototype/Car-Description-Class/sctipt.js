class Car{
    constructor() {
        this.company = "Skoda";
        this.modal = "Rapid";
        this.year = "2022";
    }
    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.modal}`;
    }
}
const myCar = new Car();
console.log(myCar.getDescription()); // This is a 2022 Skoda Rapid