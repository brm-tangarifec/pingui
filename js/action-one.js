var action="";

switch(device) {
   case "phone-desktop":
			action="gira tu celular 360 grados";
			Sequencer.init({from:0, to: 162, folder:"img/action-one", baseName:"action-one-", ext:"jpg"});
	break;
	case "mobile":
			action="gira tu celular 360 grados";
			Sequencer.init({from:0, to: 162, folder:"img/action-one", baseName:"action-one-", ext:"jpg"});
	break;
	case "desktop":
			action="Mover mouse arriba o abajo";
			Sequencer.init({from:0, to: 162, folder:"img/action-one", baseName:"action-one-", ext:"jpg",direction:"y",playMode:"mouse"});
	break;
}

document.getElementById("action-text").innerHTML = action;
