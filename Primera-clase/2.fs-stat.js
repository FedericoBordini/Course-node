const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')
// De forma sincrona
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size, //tamaño en bytes
)