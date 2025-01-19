import express from "express";
import sequelize from "./config/db.js";
import Book from './models/book.js';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
    res.send('Hello sequelize!');
});

app.get('/books', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        console.error('Error fetching books', error);
        res.status(500).json({ message: 'Failed to fetch books', error: error.message });
    }
});

app.post('/books', async (req, res) => {
    try {
        const { title, author, year } = req.body;
        const newBook = await Book.create({ title, author, year });
        res.status(201).json(newBook);
    } catch (error) {
        console.error('Error creating book', error);
        res.status(500).json({ error: error.message });
    }
});

app.put('/books/:id', async (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;

    try {
        const [updatedRows] = await Book.update(
            { title, author },
            { where: { id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: "Книга не найдена" });
        }
        res.status(200).json({ message: "Книга успешно обновлена" });

    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера", error: error.message });
    }
});

app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRows = await Book.destroy({ where: { id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: "Книга не найдена" });
        }
        res.status(200).json({ message: "Книга успешно удалена!" });

    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера", error: error.message });
    }
});

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully');
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }
});
