const fs = require('fs')

function logMessage (message){
    const logPath = 'Log.txt'
    const logInfo = `${message}\n`

    fs.appendFile(logPath, logInfo, err =>{
        if(err){
            console.error(err)
            return;
        }
        console.log('Info has been append')
    })
}

module.exports = {logMessage};