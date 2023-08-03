const path = require('node:path')


/* Este esta prohibido
    `./content/subfolder/text.txt` // ❌
*/

// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename('/tmp/fede-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/fede-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)