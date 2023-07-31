/* Para ejecutar el archivo basta con poner en la terminal node -nombre del archivo- y listo-
Cuidado que no tenemos window como objeto global pero si globalThis como variable global sin importar donde estes y es la forma correcta de referirse a la variable global. Ahora este código 
sale de globalThis, el console sale justamente de ahí dado a que es una propiedad de globalThis y de la misma global -esto es para sacarle un poco la mágia. 

*/
console.log("Hola mundo en Node.js")
console.info("Hola este es una información")
console.error("Cuidado que tenemos un error")

console.log(globalThis)