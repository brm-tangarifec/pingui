if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", deviceOrientationListener);
} else {
  console.log("Sorry, your browser doesn't support Device Orientation");
}

var device="pc",
		action="";

switch(device) {
    case "phone":
    		action="gira t celular 360 grados";
				Sequencer.init({from:0, to: 123, folder:"img/action-one", baseName:"action-one-", ext:"jpg"});
     break;
    case "pc":
    		action="Mover mouse arriba o abajo";
				Sequencer.init({from:0, to: 123, folder:"img/action-one", baseName:"action-one-", ext:"jpg", direction:"-y", playMode:"mouse"});
    break;
}

document.getElementById("action-text").innerHTML = action;

function deviceOrientationListener(event) {

    if ( (event.alpha >= 250 && event.alpha <= 300) && (event.beta >= -10 && event.beta <= 10 ) && (event.gamma >= -90 && event.gamma <= 90) ) {
			Sequencer.nextImage();
    }
}