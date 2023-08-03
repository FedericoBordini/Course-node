//Esto solo va en los modulos nativos 
//que no tiene promesas nativas.

const fs = require('node:fs')
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)

console.log('Leyendo el archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text)
})

console.log('Hacer otras cosas mientras lee el archivo...')

fs.readFile('./archivo-2.txt', 'utf-8', (err, text) => {
    console.log(text)
})