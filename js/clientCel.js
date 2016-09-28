var socket = io.connect('https://pinguino-julian10404.c9users.io/');
var id = "";
var estadoSincro = 0;

// Paso 4 - Se envía el código para comparar
function comparaCodigo(){
    codigo = $("#code-mobile").val();
    if (codigo != "") {
        var data={
            id: id,
            codigo: codigo
        }
        socket.emit('comparaCodigo', data);
    }else{
        $("#message").html("Ingrése el código");
    }
}

// Paso 8 - Se reciben los datos y se realiza la accion
function realizaAccion(x){
    if (estadoSincro==1) {
       var tamanoDevice = screen.width;
        var porcentaje=x*100/tamanoDevice;
        var data={
            codigo:codigo,
            porcentaje:porcentaje
        }
        socket.emit('realizaAccion', data); 
    }
}

if (screen.width<1280) 
{    
    // Se crea la conexión con el servidor
    socket.on('connect', function() {
      id = socket.socket.sessionid;
    });
    
    //Paso 7 - Muestra alerta si se sincroniza correctamente
    socket.on('sincronizaCel', function (data) {
        if (data.estadoCodigo==1) {
            // Sincronizo correctamente
            estadoSincro=1;
            $("#message").html("Se sincronizó correctamente");
            createcanvas(device,data.idVideo);
        }else if (data.estadoCodigo==2){
            // El código ya está en uso
            $("#message").html("El código ya se está usando");
            estadoSincro=0;
        }else{
            // El código es incorrecto
            $("#message").html("El código es incorrecto");
            estadoSincro=0;
        }
    });
    
    //Paso 11 - Se desconecta Web
    socket.on('desconectadoWeb', function () {
        $("#message").html("Se desconecto el cliente web");
        estadoSincro=0;
        location.reload();
    });
}