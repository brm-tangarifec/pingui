var hammertime = new Hammer(document.getElementById('box'), "");

var device="pc",
		action="";

switch(device) {
    case "phone":
    		action="Deliza tu dedo hacia abajo";
				Sequencer.init({from:0, to: 123, folder:"img/action-two", baseName:"action-two-", ext:"jpg"});
     break;
    case "pc":
    		action="Mover mouse izquierda o derecha";
				Sequencer.init({from:0, to: 123, folder:"img/action-two", baseName:"action-two-", ext:"jpg", direction:"-x", playMode:"mouse"});
    break;
}

document.getElementById("action-text").innerHTML = action;

hammertime.on('swipe', function(ev) {
	for (var i = 0; i <= 10; i++) {
		Sequencer.nextImage();
	}
});
