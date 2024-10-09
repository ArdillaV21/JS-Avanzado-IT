console.log("Linea 1");
let timeout = setTimeout(
    () => {console.log("linea 2")}, 2000
) //ejecuta una funcion callback despues de cierto tiempo
console.log("Linea 3");
let interval = setInterval(
    () => {console.log("Linea 4")}, 2000
)// ejecuta una funcion callback cada cierto tiempo
console.log("Linea 5");
console.log("Linea 6");
console.log("Linea 7");
console.log("Linea 8");
console.log("Linea 9");

//Funcion Limpiadora
const limpiar = (x,s,callback) => setTimeout(
    () => {
        callback(x)
    }, s
)

//Limpieza de Intervalos
limpiar(interval,10000,clearInterval)
limpiar(timeout,10000,clearTimeout)