// Sequencer - A fast(?) fullscreen image-sequence player.
// (c) 2012-13
// See README.txt or visit github (link below) for details
//
// Author:
//      Andreas Gysin
//      ertdfgcvb.com
//      @andreasgysin
//
// Project page:
//      http://ertdfgcvb.com/sequencer
//      http://github.com/ertdfgcvb/Sequencer


// images are passed around per array indexes (id) this may change
var Sequencer = (function () {
		var current = -1;
		var images = [];
		var playInterval;
		var playDir = 1;
		var lastLoaded = -1;
		var contFrameInterval=0;
		var stopFrameInterval;
		var startMove=1;
		var endMove=0;
		var countMove=0;
		var maxCountMove=2;

		// configuration defaults
		var config = {
				folder              : "",           // folder containing the image sequence
				baseName            : "",           // a basename of the files, for example "DSC00"
				from                : 1,            // first image of the sequence, will be combined with the basename
				to                  : 10,           // last image of the sequence
				leadingZeroes       : 0,
				ext                 : "jpg",        // file extention, case sensitive
				step                : 1,            // increment: to load only even images use 2, etc
				bgColor             : "#FFFFFF",    // page background color
				scaleMode           : "cover",      // as in CSS3, can be: auto, cover, contain
				direction           : "y",          // mouse direction, can be x, -x, y, -y, applies only if playMode == "mouse"
				playMode            : "",      			// can be: mouse, loop, pong or none (in this case a nextImage() call has to be made somewhere
				playInterval        : 20,           // interval in milliseconds beteen each frame, applies only if playMode != "mouse"
				progressDiam        : "110",        // progress diameter
				progressFontFamily  : "stick",
				progressFontSize    : "38px",
				progressBgColor     : "#e53027",
				progressFgColor     : "#FFFFFF",
				progressMode        : "circle",     // can be: circle, bar, none
				progressHeight      : "5px",        // if progressMode == "bar"
				progressShowImages  : true,         // display images while loaded
				simultaneousLoads   : 4            // how many images to load simultaneously, browser limit is 4?
		};

		function init(customConfig){
				// config override
				for(prop in customConfig){
						config[prop] = customConfig[prop];
				}

				configureBody();
				Preloader.init(config, images, onImageLoaded, onPreloadComplete);

				window.addEventListener( 'resize', onWindowResize, false );
		}

		function onImageLoaded(e){
				if (e.id > lastLoaded && config.progressShowImages){ // to not have a back and forward hickup… but some images will be skipped
						showImage(e.id);
						lastLoaded = e.id;
				}
				showImage(0);
		}

		function onPreloadComplete(e){
				setPlayMode(config.playMode);
				play();
		}

		function setPlayMode(mode){
				stop();
				config.playMode = mode;
		}

		function play(){
				stop();
				if (config.playMode === 'mouse'){
						var disVideo = document.getElementById("box-action");
						disVideo.addEventListener('mousemove', onMouseMove, false);
						disVideo.ontouchmove = function(e){
								onMouseMove(e.touches[0]);
								return false;
						}
				} else if (config.playMode === 'loop' || config.playMode === 'pong') {
						playInterval = setInterval(nextImage, config.playInterval);
				}
		}

		function stop(){
				document.removeEventListener('mousemove', onMouseMove);
				if (playInterval) {
						clearInterval(playInterval);
						playInterval = null;
				}
		}

		function nextImage(interval){
			var nextId= (current >= images.length-1) ? 0 : ++current; //loop
			showImage(nextId+interval); 
		}

		function previousImage(interval){
			var previousId = (current <= 0) ? images.length-1 : --current; //loop
			showImage(previousId-interval); 
			
		}


		function toFrame(to,direction,interval){

				stopFrameInterval=(current <= to ) ? (to-current) : (current-to);

				var frameInterval = setInterval(function(){ 
					
					contFrameInterval++;

					switch(direction){
						case "right": nextImage(interval); break;
						case "left": previousImage(interval); break;
					}

					if (contFrameInterval == stopFrameInterval) {
						clearInterval(frameInterval);
						contFrameInterval=0;
					}

				}, 100);

		}

		function getCurrent(){
			return current;
		}

		function onMouseMove(e){
			console.log(e);
				var t = images.length;
				var m, w;
				if (config.direction == "x") {
						w = window.innerWidth;
						m = e.pageX;
				} else if (config.direction == "-x") {
						w = window.innerWidth;
						m = w - e.pageX - 1;
				} else if (config.direction == "y") {
						w = window.innerHeight;
						m = e.pageY;
				} else if (config.direction == "-y") {
						w = window.innerHeight;
						m = w - e.pageY - 1;
				}

				var id = Math.min(t, Math.max(0, Math.floor(m / w * t)));
				var widthVideo=document.getElementById("box-action").offsetWidth;
				if (id != current){
						showImage(id);
						current = id;
				}

				var withVideo = document.getElementById("box-action").offsetWidth;
				var halfVideo = (withVideo/2);
				var halfScreen = (w/2);
				var maxLetfVideo = (halfScreen - halfVideo + (halfVideo/2));
				var maxRightVideo = (halfScreen + halfVideo - (halfVideo/2));
				
				// Moviento hasta la izquierda
				if (m <= (maxLetfVideo) && endMove==1) {
					console.log();
					endMove = 0;
					startMove = 1;
				}
				
				// Moviento hasta la derecha
				if (m >= (maxRightVideo) && startMove==1) {
					startMove=0;
					endMove = 1;
					countMove++;
				}

				// Total de movimiento cumplidos - realiza acción
				if (countMove==maxCountMove) {	unlock();  }
		}

		function onWindowResize(){
				canvas.height = document.getElementById("box-action").offsetHeight;
				canvas.width = document.getElementById("box-action").offsetWidth;
				showImage(current);
		}

		function configureBody(){
				canvas = document.createElement('canvas');
				canvas.height = document.getElementById("box-action").offsetHeight;
				canvas.width = document.getElementById("box-action").offsetWidth;
				canvas.style.display = "block";
				context = canvas.getContext('2d');
				document.getElementById("box-action").appendChild(canvas);
		}

		function showImage(id){
				if (id >= 0 && id < images.length){
						var img = images[id];
						var ca = canvas.width / canvas.height;
						var ia = img.width / img.height;
						var iw, ih;

						if (config.scaleMode == "cover") {
								if (ca > ia) {
										iw = canvas.width;
										ih = iw / ia;
								} else {
										ih = canvas.height;
										iw = ih * ia;
								}
						} else if (config.scaleMode == "contain") {
								if (ca < ia) {
										iw = canvas.width;
										ih = iw / ia;
								} else {
										ih = canvas.height;
										iw = ih * ia;
								}
						} else if (config.scaleMode == "auto") {
								iw = img.width;
								ih = img.height;
						}

						var ox = canvas.width/2 - iw/2;
						var oy = canvas.height/2 - ih/2;
						context.drawImage(img, 0, 0, img.width, img.height, Math.round(ox), Math.round(oy), Math.round(iw), Math.round(ih));
						current = id;
				}
		}

		return {
				init : init,
				nextImage : nextImage,
				previousImage : previousImage,
				setPlayMode : setPlayMode,
				play : play,
				showImage : showImage,
				toFrame : toFrame,
				getCurrent : getCurrent,
				stop : stop
		};
})();

var Preloader = (function(){
		var progress;
		var bgbox;
		var queue;
		var images;
		var loaded = 0;
		var onImageLoadedCallback, onPreloadCompleteCallback; //needs a better way. Override?


		function init(config, arrayToPopulate, onImageLoaded, onPreloadComplete){

				images = arrayToPopulate; //the array that will be populated with the loaded images
				onImageLoadedCallback = onImageLoaded; //event functions… crappy way.
				onPreloadCompleteCallback = onPreloadComplete;

				var tot = Math.floor((config.to - config.from + 1) / config.step);
				queue = new Array(tot);
				//images = new Array(tot);

				buildProgress(config);

				for (var i=0; i<tot; i++){
						var num = config.from + i * config.step;
						if (config.leadingZeroes > 0) num = (1e15+num+"").slice(-config.leadingZeroes);
						var src = config.folder + "/" + config.baseName + num + "." + config.ext;
						queue[i] = {src : src, id : i}; //two distinct arrays just to keep a "clean" image list instead of a custom loaderObject list, maybe this approach is overcomplicated
						images[i] = new Image();
				}

				setTimeout(function(){ //give it a bit of breath… safari needs to need that.
						var num = Math.max(1, config.simultaneousLoads);
						for (var i=0; i<num; i++){
								loadNext();
						};
				}, 300);
		}



		function onPreloadComplete(e){
				//console.log(e.length + " images loaded.");
				if (typeof onPreloadCompleteCallback === 'function') onPreloadCompleteCallback(e); //needs absolutely a better way
		}

		function onImageLoaded(e){
				//console.log("loaded image [" + e.id + "]");
				if (typeof onImageLoadedCallback === 'function') onImageLoadedCallback(e); //needs absolutely a better way
		}

		function loadNext(){
				if (queue.length > 0){
						var o = queue.shift();
						images[o.id].src = o.src;
						//images[o.id].id = o.id; // UGLY HACK!
						images[o.id].onload = function(){
								var id = images.indexOf(this); //not the fastest way to get an id. should be stored in a property somewhere. loaderObject?
								onImageLoaded({img:this, id:id});
								if (progress) progress.update(loaded);
								loaded++;
								if (loaded == images.length ){
										removeProgress();
										onPreloadComplete({images:images, length:images.length});
								} else {
										loadNext();
								}
						}
				}
		}

		function buildProgress(config){

				bgbox = document.createElement('div');
				bgbox.style.width = "100%";
				bgbox.style.height = "100%";
				bgbox.style.backgroundColor = "#fff";
				bgbox.style.position = "absolute";
				bgbox.style.top = "0";
				bgbox.style.left = "0";
				bgbox.id = "bgbox";
				bgbox.style.zIndex = 40;
				document.getElementById("box-action").appendChild(bgbox);

				if (config.progressMode == "circle"){
						progress = document.createElement('div');
						progress.id = "progress";
						progress.style.width = config.progressDiam + "px";
						progress.style.height = config.progressDiam + "px";
						progress.style.lineHeight = config.progressDiam + "px";
						progress.style.textAlign = "center";
						progress.style.color = config.progressFgColor;
						progress.style.backgroundColor = config.progressBgColor;
						progress.style.borderRadius = config.progressDiam / 2 + "px";
						progress.style.position = "fixed";
						progress.style.left = "50%";
						progress.style.top = "50%";
						progress.style.marginTop = - config.progressDiam / 2 + "px";
						progress.style.marginLeft = - config.progressDiam / 2 + "px";
						progress.style.fontFamily = config.progressFontFamily;
						progress.style.fontSize = config.progressFontSize;
						progress.style.zIndex = 1000;
						progress.innerHTML = "loading";
						progress.update = function(num){
								var t = Math.floor((config.to - config.from + 1) / config.step);
								var p = Math.round(num / (config.to - config.from) * 100);
								progress.innerHTML = p+"%";
						}
						document.body.appendChild(progress);
				} else if (config.progressMode == "bar") {
						progress = document.createElement('div');
						progress.id = "progress";
						progress.style.width = "0%";
						progress.style.height = config.progressHeight + "px";
						progress.style.backgroundColor = config.progressBgColor;
						progress.style.position = "fixed";
						progress.style.left = "0";
						progress.style.height = config.progressHeight;
						progress.style.bottom = "0";
						progress.style.zIndex = 42;
						progress.update = function(num){
								var p = Math.round(num / (config.to - config.from) * 100);
								progress.style.width = p + "%";
						}
						document.body.appendChild(progress);
				}
		}

		function removeProgress(){
				if (progress) {
						$("#action").show();
						document.body.removeChild(progress);
						document.getElementById("box-action").removeChild(bgbox);
						progress = null;
				}
		}

		return {
				init : init,
				images : images
		};
})();
