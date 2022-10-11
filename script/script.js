$(document).ready(function(){

    $('#scroll_top').click(function() {
        $('html, body').animate({scrollTop:0},300)
    })
    $('#scroll_bottom').click(function() {
        $('html, body').animate({scrollTop:6000},300)
    })
    // #pupup_text>span을 클릭하면 #pupup 가 꺼져라
    $('#popup_text>span').click(function(){
        $('#popup').css({"display":"none"})
    })
    $('#gnb>li').mouseenter(function(){
        $(this).children('.sub').stop().show()
    })
    $('#gnb>li').mouseleave(function(){
        $(this).children('.sub').stop().hide()
    })
})