var actionglob=0;mobile = false,device="",complete=0,toframe=0,contmove=0,interval=1,direction="",text=null,textdesktop=null,textmobile=null,from=null,to=null,folder=null,basename=null,ext=null,direction=null,playmode=null,sprite=null,actions=[],numAction=0,datacurrent=null,idactioncurrent=null,actionname=null;

$(document).ready(function(){

	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) mobile = true;

	new DrawFillSVG({elementId: "copy-up-synchronize"});

	if (mobile) {

		$("#btn-sync").html("sincroniza con tu PC");
		$("#btn-no-sync").html("continuar sin experiencia full screen");

		$('#icon-mobile-synchronize').remove();
		$('#icon-desktop-synchronize').remove();
	  new DrawFillSVG({elementId: "icon-mobile-synchronize-2"});
	  new DrawFillSVG({elementId: "icon-desktop-synchronize-2"});

		device="mobile"; 


	}else{

		$("#btn-sync").html("sincroniza con tu móvil");
		$("#btn-no-sync").html("continuar sin experiencia móvil");

		$('#icon-mobile-synchronize-2').remove();
		$('#icon-desktop-synchronize-2').remove();
		new DrawFillSVG({elementId: "icon-mobile-synchronize"});
	  new DrawFillSVG({elementId: "icon-desktop-synchronize"});

		device="desktop";

	}

	$('#send-code').click(function(){
		comparaCodigo();
	});

	$('#synchronize').click(function(){
		synchronize();
	});

	$('#no-synchronize').click(function(){
		createcanvas(syncCAjax( localStorage.getItem("video") ,'desc'));
	});

});


function createmobilearea(){

		$("#code-synchronize").remove();
		$("#desktop-mobile-area").show();
		$("#action").show();
}

function createsprite(action){

	switch(device) {
	    case "mobile-desktop":
					text=textmobile;
					sprite="small";
	    break;
	    case "mobile":
					text=textmobile;
					sprite="big";
	    break;
	    case "desktop":
					text=textdesktop;
					sprite="big";
	    break;
	}
	$("#action-text").html(text);
	$(".sprite").attr("id","action-"+action+"-"+sprite);

}


function synchronize(){

		device="mobile-desktop";

		if (mobile) {

			$("#code-synchronize").show();
			$('#box-synchronize').remove();

		}else{

			$("#synchronize").addClass("active");
			$('#no-synchronize').remove();
			$('#copy-up-synchronize').remove();
			$('#copy-steps-synchronize').show();
			$('#steps-synchronize').show();
			$("#icon-synchronize").hide();
			peticionCodigo();

		}

}

function setconfigcanvas(action){
	$.ajaxSetup({ async: false });
	$.getJSON( "js/actions.json", function( data ) {
		actions = data[action].action;
		datacurrent = actions[numAction];
		
		$("#steps-action").html("");
		for (var i = 1; i < actions.length+1; i++) {
			$("#steps-action").append("<div class='step' id='step-"+i+"'> <span> 0/"+actions.length+"</span></div>");
		}

		textdesktop=datacurrent.text.desktop;
		textmobile=datacurrent.text.mobile;
		from=datacurrent.from;
		to=datacurrent.to;
		folder=datacurrent.folder;
		basename=datacurrent.basename;
		ext=datacurrent.ext;
		direction=datacurrent.direction;
		playmode=datacurrent.playmode;
		actionname=datacurrent.action;
		
	});

}

function getaction(){
	return actionglob;
}

function setaction(action){
	actionglob=action;
}

function createcanvas(action){
	setconfigcanvas(action);
	setaction(action);
	idactioncurrent=action;

	$("#box-synchronize").remove();	
	switch(actionname) {
		case "swipex": gestureswipe("x"); break;
	    case "swipey": gestureswipe("y"); break;
	}

	switch(device) {

	    case "mobile-desktop":

					interval=5;
					if (mobile) { $("#box-action").remove(); }

					if (!mobile) { 
						$("#box-action").show();
						Sequencer.init({from:from, to: to, folder:folder, baseName:basename, ext:ext});  
					}

	    break;

	    case "mobile":

					interval=10;
					$("article").addClass(device); 
					$("#box-action").show(); 
					Sequencer.init({from:from, to: to, folder:folder, baseName:basename, ext:ext});

	    break;

	    case "desktop":

					interval=1;
					$("#box-action").show(); 
					Sequencer.init({from:from, to: to, folder:folder, baseName:basename, ext:ext, direction:direction, playMode:playmode});
	
	    break;
	}

	createsprite(action);

}
/* Remueve los eventos Listener de un elemento*/
function recreateNode(el, withChildren) {
  if (withChildren) {
    el.parentNode.replaceChild(el.cloneNode(true), el);
  } else {
    var newEl = el.cloneNode(false);
    while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
    el.parentNode.replaceChild(newEl, el);
  }
}


/* Acciones */

// Realiza la acción de swipe para el eje X y Y
function gestureswipe(eje){
	console.log(eje,"eje");
	if (mobile) { 
	  recreateNode(document.getElementById('gesture-content'), true);
	  var box1 = document.getElementById('gesture-content')
	  
	  var start = 0
	  var end = 0
	  var longMovi = 0
	  // Inicia el evento swipe
	  box1.addEventListener('touchstart', function(e){
	      var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
	      if (eje=="x") {start = parseInt(touchobj.clientX);}
	      if (eje=="y") {start = parseInt(touchobj.clientY);}
	      e.preventDefault();
	  }, false)
	  // Finaliza el evento swipe
	  box1.addEventListener('touchend', function(e){
		var touchobj = e.changedTouches[0] // reference first touch point for this event
		if (eje=="x") {end = parseInt(touchobj.clientX);}
		if (eje=="y") {end = parseInt(touchobj.clientY);}
		longMovi = end-start;
		console.log(longMovi,"longMovi");
		var tamano = (eje == "x" ) ? box1.offsetWidth: box1.offsetHeight;
		var porcentaje=parseInt(longMovi*100/tamano);
		realizaAccion(porcentaje);
		e.preventDefault();
	  }, false)
	}

}

// 
function moveframe(percentage,action,iterations){
	if (percentage != 0) {
		complete+=percentage;
		if (complete >= 100) { complete=0; contmove++; }
		if (contmove>=iterations) {
			contmove=0;complete=0;Sequencer.setCurrent(-1);  unlock(); 
		}else{
			var framesmove=Math.round((to/interval)*percentage/100);
			if(framesmove > 0 ){
				toframe=(Sequencer.getCurrent() + framesmove);
				direction="right";
			}else if(framesmove < 0){
				toframe=Sequencer.getCurrent() - (framesmove*-1);
				direction="left";
			}
			
			if (parseInt(framesmove) != 0 ) {
				Sequencer.toFrame(toframe,direction,interval);
			}
		}
		
	}
}

function unlock(){
	if (!mobile) {terminaAccion();}
	if (numAction == (actions.length-1)) {
		setTimeout(function() {window.location="video.php";}, 2000);
	}else{
		numAction++;
		$("#step-"+ (numAction+1) ).addClass("unlock");
		$("#box-action canvas").remove();
		createcanvas(idactioncurrent);
		
	}
}	
