

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
});


function showerrors(form){
		if (form.find(".form-error").length==0) {
			var contenedor = $( "<div>", { class: "form-error", html: $( "<p>" )});
			form.append(contenedor);
			var mensaje = contenedor.find("p");
		}

    jQuery.validator.setDefaults({
        showErrors: function(map, list) {
            jQuery.each(list, function(index, error) {
                if(index==0 ){
                    error.element.focus();
                }
            });
            var focussed = document.activeElement;
            if (focussed && jQuery(focussed).is("input, textarea, select")) {
                mensaje.html('');
            }
            contenedor.hide();
            if (focussed && jQuery(focussed).is("input, textarea, select")) {
                this.currentElements.removeAttr("title").removeClass("error");
            }else{
                jQuery(focussed).removeClass("error");
            }
            $.each(list, function(index, error) {
                if (focussed && jQuery(focussed).is("input, textarea, select")) {
                    jQuery(error.element).attr("title", error.message).addClass("error");
                }else{
                    jQuery(error.element).addClass("error");
                }
            });
            if (focussed && jQuery(focussed).is("input, textarea, select")) {
                if(jQuery(focussed).hasClass('error')){
                        contenedor.show();
                }
                mensaje.html(jQuery(focussed).attr("title"));
            }
        }
    });
}
