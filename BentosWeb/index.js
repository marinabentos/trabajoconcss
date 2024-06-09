let id=> document.getElementById(id);
let classes= (classes) => document.getElementsByClassName(classes);
let nombreDeUsuario = id("nombreDeUsuario")
contraseña = id("contrasña")
formulario = id("formulario")
form.addeventListener("enviar", (e) => {
    e.preventDfault();

    motor(nombreDeUsuario, 0, "el nombre de usuario no puede estar en blanco");
    motor(contraseña, 1, "la contraseña no puede estar en blanco");
});
function motor(id, serial, mensaje) {

    if (id.value.trim() === "") {
        Msjerror[serial].innerHTML = mensaje;
    }

    else {
        Msjerror[serial].innerHTML = "";
    }

}


