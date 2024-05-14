var tipoopinion = document.getElementById('tipoopinion');
var textarea = document.getElementById("areatexto");
var error = document.getElementById("error")
error.style.color = 'red';

function enviarFormulario(){
    console.log('Enviando formulario..');

    var MensajesError = [];

    if(textarea.value === null || tipoopinion === ''){}
        MensajesError.push('El texto no debe estar vacio!')
}