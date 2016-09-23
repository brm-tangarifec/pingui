jQuery(document).ready(function(){

 /*FUncion para prevenir frame jacking*/
/*=====================================================*/
var __pcja_style = document.createElement('style');
__pcja_style.type = 'text/css';
__pcja_style.id = 'bfbs_cja';
var __pcja_css = 'html{ display:none !important; }';
if (__pcja_style.styleSheet){
                __pcja_style.styleSheet.cssText = __pcja_css;
  }else{
                __pcja_style.appendChild(document.createTextNode(__pcja_css));
          }

document.getElementsByTagName("head")[0].appendChild(__pcja_style);
if( self === top ){
                  var __bfbs_cja = document.getElementById( 'bfbs_cja' );
                  __bfbs_cja.parentNode.removeChild( document.getElementById( 'bfbs_cja' ) );
  }else{
                top.location = self.location;
          }

/*Función para verificar el dominio XSF*/
try {
if (top.location.hostname != self.location.hostname) throw 1;
} catch (e) {
top.location.href = self.location.href;
}

/*Fin función para XSF*/
/*=====================================================*/


    localStorage.clear();

    $(".mix").on("click", function() {
    	var videoi=jQuery(this).attr('data');
    	console.log(videoi);
        if(window.localStorage!==undefined) {
            var fields = videoi;
            console.log(fields);

            localStorage.setItem("video", JSON.stringify( fields ));
            //alert("Stored Succesfully");
            $(this).find("input").val(""); //this ONLY clears input fields, you also need to reset other fields like select boxes,...
            window.location="https://planpinguino-vlasquez.c9users.io/sync#"+fields;
            /*$.ajax({
               type: "POST",
               url: "backend.php",
               data: {data: fields},
               success: function(data) {
                  $('#output').html(data);
               }*/
            //});
        } else {
            console.log("Storage Failed. Try refreshing");
        }
    });


});