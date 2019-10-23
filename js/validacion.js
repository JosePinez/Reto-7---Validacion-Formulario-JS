/* ------------ RETO 7 VALIDACION FORMULARIO JS -----------------------
/*
function validar(){
    //declaration of variables
    var nombre;
    nombre = document.getElementById("nombre").value;
    nombre_reggex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    var apellido;
    apellido = document.getElementById("apellidos").value;
    ape_reggex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    var email_reggex = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;
    var usuario;
    usuario = document.getElementById("usuario").value;
    usuario_reggex = /^[a-z0-9_\\_\ü]+$/;
    var telefono = document.getElementById("tel");
    var tel_reggex = /^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/;

    //Validation Process
    if(nombre === "" || apellido === ""|| edad === ""||email === "" || telefono === ""|| usuario === ""){
        alert("Todos los campos son obligatorios")
    }
    if(!nombre_reggex.test(nombre)){
        alert("El campo nombre solo puede contener letras (La primera en mayusculas)");
    }else if(nombre.length > 25){
        alert("El nombre no puede superar los 25 caracteres");
    }
    if(!ape_reggex.test(apellido)){
        alert("El campo apellido solo puede contener letras (La primera en mayusculas)" );

    }else if(ape.length > 50){
        alert("El apellido no puede superar los 50 caracteres");
    }
    if(edad < 18 ){
        alert("Debes ser mayor de edad para registrarte");
    }
    if(! email_reggex.test(email)){
        alert("El campo E-mail no tiene el formato correcto");
    }
    if( ! usuario_reggex.test(email)){
        alert("El campo usuario no puede contener caracteres especiales");
    }
    if(usuario.length > 25){
        alert("El usuario no puede superar los 25 caracteres");
    }if(!tel_reggex.test(telefono)){
        alert("El campo telefono solo puede contener números y en el formato indicado (xxx-xx-xx-xx)");
    }


}
*/


/* ------------------ RETO 7.1 VALIDACION FORMULARIO JS -----------------------*/



//EVENT PREPARED TO CHANGE THE INPUT TYPE IN THE DATE FIELD. DATE --> TEXT --> DATE
window.addEventListener('load', function () {

    document.getElementById('fecha').type = 'text';

    document.getElementById('fecha').addEventListener('blur', function () {

        document.getElementById('fecha').type = 'text';

    });

    document.getElementById('fecha').addEventListener('focus', function () {

        document.getElementById('fecha').type = 'date';

    });

});
var noExisteError = false;
formulario = document.getElementById("formulario");
//FUNCTION THAT IS EXECUTED WHEN THE FORM IS SENT. IF ALL IS WELL, IT IS SENT
function validar() {
    validaNombre();
    validaApellidos();
    validaEdad();
    validaEmail();
    validaUsuario();
    validaTel();
    if (validaNombre() && validaApellidos() && validaEdad() && validaEmail() && validaUsuario() && validaTel()) {
        alert("REGISTRO ENVIADO CORRECTAMENTE");
        formulario.submit();
    }
}
//FUNCTION THAT VALIDATES IF THE NAME IS CORRECT AND IS NOT EMPTY.
function validaNombre() {
    let nombre = document.getElementById("nombre").value;
    let nombre_reggex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    let div = document.createElement("div");
    div.classList.add("error");
    div.setAttribute("id", "errorNom");
    let input = document.getElementById("nombre");
    if (nombre === "") {
        input = document.getElementById("nombre");
        input.classList.add("campoErroneo");
        div.innerHTML = "El campo nombre es obligatorio";
        input.classList.add("campoErroneo");
        if (!document.getElementById("errorNom")) {
            $("#labelNom").appendChild(div);
        }
        noExisteError = false;
    } else if (!nombre_reggex.test(nombre)) {
        div.innerHTML = "El campo nombre solo puede contener letras, la primera en mayusculas";
        if (!document.getElementById("errorNom")) {
            $("#labelNom").appendChild(div);
        }
        input.classList.add("campoErroneo");
        noExisteError = false;
    } else {
        document.formulario.nombre.value = nombre;
        input.classList.add("campoValido");
        noExisteError = true;
    }
    return noExisteError;
}
//FUNCTION THAT VALIDATES IF THE SURNAME IS CORRECT AND NOT EMPTY.
function validaApellidos() {
    let apellidos = document.getElementById("apellidos").value;
    let apes_reggex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    let div = document.createElement("div");
    div.classList.add("error");
    div.setAttribute("id", "errorApes");
    let input = document.getElementById("apellidos");
    if (apellidos === "") {
        input = document.getElementById("apellidos");
        input.classList.add("campoErroneo");
        div.innerHTML = "El campo apellidos es obligatorio";
        input.classList.add("campoErroneo");
        if (!document.getElementById("errorApes")) {
            $("#labelApes").appendChild(div);
        }
        noExisteError = false;
    } else if (!apes_reggex.test(apellidos)) {
        div.innerHTML = "El campo apellidos solo puede contener letras, la primera en mayusculas";
        if (!document.getElementById("errorApes")) {
            $("#labelApes").appendChild(div);
        }
        input.classList.add("campoErroneo");
        noExisteError = false;
    } else {
        document.formulario.apellidos.value = apellidos;
        input.classList.add("campoValido");
        noExisteError = true;
    }
    return noExisteError;
}
//FUNCTION THAT VALIDATES IF THE AGE IS CORRECT AND IS NOT EMPTY.
function validaEdad() {
    var edad = document.getElementById("edad").value;
    let div = document.createElement("div");
    div.classList.add("error");
    div.setAttribute("id", "errorEdad");
    let input = document.getElementById("edad");
    if (edad < 18) {
        input = document.getElementById("edad");
        input.classList.add("campoErroneo");
        div.innerHTML = "Debes ser mayor de edad para registrarte";
        input.classList.add("campoErroneo");
        if (!document.getElementById("errorEdad")) {
            $("#labelEdad").appendChild(div);
        }
        noExisteError = false;
    } else {
        document.formulario.edad.value = edad;
        input.classList.add("campoValido");
        noExisteError = true;
    }
    return noExisteError;
}
//FUNCTION THAT VALIDATES IF THE EMAIL IS CORRECT AND NOT EMPTY.
function validaEmail() {
    var email = document.getElementById("email").value;
    var email_reggex = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;
    let div = document.createElement("div");
    div.classList.add("error");
    div.setAttribute("id", "errorEmail");
    let input = document.getElementById("email");
    if (!email_reggex.test(email)) {
        div.innerHTML = "El campo email debe estar en el formato adecuado: ejemplo@ejemplo.com";
        if (!document.getElementById("errorEmail")) {
            $("#labelEmail").appendChild(div);
        }
        input.classList.add("campoErroneo");
        noExisteError = false;
    } else {
        document.formulario.email.value = email;
        input.classList.add("campoValido");
        noExisteError = true;
    }
    return noExisteError;
}
//FUNCTION THAT VALIDATES IF THE PHONE IS CORRECT AND NOT EMPTY.
function validaTel() {
    var tel = document.getElementById("tel").value;
    var tel_reggex = /^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/;
    let div = document.createElement("div");
    div.classList.add("error");
    div.setAttribute("id", "errorTel");
    let input = document.getElementById("tel");
    if (!tel_reggex.test(tel)) {
        input = document.getElementById("tel");
        input.classList.add("campoErroneo");
        div.innerHTML = "El campo teléfono debe tener el siguiente formato: 666-66-66-66";
        input.classList.add("campoErroneo");
        if (!document.getElementById("errorTel")) {
            $("#labelTel").appendChild(div);
        }
        noExisteError = false;
    } else {
        document.formulario.tel.value = tel;
        input.classList.add("campoValido");
        noExisteError = true;
    }
    return noExisteError;
}
//FUNCTION THAT VALIDATES IF THE USER IS CORRECT AND NOT EMPTY.
function validaUsuario() {
    let usuario = document.getElementById("usuario").value;
    let usuario_reggex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    let div = document.createElement("div");
    div.classList.add("error");
    div.setAttribute("id", "errorUsu");
    let input = document.getElementById("usuario");
    if (usuario === "") {
        input = document.getElementById("usuario");
        input.classList.add("campoErroneo");
        div.innerHTML = "El campo usuario es obligatorio";
        input.classList.add("campoErroneo");
        if (!document.getElementById("errorUsu")) {
            $("#labelUsu").appendChild(div);
        }
        noExisteError = false;
    } else if (!usuario_reggex.test(usuario)) {
        div.innerHTML = "El campo usuario solo puede contener letras, la primera en mayusculas";
        if (!document.getElementById("errorUsu")) {
            $("#labelUsu").appendChild(div);
        }
        input.classList.add("campoErroneo");
        noExisteError = false;
    } else {
        document.formulario.usuario.value = usuario;
        input.classList.add("campoValido");
        noExisteError = true;
    }
    return noExisteError;
}
//FUNCTION THAT DELETES THE ADDED CLASS AND THE DIV CREATED.
function borraNombre() {
    if (document.getElementById("nombre").classList.contains("campoErroneo")) {
        var input = document.getElementById("nombre");
        input.classList.remove("campoErroneo");
    } else {
        var input = document.getElementById("nombre");
        input.classList.remove("campoValido");
    }
    if (document.getElementById("errorNom")) {
        var label = document.getElementById("labelNom");
        var div = document.getElementById("errorNom");
        label.removeChild(div);

    }
}
//FUNCTION THAT DELETES THE ADDED CLASS AND THE DIV CREATED.
function borraApellidos() {
    if (document.getElementById("apellidos").classList.contains("campoErroneo")) {
        var input = document.getElementById("apellidos");
        input.classList.remove("campoErroneo");
    } else {
        var input = document.getElementById("apellidos");
        input.classList.remove("campoValido");
    }
    if (document.getElementById("errorApes")) {
        var label = document.getElementById("labelApes");
        var div = document.getElementById("errorApes");
        label.removeChild(div);
    }
}
//FUNCTION THAT DELETES THE ADDED CLASS AND THE DIV CREATED.
function borraEdad() {
    if (document.getElementById("edad").classList.contains("campoErroneo")) {
        var input = document.getElementById("edad");
        input.classList.remove("campoErroneo");
    } else {
        var input = document.getElementById("edad");
        input.classList.remove("campoValido");
    }
    if (document.getElementById("errorEdad")) {
        var label = document.getElementById("labelEdad");
        var div = document.getElementById("errorEdad");
        label.removeChild(div);
    }
}
//FUNCTION THAT DELETES THE ADDED CLASS AND THE DIV CREATED.
function borraEmail() {
    if (document.getElementById("email").classList.contains("campoErroneo")) {
        var input = document.getElementById("email");
        input.classList.remove("campoErroneo");
    } else {
        var input = document.getElementById("email");
        input.classList.remove("campoValido");
    }
    if (document.getElementById("errorEmail")) {
        var label = document.getElementById("labelEmail");
        var div = document.getElementById("errorEmail");
        label.removeChild(div);
    }
}
//FUNCTION THAT DELETES THE ADDED CLASS AND THE DIV CREATED.
function borraTel() {
    if (document.getElementById("tel").classList.contains("campoErroneo")) {
        var input = document.getElementById("tel");
        input.classList.remove("campoErroneo");
    } else {
        var input = document.getElementById("tel");
        input.classList.remove("campoValido");
    }
    if (document.getElementById("errorTel")) {
        var label = document.getElementById("labelTel");
        var div = document.getElementById("errorTel");
        label.removeChild(div);
    }
}
//FUNCTION THAT DELETES THE ADDED CLASS AND THE DIV CREATED.
function borraUsuario() {
    if (document.getElementById("usuario").classList.contains("campoErroneo")) {
        var input = document.getElementById("usuario");
        input.classList.remove("campoErroneo");
    } else {
        var input = document.getElementById("usuario");
        input.classList.remove("campoValido");
    }
    if (document.getElementById("errorUsu")) {
        var label = document.getElementById("labelUsu");
        var div = document.getElementById("errorUsu");
        label.removeChild(div);
    }
}
//FUNCTION THAT CALLS THE DELETE FUNCTIONS OF EACH INPUT WHEN RESETTING THE FORM
function resetear() {
    borraNombre();
    borraApellidos();
    borraEdad();
    borraEmail();
    borraTel();
    borraUsuario();
}
function $(selector) {
    return document.querySelector(selector);
}
