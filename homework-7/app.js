import express from 'express';
import sequelize from './config/db.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>{
    res.send('Hello world')
});

app.losten(PORT, async ()=>{

    try{
        await sequelize.authenticate()
        console.log('Подключение к базе данных прошло успешно');
        console.log(`Server is running on port ${PORT}`);
    } catch (error){
        console.error('Подключение не успешно', error)
    }
    
    
    
})