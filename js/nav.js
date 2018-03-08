//jQuery

$(document).ready(function(){
//    nav-li hover e
    var num;
    $('.nav-main>li[id]').hover(function(){
        /*下拉框出现*/
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        $('#box-'+num).stop().fadeIn(200);
    },function(){
        /*下拉框消失*/
        $('#box-'+num).stop().hide();
    });
//    hidden-box hover e
    $('.hidden-box').hover(function(){
        $(this).stop().show();
    },function(){
        $(this).stop().fadeOut(100);
    });
});
