$( ".bar" ).click(function() {
	  $('.menu > ul').toggleClass('active');
	});
	$( ".menu li i" ).click(function() {
	  $(this).toggleClass('active');
	  $(this).next().slideToggle(500);
	});