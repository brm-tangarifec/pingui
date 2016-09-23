var device="phone",
		action="";

switch(device) {
	case "phone":
			action="gira tu celular 360 grados";
			Sequencer.init({from:0, to: 162, folder:"img/action-one", baseName:"action-one-", ext:"jpg"});
	 break;
	case "pc":
			action="Mover mouse arriba o abajo";
			Sequencer.init({from:0, to: 162, folder:"img/action-one", baseName:"action-one-", ext:"jpg", direction:"-y", playMode:"mouse"});
	break;
}

document.getElementById("action-text").innerHTML = action;

function deviceOrientationListener(event) {
	
	if (event.gamma == 20) {
		for (var i = 0; i <= 16; i++) {
			Sequencer.nextImage();
		}
	}

	if (event.gamma == 40) {
		for (var i = 0; i <= 16; i++) {
			Sequencer.nextImage();
		}
	}

	if (event.gamma == 60) {
		for (var i = 0; i <= 16; i++) {
			Sequencer.nextImage();
		}
	}

	if (event.gamma == 80) {
		for (var i = 0; i <= 16; i++) {
			Sequencer.nextImage();
		}
	}

	if (event.gamma == 90) {
		for (var i = 0; i <= 16; i++) {
			Sequencer.nextImage();
		}
	}


	if (event.gamma == -90) {
		for (var i = 0; i <= 16; i++) {
			Sequencer.nextImage();
		}
	}


	if (event.gamma == -80) {
		for (var i = 0; i <= 16; i++) {
			Sequencer.nextImage();
		}
	}

	if (event.gamma == -60) {
		for (var i = 0; i <= 16; i++) {
			Sequencer.nextImage();
		}
	}

	if (event.gamma == -40) {
		for (var i = 0; i <= 16; i++) {
			Sequencer.nextImage();
		}
	}

	if (event.gamma == -20) {
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