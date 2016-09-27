var action="",fristframe=0,lastframe=123;

device="desktop";
switch(device) {
    case "phone-desktop":
    		$("#box").remove();
    		$("article").addClass(device);
				Sequencer.init({from:0, to: 123, folder:"img/action-two", baseName:"action-two-", ext:"jpg"});
    break;
    case "phone":
    		action="Desliza tu dedo izquierda o derecha";
				Sequencer.init({from:0, to: 123, folder:"img/action-two", baseName:"action-two-", ext:"jpg"});
    break;
    case "desktop":
    		action="Mover mouse izquierda o derecha";
				Sequencer.init({from:0, to: 123, folder:"img/action-two", baseName:"action-two-", ext:"jpg", direction:"x", playMode:"mouse"});
    break;
}

document.getElementById("action-text").innerHTML = action;

function playVideo(){
	//window.location.href="/video";
	console.log("complete");
}

function animaCanvas(data){
	var i= data.actFm;
	for (i; i <= 10; i++) {
		Sequencer.nextImage();
	}

}

function animate(percentage,fristframe,lastframe,direction){
	
	var framesmove=Math.round( ( (lastframe/4) * percentage ) /100 );
	console.log(framesmove);
	for (var i = 0; i <= framesmove ; i++) {

		if (direction=="right"){
			Sequencer.nextImage();
		}else if(direction=="left"){
			Sequencer.previousImage();
		}
		//canvasChange(i);
	}

}

animate(50,fristframe,lastframe,"right");
	





