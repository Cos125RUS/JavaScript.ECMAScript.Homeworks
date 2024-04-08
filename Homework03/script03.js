class ZooAnimal {
    static #MAX_AGE = 200; // Чёртовы черепахи! Мне бы их долголетие=)
    #name;
    #age;
    #gender;

    constructor(name, age, gender) {
        this.#name = name;
        if (this.checkAge(age)) {
            this.#age = age;
        }
        if (gender !== 'male' && gender !== 'female' && gender !== 'costrata') {
            throw new Error("Gender must be male or female");
        }
        this.#gender = gender;
    }

    checkAge = (age) => {
        if (age < 0) {
            throw new Error("Age must be greater than zero");
        } else if (age > ZooAnimal.#MAX_AGE) {
            throw new Error(`Age can't be older ${ZooAnimal.#MAX_AGE}`);
        }
        return true;
    };

    changeName = (newName) => { this.#name = newName; }
    changeAge = (newAge) => {
        if (this.checkAge(newAge)) {
            this.#age = newAge;
        }
    }

    print = () => console.log(`${this.#name} is ${this.#age} years old and a ${this.#gender}`);

    happyBirthday = () => this.#age++;
    costration = () => {
        if (this.#gender === 'male') {
            this.#gender = 'costrata';
        }
    }
}



const cat = new ZooAnimal('Tom', 5, 'male');
cat.print();
cat.happyBirthday();
cat.costration();
cat.changeName('Lord Varys');
cat.print();