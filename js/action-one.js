var action="";
var device="desktop";
switch(device) {
   case "phone-desktop":
  		$("#box").remove();
  		$("article").addClass(device);
			action="gira tu celular 360 grados";
			Sequencer.init({from:1, to: 162, folder:"img/action-one", baseName:"action-one-", ext:"jpg"});
	break;
	case "mobile":
			action="gira tu celular 360 grados";
			Sequencer.init({from:1, to: 162, folder:"img/action-one", baseName:"action-one-", ext:"jpg"});
	break;
	case "desktop":
			action="Mover mouse arriba o abajo";
			Sequencer.init({from:1, to: 162, folder:"img/action-one", baseName:"action-one-", ext:"jpg",direction:"y",playMode:"mouse"});
	break;
}

document.getElementById("action-text").innerHTML = action;

function deviceOrientationListener(event) {


}

if (window.DeviceOrientationEvent) {
	window.addEventListener("deviceorientation", deviceOrientationListener);
} else {
	console.log("Sorry, your browser doesn't support Device Orientation");
}