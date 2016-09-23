var action="";

switch(device) {
	case "mobile":
			action="gira tu celular 360 grados";
			Sequencer.init({from:0, to: 162, folder:"img/action-one", baseName:"action-one-", ext:"jpg"});
			Sequencer.nextImage();
	 break;
	case "desktop":
			action="Mover mouse arriba o abajo";
			Sequencer.init({from:0, to: 162, folder:"img/action-one", baseName:"action-one-", ext:"jpg", direction:"-y", playMode:"mouse"});
			Sequencer.nextImage();
	break;
}

document.getElementById("action-text").innerHTML = action;

function deviceOrientationListener(event) {
	
	console.log(event.gamma);
	if (event.gamma >= 0 || event.gamma =< 20) {
		console.log("entro");
		for (var i = 0; i <= 16; i++) {
			Sequencer.nextImage();
		}
	}


}

if (window.DeviceOrientationEvent) {
	window.addEventListener("deviceorientation", deviceOrientationListener);
} else {
	console.log("Sorry, your browser doesn't support Device Orientation");
}