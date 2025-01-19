import Book from "./models/book.js";

async function createBook() {
    try {
        
        const newBook = await Book.create({
            title: 'My First Book',
            author: 'John Doe',
            year: 2023,
        });

        console.log('Book created:', newBook.toJSON());
    } catch (error) {
        console.error('Error creating book:', error);
    }
}

createBook();