(function() {
  new DrawFillSVG({elementId: "helicopter"});
  new DrawFillSVG({elementId: "hot-air-balloon"});
  new DrawFillSVG({elementId: "copy-register"});
  new DrawFillSVG({elementId: "balloon"});
  new DrawFillSVG({elementId: "camera"});
  new DrawFillSVG({elementId: "car"});
  new DrawFillSVG({elementId: "trolley"});
})();

$(document).ready(function(){
	console.log('hola, estoy ingresando');
	/*Registro*/
//Validar letras con espacios y caracteres especiales//
  $.validator.addMethod("letras", function(value, element)
     {
         return this.optional(element) || /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(value);
     });


  //Validación de campos
  $('#pinguino').validate({
  
    //por defecto es false
    // debug:true,
  
    //Contenedor y clase donde se pinta el error
    errorElement: "div",
    errorClass: "mensaje",
  
    //Campos a validar
    rules:{
      ideaE: {required: true},
      nombre: {required: true, letras:true},
      email: {required: true, email:true},
      tipoD: {required: true},
      numDoc: {required: true, digits:true},
      fechaN: {required: true, date:true},
      departamento: {required: true},
      ciudad: {required: true},
      direccion: {required: true},
      autorizo: {required: true},
      terminos: {required: true}
    },
  
    //Mensaje de error cuando no cumple la regla
    messages:{
      ideaE: {required: 'Debes contarnos tu idea'},
      nombre: {required: 'Debes escribir tu nombre', letras:'solo se acepta texto'},
      email: {required: 'Debes ingresar un email', email:'ingresa un email v&aacute;lido'},
      tipoD: {required: 'Selecciona un tipo de documento'},
      numDoc: {required: 'Debes escribir tu n&uacute;mero de documento', digits:'solo se aceptan n&uacute;meros'},
      fechaN: {required: 'Debes indicar tu fecha de nacimiento', date:'Fecha no v&aacute;lida '},
      departamento: {required: 'Selecciona un departamento'},
      ciudad: {required: 'Selecciona una ciudad'},
      direccion: {required: 'Ingresa una direcci&oacute;n'},
      autorizo: {required: 'Debes aceptar las politicas de tratamientos de datos'},
      terminos: {required: 'Debes aceptar los t&eacute;rminos'}
    },
  
    //ubicación del mensaje de error
  
    errorPlacement: function (error, element) {       
  
        error.insertAfter(element.parent());
      
  
    }
  
  });
});
