var socket = io.connect('https://pinguino-julian10404.c9users.io/');
var idSocket;
// Paso 1 - Enviamos la petición del código al servidor
function peticionCodigo()
{
    socket.emit('generaCodigo', idSocket);   
}


if (screen.width >= 1280) 
{    
    // Se crea la conexión con el servidor
    socket.on('connect', function() {
        idSocket = socket.socket.sessionid;
    });
    
    //Paso 3 - Recibimos el código generado
    socket.on('guardarCodigo', function (codigo) {
        $("#code-desktop").text(codigo);
    });
    
    
    //Paso 6 - Muestra alerta si se sincroniza correctamente
    socket.on('sincronizaWeb', function (data) {
        createcanvas(device);
    });
    
    //Paso 10 - Recibe y realiza la acción a enviada desde el cel
    socket.on('realizaAccion', function (data) {
        $("#movimiento").text(data.x); 
    });
}