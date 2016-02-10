function swap(elem1, elem2){
	$("."+elem2).animate({ 
		"marginLeft":"400px"
		}, 500, function(e){

			$("."+elem2).css({
				"-webkit-filter": "blur("+0+"px)",
				"filter": "blur("+0+"px)"
			});
			$("."+elem2).css("z-index", "4");

			$("."+elem1).css({
				"-webkit-filter": "blur("+1+"px)",
				"filter": "blur("+1+"px)"
			});
			$("."+elem1).css("z-index", "3");

			$("."+elem2).animate({
				"marginLeft":"0px"
				},500
			);
		}
	);
}

function switchFocus(windowArr, elem){
	console.log("got here");
	$("."+elem).css({
		//blur
		//"-webkit-filter": "blur("+0+"px)",
		//"filter": "blur("+0+"px)", 

		"border-color":"#B40404", 		//border change
		"border-width":"3px",

		"z-index": "1"		//depth change
	});

	$("."+windowArr[0]).css({
		//blur
		//"-webkit-filter": "blur("+(.75)+"px)",
		//"filter": "blur("+(.75)+"px)",
		

		"border-color":"black", 		//border change
		"border-width":"2px",
		
		"z-index": "0"		//depth change
	});
	windowArr.move(windowArr.indexOf(elem));

}


function init(){

	var windowArr = ["one", "two"];

	var inFocus = windowArr[0];
	$(".one").click(function(){
		if (windowArr[0] != "one"){
			switchFocus(windowArr, "one");
		}
		$(".one").draggable();
		//swap("one", "two");
	});
	$(".two").click(function(){
		if (windowArr[0] != "two"){
			switchFocus(windowArr, "two");
		}
		$(".two").draggable();
		//swap("two", "one");
	});

	
	$(".navmenu li").click(function(){
		var selected = $(this).attr("id");
		if (windowArr[0] != selected && selected != "broadstreet"){
			switchFocus(windowArr, selected);
		}	
	});
	
	
/*
	$("div").on('click', function(){
		var selected = $(this).attr("class");
		console.log(selected);
		if (inFocus != selected && selected == "one"){
			switchFocus("one", "two");
			inFocus = selected;
		}
		if (inFocus != selected && selected == "two"){
			switchFocus("two", "one");
			inFocus = selected;
		}

		if (selected != "background"){
			
		}
	});
*/

/*

	$(document).click(function() {
		$( ".content" ).fadeToggle( 3500, function() {
    // Animation complete
  		});
	});	

*/
	var isBlurred = false;
	var blurredVal = 0;

	$(".background").click(function(){
		console.log("clicked");
		//blur the background
		if (isBlurred == false){
			isBlurred = true;
			$({blurRadius: blurredVal}).animate({blurRadius: blurredVal + 7}, {
		        duration: 1000,
		        step: function() {
		            $('.background').css({
		                "-webkit-filter": "blur("+this.blurRadius+"px)",
		                "filter": "blur("+this.blurRadius+"px)"
		            });
		           /* $(".content").css({
		            	"-webkit-filter": "blur("+(this.blurRadius-4)+"px)",
		                "filter": "blur("+(this.blurRadius-4)+"px)"
		            });*/
		        blurredVal = this.blurRadius;
		        }
		    });
		}
		else{
			isBlurred = false;
			$({blurRadius: blurredVal}).animate({blurRadius:blurredVal - 7}, {
		        duration: 1000,
		        step: function() {
		            $('.background').css({
		                "-webkit-filter": "blur("+this.blurRadius+"px)",
		                "filter": "blur("+this.blurRadius+"px)"
		            });
		           /*  $('.content').css({
		                "-webkit-filter": "blur("+(this.blurRadius-4)+"px)",
		                "filter": "blur("+(this.blurRadius-4)+"px)"
		            });*/
		        blurredVal = this.blurRadius;
		        }
		    });
		}
	    
	});

}
onload=init;


Array.prototype.move = function (oldIndex) {
    if (0 >= this.length) {
        var i = 0 - this.length;
        while ((i--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(0, 0, this.splice(oldIndex, 1)[0]);
};