const fs = require('fs')

const info = 'Node.js is awesome!'

fs.writeFile('info.txt', info, 'utf8', (err) =>{
    if(err){
        console.log('Ошибка при записи', err)
        return;
    }
    console.log('Запись успешно добавлена')
})


fs.readFile('info.txt', 'utf8', (err, data) =>{
    if(err){
        console.log('Не удалось прочитать файл')
        return;
    }
    console.log(data)
})
