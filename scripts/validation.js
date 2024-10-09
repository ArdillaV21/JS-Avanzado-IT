const forms = document.querySelectorAll("form")
const signInForm = document.getElementById("signin");
const contactForm = document.getElementById("contact");

forms.forEach(frm => { frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //Acceder a los campos de formularios
    const getField = (f) => e.target[f]
    //Acceder a los valores de contraseña
    const p = (n) => getField("password")[n].value
    //Verificamos que NO existe campo contraseña
    if(!getField("password")){
        console.log("formulario de contacto");
    }
    else{
        console.log("Formulario de registro")
        if(p(0) === p(1)){
            console.log("Las contraseñas coinciden")
        }
    }
})})