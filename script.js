$(function(){
    $('.toggle-btn').click(function(){
        if($('#header-box').hasClass('opne')){
            $('#header-box').removeClass('opne');
        }else{
            $('#header-box').addClass('opne');
        }
    });
    $('#mask').click(function(){
        $('#header-box').removeClass('opne');
    });
});