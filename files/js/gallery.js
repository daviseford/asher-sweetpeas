$(document).ready(function(){
	
	/*$('#gallery img').mouseenter(function(){
		var degree = 10*(Math.random());
		var negative = Math.random();
		var addition = (negative>0.5)?"":"-";
		$(this).css("transform","rotate("+addition+degree+"deg)");

	});

	$('#gallery img').mouseleave(function(){
		var degree = 10*(Math.random());
		var negative = Math.random();
		var addition = (negative>0.5)?"":"-";
		$(this).css("transform","rotate("+addition+degree+"deg)");

	});*/
	$('#gallery img').mouseenter(function(){
		var degree = -10+20*(Math.random());
		$(this).rotate({animateTo:degree, duration:50});

	});

	$('#gallery img').mouseleave(function(){
		var degree = -10+20*(Math.random());
		$(this).rotate({animateTo:degree, duration:50});
	});

});