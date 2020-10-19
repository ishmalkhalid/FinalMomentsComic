$(".coffee").click(function(){
	$("<audio></audio>").attr({ 
		'src':'sounds/coffee.mp3', 
		'volume':0.4,
		'autoplay':'autoplay'
	}).appendTo(".coffee");
});

$(".office").click(function(){
	$("<audio></audio>").attr({ 
		'src':'sounds/office.mp3', 
		'volume':0.4,
		'autoplay':'autoplay'
	}).appendTo(".office");
});

$(".ambulance").click(function(){
	$("<audio></audio>").attr({ 
		'src':'sounds/ambulance.mp3', 
		'volume':0.4,
		'autoplay':'autoplay'
	}).appendTo(".ambulance");
});

$(".phone").click(function(){
	$("<audio></audio>").attr({ 
		'src':'sounds/phone.mp3', 
		'volume':0.4,
		'autoplay':'autoplay'
	}).appendTo(".phone");
});