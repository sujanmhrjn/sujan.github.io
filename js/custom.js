$(function(){
	var headerHeight=$(".header").outerHeight();
	$("body").css({
		'padding-top':headerHeight
	})
	$(".nav li:not(:first-child)").find("a").on("click",function(e){
		$("html,body").animate({
			'scrollTop':$($(this).attr("href")).offset().top
		},1000);
		e.preventDefault();
	});


	$(".nav li:first-child a").click(function(){
		$("html,body").animate({
			'scrollTop':0
		},1000);
		e.preventDefault();
	});

	$(".banner .btn").on("click",function(){
		$(this).parent().find("p").slideToggle(200);
	});

});	