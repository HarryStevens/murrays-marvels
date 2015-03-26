function modalImg() {
	//Change modal body img to selected thumbnail img
	$('.main-img').mousedown(function() {
		console.log('click');
		var imgSrc = $(this).attr('src');
		console.log(imgSrc);
		$('#img-modal .modal-body').html('<img src="' + $(this).attr('src') + '" class="img-responsive">');
	});
}

//auto scroller
function goToByScroll(id) {
	$('html,body').animate({
		scrollTop : $(id).offset().top
	}, 'slow');
}


$(document).ready(function() {

	modalImg();

	//Display thumbnail img in main img slot
	$('.thumb-img').mousedown(function() {
		$('.main-img-col').html('<img src="' + $(this).attr('src') + '" class="img-responsive main-img" data-toggle="modal" data-target="#img-modal">');
		modalImg();
	});

	//calc window height
	var windowHeight = $(window).height();

	//calc .welcome height and padding-top
	$('.welcome').css({
		'height' : windowHeight,
		'padding-top' : windowHeight / 3
	});

	/*
	//calc side navbar data-offset-top
	$('.sidenav .offset').attr('data-offset-top', windowHeight - 50);
	*/

	/*
	//add border bottom to nav on page scroll and resize fonts
	$(window).scroll(function() {
		if ($(window).scrollTop() > windowHeight - 50) {
			$('.navbar-default').css({
				'border-bottom' : '1px solid #E7E7E7'
			});
			$('.navbar-brand').css({
				'font-size' : '30px'
			});
		} else {
			$('.navbar-default').css({
				'border-bottom' : '0px'
			});
			$('.navbar-brand').css({
				'font-size' : '40px'
			});
		}
	});
	*/

	//calc chev position
	$('.chev').css('margin-top', (windowHeight / 6));

	//auto scroll to sections
	$('.just-the-letter').click(function() {
		goToByScroll($(this).attr('href'));
		return false;
	});
	$('.navbar a').click(function() {
		goToByScroll($(this).attr('href'));
		return false;
	});

});
