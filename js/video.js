(function() {
	new DrawFillSVG({elementId: "play-video"});
  new DrawFillSVG({elementId: "share-video"});
})();

$(document).ready(function(){
//	$(this).prop("controls", true);

	$('#play-video').click(function(){
		$(this).hide();
		$('#box').css('background', 'transparent');
		$('#video').trigger('play');
	});



});