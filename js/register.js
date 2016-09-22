(function() {
  new DrawFillSVG({elementId: "helicopter"});
  new DrawFillSVG({elementId: "hot-air-balloon"});
  new DrawFillSVG({elementId: "copy-register"});
  new DrawFillSVG({elementId: "balloon"});
  new DrawFillSVG({elementId: "camera"});
  new DrawFillSVG({elementId: "car"});
  new DrawFillSVG({elementId: "trolley"});
})();

jQuery(document).ready(function(){
	console.log('hola, estoy ingresando');
	/*Registro*/
//Validar letras con espacios y caracteres especiales//
  jQuery.validator.addMethod("letras", function(value, element)
     {
         return this.optional(element) || /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(value);
     });


  //Validación de campos
  jQuery('#pinguino').validate({
  
    //por defecto es false
    // debug:true,
  
    //Contenedor y clase donde se pinta el error
    errorElement: "div",
    errorClass: "mensaje",
  
    //Campos a validar
    rules:{
      name: {required: true, letras:true, accept: "[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+"},
      apellido: {required: true, letras:true, accept: "[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+"},
      email: {required: true, email:true},
      provincia: {required: true,letras:true,},
      ciudad: {required: true,letras:true,},
      lepas:{required: true},
	     lepasc:{required: true,
        equalTo : '#lepas',
      },      
      check: {required: true}
    },
  
    //Mensaje de error cuando no cumple la regla
    messages:{
      name: {required: 'El nombre es requerido', letras:'El campo nombre no debe contener números ni caracteres especiales', accept: "Solo se aceptan letras"},
      apellido: {required: 'El campo es requerido', letras:'El campo apellido no debe contener números ni caracteres especiales' , accept: "Solo se aceptan letras"},
      email: {required: 'Por favor ingrese un e-mail', email:'Ingrese un e-mail con formato v&aacute;lido'},
      provincia: {required: 'Ingrese una provincia'},
      ciudad: {required: 'Ingrese una ciudad'},
      lepas:{required: 'El campo contrase&ntilde;a no debe estar vac&iacute;o'},
       lepasc:{required: 'El campo contrase&ntilde;a no debe estar vac&iacute;o',
        equalTo : 'La contrase&ntilde;a no coincide',
      },      
      check: {required: 'Debes aceptar los t&eacute;rminos'},
    },
  
    //ubicación del mensaje de error
  
    errorPlacement: function (error, element) {       
  
        if( element.attr('name') == 'check'){

          error.insertAfter(element.next());

        }else{

          error.insertAfter(element);
        }
      
  
    }
  
  });

jQuery(document).on('change','#lepas',function(){


    jQuery("#lepas").each(function () {
        var validated =  true;
        if(this.value.length < 8){
          console.log('menor');
          $('.mensajes-pass').append('<p>La contraseña no debe ser menor a ocho caracteres</p>').show('fade');
            validated = false;
        }
        if(!/\d/.test(this.value)){
            console.log('digito');
          $('.mensajes-pass').append('<p>La contraseña debe contener al menos un digito</p>').show('fade');
            validated = false;
        }
        if(!/[a-z]/.test(this.value)){
          console.log('minuscula');
          $('.mensajes-pass').append('<p>La contraseña debe contener al menos una minúscula </p>').show('fade');
            validated = false;          
        }
        if(!/[A-Z]/.test(this.value)){
          console.log('mayuscula');
          $('.mensajes-pass').append('<p>La contraseña debe contener al menos una mayúscula</p>').show('fade');
            validated = false;
        }
        if(!/[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/gi.test(this.value)){
            console.log('especiales');
          $('.mensajes-pass').append('<p>La contraseña debe contener al menos un caracter especial</p>').show('fade');
            validated = false;
          
        }
        /*Se ponen los errores en el html*/
        //jQuery('div').text(validated ? "pass" : "fail");
        // use DOM traversal to select the correct div for this input above
    });


});

jQuery('#confirmar').click(function(){
  console.log('hola, soy un click');

  if(jQuery('#pinguino').valid()){
    console.log('valido');
    console.log('hola, es válido');
    var nombre=jQuery('#name').val(),
    apellido=jQuery('#apellido').val(),
    email=jQuery('#email').val(),
    provincia=jQuery('#provincia').val(),
    ciudad=jQuery('#ciudad').val(),
    lepas=jQuery('#lepas').val(),
    lepasc=jQuery('#lepasc').val(),
    aceptar=jQuery('#slideThree').val(),
    urlR='eventos.php';

    jQuery.ajax({
            url: urlR,
            dataType:'json' ,
            type: 'POST',
            data:{
              nombre:nombre,
              apellido:apellido,
              email:email,
              provincia:provincia,
              ciudad:ciudad,
              lepas:lepas,
              lepasc:lepasc,
              aceptar:aceptar,
              vrtCrt:'registrar'
            },
            success: function (data){
              console.log(data);
            }, 
            error: function(result) {
                      console.log(result,'error');
              }
            });
            return false;
  }
});
});
