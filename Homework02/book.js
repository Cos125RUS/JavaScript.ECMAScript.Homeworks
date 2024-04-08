class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo = () => {
        console.log(`${this.title} | ${this.author} | ${this.pages}`);
    }
}

const firstBook = new Book('Библия', 'Иисус', 1272);
firstBook.displayInfo();
firstBook.title = 'Синайский кодекс';
firstBook.author = 'Какой-то синаец';
firstBook.pages = 400;
firstBook.displayInfo();
