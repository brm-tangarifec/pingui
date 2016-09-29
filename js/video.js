(function() {
	new DrawFillSVG({elementId: "play-video"});
  new DrawFillSVG({elementId: "share-video"});
})();

$(document).ready(function(){
	$(this).prop("controls", true);
	var videoEnc = localStorage.getItem("video");
    var idVideo = syncCAjax(videoEnc,'desc');
    if (idVideo != undefined && idVideo > 0) {
    	$.ajaxSetup({ async: false });
    	var confirgE=window.btoa("st");
    	var videoStatus = videoEnc+confirgE;
		localStorage.setItem('videost', videoStatus);
		$.getJSON( "js/actions.json", function( data ) { video=data[idVideo].namevideo });
		$("#video")[0].src="_data/videos/"+video;
    }else{
        window.location="/";
    }
    
	// Play video automático
	$('#play-video').hide();
	$('#box').css('background-color', '#fff');
	$('#share-video, #title-video').css('opacity', '0.2');
	$('#video').css('opacity', '1');
	$('#video').trigger('play');

	// Envía al home- Todas las recetas
	$('#go-recipes').click(function(){
		window.location="/";
	});
	
});