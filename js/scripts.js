function modalImg() {
	//Change modal body img to selected thumbnail img
	$('.main-img').mousedown(function() {
		console.log('click');
		var imgSrc = $(this).attr('src');
		console.log(imgSrc);
		$('#img-modal .modal-body').html('<img src="' + $(this).attr('src') + '" class="img-responsive">');
	});
}


$(document).ready(function() {

	modalImg();
	
	//Display thumbnail img in main img slot
	$('.thumb-img').mousedown(function() {
		$('.main-img-col').html('<img src="' + $(this).attr('src') + '" class="img-responsive main-img" data-toggle="modal" data-target="#img-modal">');
		modalImg();
	});

});
