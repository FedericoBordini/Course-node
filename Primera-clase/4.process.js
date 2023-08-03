// process es un objeto global que proporciona información y control sobre el proceso actual de ejecución 
// tiene propiedades y metodos que nos permiten interactuar con el entorno de ejcución a la hora de ejecutar
// nuestro comando. COSAS QUE PODRIA TENER EL PROCESO ACTUAL: 

// argumentos de entrada (para recuperar argumentos)
//console.log(process.argv)

// controlar el proceso y su salida con 0 esta todo bien y 1 esta todo mal 
//process.exit(1)

// controlar eventos del proceso 
//process.on('exit', () => {
    //limpiar los recursos 
//})

// current working directory
console.log(process.cwd())

// patform

console.log(process.env.NODE-ENV/* NOMBRE QUE YO QUIERA DECIRLE EN LA TERMINAL */ )