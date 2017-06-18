/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
$(document).ready(function(){

	// console.log("JavaScript is amazing!");
	// console.log("Javascript is amazing");

	$('.type_it').typeIt({
		strings: ["This is a string","This is a string","This is a string"],
		speed:150,
		autoStart:true,
		breakLines:false
	});

	//Everytime the window is scrolled..Fade the about section
	$(window).scroll(function(){

		//Check the location of the declared element
		$('.hide_me').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			// if the object is completely visible in the window, fade it in
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({'opacity': '1' }, 1500 );
			}
		});
	});
	// $(window).scroll(function(){

	// 	//Check the location of the declared element
	// 	$('.zoom').each(function(){
	// 		var bottom_of_object = $(this).position().top + 20; //+ $(this).outerHeight()
	// 		var bottom_of_window = $(window).scrollTop() + $(window).height();

	// 		// if the object is completely visible in the window, fade it in
	// 		if (bottom_of_window > bottom_of_object) {
	// 			$(this).animate(1000).addClass("w3-container w3-center w3-animate-zoom");
	// 		}
	// 	});
	// });

	var poptext = "#poptext";
	var poptext2 = "#poptext2";
	var bounce = "#bounce";
	var bounce2 = "#bounce2";
	var box = "#box";
	var box2 = "#box2";
	var clicked = true;
	var clicked2 = true;

		$(poptext).click(function () {

				$(poptext).toggleClass("highlight");
				
				$(box).animate({
					height: 'toggle',
					opacity: 'toggle',
					width: 200
				}, 500);
				if (clicked) {
					$(bounce).removeClass("arrow bounce");
					clicked = false;
					return;
				}
				if (!clicked) {
					$(bounce).addClass("arrow bounce");
					clicked = true;
				}
			});
	
		$(poptext2).click(function () {

				$(poptext2).toggleClass("highlight");
				$(box2).animate({
					height: 'toggle',
					opacity: 'toggle',
					width: 200
				}, 500);
				if (clicked2) {
					$(bounce2).removeClass("arrow bounce");
					clicked2 = false;
					return;
				}
				if (!clicked2) {
					$(bounce2).addClass("arrow bounce");
					clicked2 = true;
				}
			});
	
});
