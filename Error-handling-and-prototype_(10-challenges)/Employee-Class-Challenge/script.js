class  Employee{
    constructor(n, p, s) {
        this.name = n;
        this.position = p;
        this.salary = s;
    }
    getSalary(n, p, s) {
        return `Employee's salary : ${this.salary}`;
    }

}
// create object constructor using Employee
const employee1 = new Employee("Anurag", "Teacher", 80000)
console.log(employee1.getSalary()); //Employee's salary : 80000

const employee2 = new Employee("Ankur", "frontEndDeveloper", 50000)
console.log(employee2.getSalary()); //Employee's salary : 50000