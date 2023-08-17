const os = require('node:os')

console.log('Información del sistema operativo: ')
console.log('----------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus()) // Esto ya es mas avanzado para escalar todo
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)
console.log('Directorio raiz', os.homedir())
console.log('Nombre del host', os.hostname())
console.log('Tipo de maquina', os.machine())
console.log('Interfaces de internet', os.networkInterfaces())
console.log('Devuelve el directorio temporal', os.tmpdir())
