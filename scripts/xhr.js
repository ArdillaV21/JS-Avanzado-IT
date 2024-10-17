function ajax({url, method}) {
    //Inicializacion de solicitud status 0
    const xhr = new XMLHttpRequest();
    //Carga de peticion status 1
    xhr.open(method, url)
    //EScuchador de cambios 2-4
    xhr.addEventListener("readystatechange",(e) => {
        if(e.target.readyState === 4){
            if(e.target.status === 200){
                return console.log(e.target.responseText) 
            }else {
                return console.log("Ha ocurrido un error")
            }
        }
    })
    //Procesamiento de la solicitud status 2
    xhr.send()
}