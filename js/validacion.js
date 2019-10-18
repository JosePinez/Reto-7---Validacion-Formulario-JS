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
