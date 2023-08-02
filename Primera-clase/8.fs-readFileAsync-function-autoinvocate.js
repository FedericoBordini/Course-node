const { readFile } = require('node:fs/promises')

;(
    async () => {
        console.log('Leyendo el archivo...')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer texto:', text)
        console.log('Hacer otras cosas mientras lee el archivo...')
        console.log('Leyendo el segundo archivo...')
        const secondText = await readFile('./archivo-2.txt', 'utf-8')
        console.log('segundo texto:', secondText)
    }
)
