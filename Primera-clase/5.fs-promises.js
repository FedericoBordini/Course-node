const fs = require('node:fs/promises')
const { text } = require('stream/consumers')

console.log('Leyendo el archivo...')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('primer texto:', text)
    })

console.log('Hacer otras cosas mientras lee el archivo...')

fs.readFile('./archivo-2.txt', 'utf-8')
    .then(text => {
        console.log('primer texto:', text)
})