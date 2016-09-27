(function() {
	new DrawFillSVG({elementId: "play-video"});
  new DrawFillSVG({elementId: "share-video"});
})();

$(document).ready(function(){
//	$(this).prop("controls", true);

	$('#play-video').click(function(){
		$(this).hide();
		$('#box').css('background-color', '#fff');
		$('#share-video, #title-video').css('opacity', '0.2');
		$('#video').css('opacity', '1');
		$('#video').trigger('play');
	});



});