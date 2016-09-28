/*Ceaciones*/
jQuery(document).ready(function(){
	console.log('hola');

	 localStorage.clear();
    $(".mix").on("click", function() {
    	var videoi=jQuery(this).attr('data');
    	var urlV='syncC.php';
    	 jQuery.ajax({
            url: urlV,
            dataType:'json' ,
            type: 'POST',
            data:{
              video:videoi,
              vrtCrt:'enc'
            },
            success: function (data){
              console.log(data);
              if(window.localStorage!==undefined) {
              	var fields = videoi;
              	console.log(fields);
              	localStorage.setItem("video", JSON.stringify(data));
    	} else {
    		console.log("Storage Failed. Try refreshing");
    	}
    },error: function(result) {
    	console.log(result,'error');
    }
});
return false;
    	//console.log(videoi);
      
    });
});