// Задание 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    Animal.prototype.sound = function () {
        console.log('The animal makes a sound');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, species, breed) {
        var _this = _super.call(this, name, species) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.sound = function () {
        _super.prototype.sound.call(this);
        console.log('The dog barks');
    };
    return Dog;
}(Animal));
var dog = new Dog('Rex', "Canine", "Labrador");
dog.sound();
// Задание 2
var Library = /** @class */ (function () {
    function Library(title, author) {
        this.title = title;
        this.author = author;
    }
    Library.prototype.addBook = function () {
        Library.totalBooks++;
    };
    Library.getAllBooks = function () {
        return (Library.totalBooks);
    };
    Library.totalBooks = 0;
    return Library;
}());
var lib1 = new Library("Nemo", "Grey Charlth");
var lib2 = new Library("Pirat", "Gay Rey");
lib1.addBook();
lib1.addBook();
lib2.addBook();
console.log(Library.getAllBooks());
