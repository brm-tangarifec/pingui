$(function(){  
    var red = document.getElementById("red"),
        blue = document.getElementById("blue");
    
    //jquery.hammer.js
    // $(red).hammer().on("swipe", function(event) {
    //     if(event.gesture.direction === "right") {
    //         $(this).find(".color").animate({left: "+=100"}, 500);
    //     } else if(event.gesture.direction === "left") {
    //         $(this).find(".color").animate({left: "-=100"}, 500);
    //     }
    //     $("#event").text(event.gesture.direction);
    // });
    
    //hammer.js
    
    //Swipe
    Hammer(red).on("swipeleft", function() {
        $(this).find(".color").animate({left: "-=100"}, 500);
        $("#event").text("swipe left");
    });
    
    Hammer(red).on("swiperight", function() {
        $(this).find(".color").animate({left: "+=100"}, 500);
        $("#event").text("swipe right");
    });
    

    // Drag
    var element = $('.blueColor').get(0);
    Hammer(blue).on("pan", function(e) {
      
       var tapX, tapY;
            tapX = e.center.x;
            tapY = e.center.y;
            console.log(tapX + ' --- ' + tapY);

            element.style.left = tapX + "px";
            element.style.top = tapY + "px";
        console.log(event);
    });
    
   
});

// jquery.hammer.js
(function($, Hammer, dataAttr) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data(dataAttr)) {
            $el.data(dataAttr, new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            jQuery(this.element).triggerHandler({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
})(jQuery, Hammer, "hammer");