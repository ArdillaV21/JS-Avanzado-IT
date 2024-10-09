const button = document.querySelector("button");
button.onclick = () => liked();

function liked(){
    alert("Hiciste click en el boton")
}

/** HOSTING: el interprete mueve las declaraciones para evitar posibles errores de ejecucion
 * function se mueve al principio del objeto window
 * var se inicializa al principio del scope pero se asigna en el lugar
 *  let y const se declaran e inicializan en el lugar
 */