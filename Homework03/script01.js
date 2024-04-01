class Employee {
    #name;

    constructor(name) {
        this.#name = name;
    }

    displayInfo = () => {
        console.log(`Employee name is ${this.#name}`);
    }

    get name() { return this.#name; }
    set name(name) { this.#name = name; }
}

class Manager extends Employee {
    #department;

    constructor(name, department) {
        super(name);
        this.#department = department;
    }

    displayInfo = () => {
        console.log(`Manager name is ${this.name}. He is working in ${this.#department}`);
    }

    get department() { return this.#department; }
    set department(department) { this.#department = department ; }
}


const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();