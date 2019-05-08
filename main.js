const fs = require('fs')
module.exports = function(filePath) {
    let data = fs.readFileSync(filePath).toString() 
    let object = JSON.parse(data) 
    return JSON.stringify(object, false, 3)
}