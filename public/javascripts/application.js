var parallaxIt = function() {
	var idsToMove = [
		'mountains2'
	];
	
	$(window).mousemove(function(event) {
		var xCenter = $(this).width() / 2,
				x = event.clientX,
				xDelta = xCenter - x;
		
		console.log(idsToMove);
		_.each(idsToMove, function(id) {
			console.log("moving " + id + " " + xDelta);
			$(id).animate({
				left+= xDelta
			});
		});
	});
}

$(document).ready(function() {
	//$('#parallax').jparallax({yparallax:false,xtravel:0.3});
	
	parallaxIt();
});