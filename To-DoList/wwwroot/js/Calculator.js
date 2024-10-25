let zhmarayEsta = "";
let zhamarayPeshw = "";
let operator = "";

function pressKey(value) {
    let display = document.getElementById("display");
    zhmarayEsta += value;
    display.value = zhmarayEsta;
}

function setOperator(op) {
    zhmarayPeshw = zhmarayEsta;
    operator = op;
    zhmarayEsta = "";
}

function calculate() {
    let result;
    let n1 = parseFloat(zhmarayPeshw);
    let n2 = parseFloat(zhmarayEsta);

    if (operator === "+") {
        result = n1 + n2;

    }
}

class Person {
    constructor(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    // Method to calculate age
    calculateAge() {
        const date = new Date();
        return date.getFullYear() - this.yearOfBirth;
    }

    // Describe method to return the formatted string
    describe() {
        return `${this.name} is ${this.calculateAge()} years old.`;
    }
}

const newPerson = new Person("John", 1994);
document.getElementById("demo").innerHTML = newPerson.describe();




class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;

    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;

            document.getElementById('balanceDisplay').textContent = `Current balance is: $${this.balance}`;

            return this.balance;

        } else {
            return "Invalid amount";
        }

    }

    displayBalance() {

        document.getElementById('balanceDisplay').textContent = `balance: ...`

        return 'Current balance is: $${this.balance}';
    }

}

const myAccount = new BankAccount("A1")

myAccount.deposit(1000);
myAccount.deposit(500);


const myAccount = new BankAccount("B2")

myAccount.deposit(516);


//EXERCISE 3

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;

    }

    makeSound() {

        return 'the sound of this animal is: ' + this.sound;
    }

}
class Dog extends Animal {
    constructor(name, sound, breed) {
        super(name, sound);
        this.breed == breed;

    }
    bark() {

        return `${this.breed} barks: ${this.sound}`;
    }

}

const myDog = new Dog("Amanda", "Woof woof", "sarsary")

document.getElementById('displayAnimalFeatures').textContent = myDog.bark();


//EXTRA EXERCISE SIMILAR TO ANIMAL

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    vehicleLookUp() {
        return `Make: ${this.make} Model: ${this.model} Year: ${this.year}`;
    }
}
    class Car extends Vehicle {
        constructor(make, model, year, numDoors) {
            super(make, model, year);
            this.numDoors = numDoors;

        }

        getFullInfo() {
            return ` Full details of this car is:
            Make: ${this.make} 
            Model: ${this.model} 
            Year: ${this.year} 
            ${this.numDoors}`;
        }
    }

const myCar = new Car("BMW", "5-Series", "2018", "5");
document.getElementById('displayCarInfo').textContent = myCar.getFullInfo();


//Exercise 4 - library

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }

    summaryBook() {
        return `The summary of the book is: 
        Title: ${this.title}
        Author: ${this.author}
        ISBN: ${this.ISBN}`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(ISBN) {
        const bookExist = this.books.some(book => book.ISBN === ISBN);
        if (bookExist) {
            this.books = this.books.filter(x => x.ISBN !== ISBN);
            return 'Book was successfully removed from library!';
        } else {
            return `Book was not found to remove`;
        }
    }

    listBooks() {
        if (this.books.length === 0) {
            return 'No books available in the library';
        }
        return this.books.map(book => {
            return `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`;
        }).join('\n');
    }
}

// Create a library instance
const myLibrary = new Library();

// Create a new book
const newBook = new Book("Life of Ahmed", "Dr. Ahmed", "999");

// Add the book to the library
myLibrary.addBook(newBook);

// Display the book's summary
document.getElementById('displayBook').textContent = newBook.summaryBook();


