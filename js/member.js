//jQuery

$(document).ready(function(){

	$('.peopleblock').hover(function(){
		$(this).find('div').stop().fadeIn(300);
	},function(){
		$(this).find('div').stop().hide();
	});
});
