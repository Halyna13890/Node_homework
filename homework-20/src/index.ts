// Задание 1


class Animal {
    name: string;
    species: string;

    constructor(name:string, species: string){
        this.name = name;
        this.species = species;
    }

    sound() {
        console.log('The animal makes a sound');
        
    }
}

class Dog extends Animal {
    breed: string;

     constructor(name:string, species: string, breed: string){
       super(name, species)
       this.breed = breed
    }

    sound() {
        super.sound()
        console.log('The dog barks');
    }
}

const dog = new Dog('Rex', "Canine", "Labrador");
dog.sound()



// Задание 2

class Library{
    static totalBooks: number = 0

    constructor(public title: string, public author: string){}

    addBook() {
        Library.totalBooks ++
}
    static getAllBooks(){
    return (Library.totalBooks);
    
}}

const lib1 = new Library("Nemo", "Grey Charlth");
const lib2 = new Library("Pirat", "Gay Rey")

lib1.addBook()
lib1.addBook()
lib2.addBook()

console.log(Library.getAllBooks())


//Задание 3

class Vehicle{
    make: string;
    model: string;

    constructor(make: string, model: string){
        this.make = make
        this.model = model
    }
}

class Motorcycle extends Vehicle{
    type: string;

    constructor(make: string, model: string, type:string){
        super(make, model)
        this.type = type
    }
}


const moto = new Motorcycle ('Toyota', 'MX5', 'sport')

console.log(moto)