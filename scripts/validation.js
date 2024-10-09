const forms = document.querySelectorAll("form")
const signInForm = document.getElementById("signin");
const contactForm = document.getElementById("contact");


forms.forEach(frm => { frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const form = e.target
    //Funciones de utilidad
    const getField = (f) => form[f]
    const p = (n) => getField("password")[n].value
    //Verificamos que NO existe campo contraseña
    if(form.id === "contact"){
        check(form.name.value,"text")
        check(form.consult.value, "text")
        check(form.phone.value, "tel")
        check(form.email.value, "email")
    }
    if(form.id === "signin"){
        if(p(0) !== p(1)){
            alert("Las contraseñas difieren")
        }
    }
}
)})

function check(value, type){
    let regExp = /\w*\d*\s*/
    if(type === "email") // usaurio@correo.com
        regExp = /\S+@\S+(\.\w{2,3}){1,2}$/
    if(type === "tel") // (5411)033-456-7534
        regExp = /^\(\d{2,5}\)(\d{3,4}-){1,3}\d{4}$/
    if(type === "password") //Abcde1234!
        regExp= /((?=[A-Z])(?=[a-z])(?=\d)(?=[\$#!_-])){8,}/
    return regExp.test(value)
}