//las lineas de codigo a continuacion son para el evento del boton "iniciar sesion",  del header llevara al usuario a crear su usuario
var registrar=document.getElementById('btnRegistro');

function registro(){
    window.location.href="inicioSesion.html";
}
registrar.addEventListener('click',registro);

/*las siguientes lineas de codigo son para el evento del boton "realizar bodas" del header, 
este llevara al usuario a realizar el formulario para realizar su registro civil*/

var registroBoda= document.getElementById('btnBoda');

function registrarBoda(){
    window.location.href="formularioNovio.html";
}
registroBoda.addEventListener('click',registrarBoda)

/*el siguiente codigo es para el funcionamiento del boton "iniciar sesion del formulario de iniciar sesion" */
