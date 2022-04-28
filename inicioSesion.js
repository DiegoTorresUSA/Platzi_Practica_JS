function inicioSesion() {
    var contador = 3;

    while (validarInicio() == false){
        alert("Datos equivocados");
        contador -= 1;
        alert("tienes " + contador + " oportunidades")

        if (contador == 0){
            alert("Usuario Bloqueado!!!")
            break;
        }
    }
    alert("Inicio Exitoso... Bienvenido ");
}

function validarInicio() {
    var user = 'DiegoT';
    var pass = '123456';

    var usuario = prompt("Digita tu usuario");
    var password = prompt("Digita el pass");

    if (usuario == user && password == pass){
        return true;
    }else {
        return false;
    }
}