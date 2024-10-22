const localLinks = document.querySelectorAll(".local-link")

localLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        const path = e.target.innerText
        const file = e.target.href.split("#")[1]
        history.pushState({},'',"/"+path)
        getData({
            type:"text",
            url:`/docs/${file}.txt`, 
            callback: render})
    })
})
function render(data){
    const main = document.querySelector("main")
    main.innerHTML = `<section class="card m-4 p-3">${data}</section>`
}
function notFound(){
    return `
        <h2>
        Nos da vergüenza decirlo <br>
        pero ha ocurrido un Error
        </h2>
        <p>
        No hemos podido encontrar la pagina solicitada, si el error persiste, comunicate con el administrador del sitio. Para que continues navegando te invitamos a visitar la siguiente <a href="/">direccion</a>
        </p>
        `
}
function getData({url,type, callback}){
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.responseType = type ?? "text"
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                callback(xhr.responseText)
            }else if(xhr.status == 404){
                callback(notFound())
            }
        }
    })
    xhr.addEventListener("progress", (e) => {
        console.log(e.total, e.loaded)
    })
    xhr.send()
}

const copyRight = () => {
    const copy = document.getElementById("copy")
    copy.innerHTML = `&copy;${new Date().getFullYear()} Todos los derechos reservados`

} 
copyRight()