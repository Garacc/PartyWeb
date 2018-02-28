//jQuery

$(document).ready(function(){
	var bgcolor;
	
	$(function(){
		//initial video page
		$('#case-1').css('background', '#611111');
		$('.rightcontent').hide();
        $('#videocase-1').show();
	});
	
	$('.videomenu').hover(function(){
        //change menu color
		bgcolor = $(this).css('background');
		$(this).css('background', '#611111');
    },function(){
		$(this).css('background', bgcolor);
	});
    
	$('.videomenu').click(function(){
        //choose video page
        var Obj = $(this).attr('id');
        var num = Obj.substring(5, Obj.length);
		$('.videomenu').css('background', '#612221');
		$(this).css('background', '#611111');
		bgcolor = $(this).css('background');
		$('.rightcontent').stop().hide();
        $('#videocase-'+num).stop().show();
    });
	
	$('.videoblock').hover(function(){
		$(this).find('div').stop().fadeIn(300);
	},function(){
		$(this).find('div').stop().hide();
	});
});
