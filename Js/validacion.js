function validarOpinion() {
    var areatexto = document.getElementById("areatexto");
    var error = document.getElementById("error");

    if (areatexto.value.trim() === '') {
        alert("Se debe ingresar texto!!")
        return false;
    } else {
        return true;
    }
}

function validarSolicitud(){

    var nombre,apellido;
    nombre =document.getElementById("nombre").value;
    apellido =document.getElementById("apellido").value;

    if(nombre ===""){
        alert("El campo nombre esta vacio")
    }
    else if(apellido ===""){
        alert("El campo apellido esta vacio")
        return false;
    }

}