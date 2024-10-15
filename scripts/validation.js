const forms = document.querySelectorAll("form")
const signInForm = document.getElementById("signin");
const contactForm = document.getElementById("contact");


forms.forEach(frm => { frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const form = e.target
    const validator = []
    const data = new FormData() //Objeto de envio
    //Funciones de utilidad
    const getField = (f) => form[f]
    const p = (n) => getField("password")[n].value
    //Verificamos que NO existe campo contraseña
    if(form.id === "contact"){
        
            validator.push({field: "name", message:"El nombre no es valido", type:"text"})
            validator.push({field:"email",message:"El correo es incorrecto",type:"email"})
            validator.push({field:"phone",message:"El telefono es incorrecto",type:"tel"})
            validator.push({field:"consult",message:"La consulta es incorrecta",type:"text"})
            
    }
        
    if(form.id === "signin"){
        validator.push({field:"username", message: "El nombre de usuario no es valido"})
        if(p(0) !== p(1)) return alert("Las contraseñas difieren")
        validator.push({field:"password",message:"La constraseña es invalida",type:"password"})
    } 
    validator.forEach((v) => {
        //Validacion HTML
        if(!(getField(v.field).checkValidity()))
            return alert(v.message)
        //Validacion con RegExp
        if(!check(getField(v.field).value,v.type))
            return alert(v.message)
        //Agregar valores al objeto de envio
        data.append(v.field,typeof getField(v.field) === "object" ? getField(v.field)[0].value : getField(v.field).value)
    })
})})

function check(value, type){
    let regExp = /\w*\d*\s*/
    if(type === "email") // usaurio@correo.com
        regExp = /\S+@\S+(\.\w{2,3}){1,2}$/
    if(type === "tel") // (5411)033-456-7534
        regExp = /^\(\d{2,5}\)(\d{3,4}-){1,3}\d{4}$/
    if(type === "password") //Abcde1234!
        regExp= /((?=[A-Z])(?=[a-z])(?=\d)(?=[\$#!_-])){8,}/
    if(type === "date" || type === "hour")
        regExp= /(\d{2}[\/\-\:]{1}){2}\d{4}/
    if(type === "card")
        regExp = /^((?=[\s\-])\d{4}){4}$/ 
    return regExp.test(value)
}