var hammertime = new Hammer(box);
hammertime.get('pan').set({threshold:100 ,velocity:0.5,direction:Hammer.DIRECTION_HORIZONTAL});
//hammertime.get('pan').set({threshold:124,velocity:0.5,direction:Hammer.DIRECTION_ALL});

var hammertime = new Hammer(document.getElementById('box'), "");
var device="phone";
var action=""
		endsequence=0;

switch(device) {
    case "phone":
    		action="Desliza tu dedo izquierda o derecha";
				Sequencer.init({from:0, to: 123, folder:"img/action-two", baseName:"action-two-", ext:"jpg"});
     break;
    case "pc":
    		action="Mover mouse izquierda o derecha";
				Sequencer.init({from:0, to: 123, folder:"img/action-two", baseName:"action-two-", ext:"jpg", direction:"-x", playMode:"mouse"});
    break;
}
document.getElementById("action-text").innerHTML = action;
function playVideo(){
	//window.location.href="/video";
	console.log("complete");
}
function animaCanvas(data){
	var i= data.actFm;
	Sequencer.nextImage();

	for (i; i <= 10; i++) {
		endsequence++;
		//Sequencer.nextImage();
	}

	if (endsequence>=24){
		playVideo();
	}

}
hammertime.on('panleft', function(ev) {
	for (var i = 0; i <= 10; i++) {
		endsequence++;
		Sequencer.nextImage();
		//canvasChange(i);
	}

	if (endsequence>=24){
		playVideo();
	}
});






