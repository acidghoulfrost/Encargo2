function enviarFormulario() {
    var areatexto = document.getElementById("areatexto");
    var error = document.getElementById("error");

    if (areatexto.value.trim() === '') {
        error.innerHTML = "Debe ingresar texto!";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}