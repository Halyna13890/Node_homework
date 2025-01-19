import express from "express";
import sequelize from './config/db.js';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import User from './models/User.js';

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email уже зарегистрирован' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ email, password: hashedPassword });
        res.status(201).json({ message: 'Регистрация успешна', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера', error: error.message });
    }
});

app.post('/change-password', async (req, res) => {
    const { id, newPassword } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await User.update(
            { password: hashedPassword, mustChangePassword: false },
            { where: { id } }
        );
        res.status(200).json({ message: 'Пароль успешно изменен' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера', error: error.message });
    }
});

app.post('/delete-account', async (req, res) => {
    const { id, password } = req.body;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Неверный пароль' });
        }

        await user.destroy();
        res.status(200).json({ message: 'Аккаунт успешно удален' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера', error: error.message });
    }
});

app.post('/change-email', async (req, res) => {
    const { id, currentPassword, newEmail } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }

        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Неверный пароль' });
        }
        const emailExists = await User.findOne({ where: { email: newEmail } });
        if (emailExists) {
            return res.status(400).json({ message: 'Email уже используется' });
        }

        user.email = newEmail;
        await user.save();
        res.status(200).json({ message: 'Email успешно изменен' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера', error: error.message });
    }
});

app.get('/admin', async (req, res) => {
    const { id } = req.body;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Доступ запрещен' });
        }
        res.status(200).json({ message: 'Добро пожаловать, админ!' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера', error: error.message });
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
