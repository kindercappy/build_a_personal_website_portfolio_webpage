/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
$(document).ready(function(){

	// console.log("JavaScript is amazing!");
	// console.log("Javascript is amazing");
	
	  $("nav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      	event.preventDefault();

	      // Store hash
	      	var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      	$('html, body').animate({
	        	scrollTop: $(hash).offset().top - 170
	      	}, 1500, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        	window.location.hash = hash- 120;
	      	});
	    } // End if
  	});

	  //type it plugin
	$('.type_it').typeIt({
		strings: ["Hi, I am Kinder.","I believe a great design can make a good idea even better.","I create websites that have both:",["BEAUTY and BRAIN."]],
		speed:150,
		autoStart:true,
		breakLines:true
	});

	//Everytime the window is scrolled..Fade the about section
	$(window).scroll(function(){

		//Check the location of the declared element
		$('.hide_me').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			// if the object is completely visible in the window, fade it in
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({'opacity': '1' }, 2000 );
			}
		});
	});

	var poptext = "#poptext";
	var poptext2 = "#poptext2";
	var poptext3 = "#poptext3";
	var bounce = "#bounce";
	var bounce2 = "#bounce2";
	var bounce3 = "#bounce3";
	var box = "#box";
	var box2 = "#box2";
	var box3 = "#box3";
	var clicked = true;
	var clicked2 = true;
	var clicked3 = true;

		//portfolio description
		$(poptext).click(function () {

				$(poptext).toggleClass("highlight");
				$(box).animate({
					height: 'toggle',
					opacity: 'toggle',
					width: 'toggle'
				}, 500);
				if (clicked) {
					$(bounce).addClass("arrow_invisible");
					clicked = false;
					return;
				}
				if (!clicked) {
					$(bounce).removeClass("arrow_invisible");
					clicked = true;
				}
			});
	
		$(poptext2).click(function () {

				$(poptext2).toggleClass("highlight");
				$(box2).animate({
					height: 'toggle',
					opacity: 'toggle',
					width: 'toggle'
				}, 500);
				if (clicked2) {
					$(bounce2).addClass("arrow_invisible");
					clicked2 = false;
					return;
				}
				if (!clicked2) {
					$(bounce2).removeClass("arrow_invisible");
					clicked2 = true;
				}
			});
		$(poptext3).click(function () {

				$(poptext3).toggleClass("highlight");
				$(box3).animate({
					height: 'toggle',
					opacity: 'toggle',
					width: 'toggle'
				}, 500);
				if (clicked3) {
					$(bounce3).addClass("arrow_invisible");
					clicked3 = false;
					return;
				}
				if (!clicked3) {
					$(bounce3).removeClass("arrow_invisible");
					clicked3 = true;
				}
			});

		//transition effect for portfolio images
		$('.img_transition').hover(function() {
        $(".img_transition").addClass('transition');
    
    	}, function() {
        	$(".img_transition").removeClass('transition');
    	});

    	$('.img_transition2').hover(function() {
        $(".img_transition2").addClass('transition');
    
    	}, function() {
        	$(".img_transition2").removeClass('transition');
    	});
    	$('.img_transition3').hover(function() {
        $(".img_transition3").addClass('transition');
    
    	}, function() {
        	$(".img_transition3").removeClass('transition');
    	});
    // $(window).resize(function() {
    	var windowsize = $(window).width();
    	

    checkWidth();
    $(window).resize(checkWidth);
    $(window).resize(console.log(windowsize))
});

    function checkWidth(){
    	if ($(window).width() < 767) {
		    	$(".nav-link").click(function (event) {
		        	var clickover = $(event.target);
		        	var _opened = $(".navbar-collapse").hasClass("navbar-collapse");
		        	if (_opened === true && !clickover.hasClass("navbar-toggler")) {
		        	    $("button.navbar-toggler").click();
		        	}
		   	 	});
    	}
    }

