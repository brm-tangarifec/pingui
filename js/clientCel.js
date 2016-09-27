var socket = io.connect('https://pinguino-julian10404.c9users.io/');
var id = "";
var estadoSincro = 0;

// Paso 4 - Se envía el código para comparar
function comparaCodigo(){
    codigo = $("#code-phone").val();
    if (codigo != "") {
        var data={
            id: id,
            codigo: codigo
        }
        socket.emit('comparaCodigo', data);
    }else{
        alert("Ingrése código");
    }
}

// Paso 8 - Se reciben los datos y se realiza la accion
function realizaAccion(x){
    if (estadoSincro==1) {
       var data={
            codigo:codigo,
            x:x
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
            alert("Se sincronizó correctamente");
            createcanvas(device);
        }else if (data.estadoCodigo==2){
            // El código ya está en uso
            alert("El código ya se está usando");
            estadoSincro=0;
        }else{
            // El código es incorrecto
            alert("El código es incorrecto");
            estadoSincro=0;
        }
    });
    
    //Paso 11 - Se desconecta Web
    socket.on('desconectadoWeb', function () {
        alert("Se desconecto el cliente web");
        estadoSincro=0;
        $("#conectado").hide();
        $("#desconectado").show();
    });
}


// Accion
if (screen.width < 1280) 
{
    window.addEventListener('load', function(){
        var box1 = document.getElementById('box1')
        var startx = 0
        var dist = 0
        box1.addEventListener('touchstart', function(e){
            var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
            startx = parseInt(touchobj.clientX) // get x position of touch point relative to left edge of browser
            realizaAccion(startx)
            e.preventDefault()
        }, false)
     
        box1.addEventListener('touchmove', function(e){
            var touchobj = e.changedTouches[0] // reference first touch point for this event
            var dist = parseInt(touchobj.clientX) - startx
            realizaAccion(dist)
            e.preventDefault()
        }, false)
     
        box1.addEventListener('touchend', function(e){
            var touchobj = e.changedTouches[0] // reference first touch point for this event
            realizaAccion(touchobj.clientX)
            e.preventDefault()
        }, false)
     
    }, false)
}