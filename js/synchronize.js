(function() {
	new DrawFillSVG({elementId: "copy-up-synchronize"});
  new DrawFillSVG({elementId: "icon-synchronize"});
  new DrawFillSVG({elementId: "copy-down-synchronize"});
})();

/*$(document ).ready(function() {
	$.ajax({
							type: 'GET',
							data: "",
					        contentType: 'application/json',
	                        url: 'https://planpinguino-vlasquez.c9users.io/sync',						
	                        success: function(data) {
	                        	//console.log(data);
	                           $("#btnSync").val(data.sync);
	                           $("#btnNoExp").val(data.exp);
	                        }
	                    });

	$('#btnSync').click(function(){
	
		var data = {};
						data.action = "Sync";
						data.amb="1";
			$.ajax({
							type: 'POST',
							data: JSON.stringify(data),
					        contentType: 'application/json',
	                        url: 'https://planpinguino-vlasquez.c9users.io/sync',						
	                        success: function(data) {
	                            window.location.href="https://planpinguino-vlasquez.c9users.io/"+data.url+"?amb="+data.amb;;
	                        }
	                    });
	});
	
	$('#btnNoExp').click(function(){
		
		var data = {};
						data.action = "Exp";
						data.amb="";
			$.ajax({
							type: 'POST',
							data: JSON.stringify(data),
					        contentType: 'application/json',
	                        url: 'https://planpinguino-vlasquez.c9users.io/sync',						
	                        success: function(data) {
	                           window.location.href="https://planpinguino-vlasquez.c9users.io/"+data.url+"?amb="+data.amb;
	                        }
                    });
                 
	});


});*/
