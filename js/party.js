//jQuery

$(document).ready(function(){
	var bgcolor;
	
	$(function(){
		//initial video page
		$('#case-1').css('background', '#AD5A5A');
		$('.rightcontent').hide();
        $('#videocase-1').show();
	});
	
	$('.videomenu').hover(function(){
        //change menu color
		bgcolor = $(this).css('background');
		$(this).css('background', '#AD5A5A');
    },function(){
		$(this).css('background', bgcolor);
	});
    
	$('.videomenu').click(function(){
        //choose video page
        var Obj = $(this).attr('id');
        var num = Obj.substring(5, Obj.length);
		$('.videomenu').css('background', '#644444');
		$(this).css('background', '#AD5A5A');
		bgcolor = $(this).css('background');
		$('.rightcontent').stop().hide();
        $('#videocase-'+num).stop().show();
    });
	
	//$('.videoblock').hover(function(){
	//	$(this).find('div').stop().fadeIn(300);
	//},function(){
	//	$(this).find('div').stop().hide();
	//});
});
