(function() {
  new DrawFillSVG({elementId: "helicopter"});
  new DrawFillSVG({elementId: "hot-air-balloon"});
  new DrawFillSVG({elementId: "welcome"});
  new DrawFillSVG({elementId: "hashtag"});
  new DrawFillSVG({elementId: "balloon"});
  new DrawFillSVG({elementId: "camera"});
  new DrawFillSVG({elementId: "message"});
  new DrawFillSVG({elementId: "arrow-up"});
  new DrawFillSVG({elementId: "arrow-down"});
  new DrawFillSVG({elementId: "line-up"});
  new DrawFillSVG({elementId: "line-down"});
})();

$(function(){
	$('#videos').mixItUp(
		{
			controls: {
				live: true
			},
			load: {
				filter: '.category-1',
				sort: 'random'
			},
			animation: {
				enable: true,
				queue: true,
				queueLimit: 1,
				duration: 1000,
				effects: 'stagger(200ms) translateX(100%) fade translateY(100%)',
				easing: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
	      animateChangeLayout: true,
	      animateResizeTargets: true
			}
		}
	);

	setTimeout(function(){ 
		$("#cream-jar").addClass("animated zoomIn");
		$("#name").addClass("animated zoomIn");
	}, 2000);

	$('#arrow-up').attr("data-filter",".category-4");
	$('#arrow-down').attr("data-filter",".category-2");




});