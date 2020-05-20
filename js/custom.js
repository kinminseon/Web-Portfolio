$(function () {
   
    // ******* MAIN ******* 
    
    // 메뉴 클릭
    
    $('#nav_btn').click(function(){
        $(this).toggleClass('on');
        $(this).siblings().toggleClass('on');
        $(this).parent().next().toggleClass('on');
        $(this).children().toggleClass('on');
    });
   
    // 메뉴 클릭시 리스트 나오게
    
	$('#nav_btn').click(function(){
		$('#mb_nav').slideToggle();
	});
	
    // ******* PORTFOLIO ABOUT aa *******
    
    // 맨위로 가기 
   $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#top').fadeIn("fast");
        } else {
            $('#top').fadeOut("fast");
        }
    });
    $('#top').click(function () { 
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
    
    // 메뉴 스크롤
    
    $(window).on('scroll', function(){
        var sT = $(window).scrollTop();
        
        if(sT >= 100){
            $('header').addClass('plus',500),
            $('header h1').addClass('plus_h'),
            $('header nav').addClass('plus_h'),
            $('header #trigger').addClass('plus_t'),
            $('header #nav_btn').addClass('plus_t'),
            $('header span').eq(1).addClass('hidden_m');
            
        }else{
            $('header').removeClass('plus',500),
            $('header h1').removeClass('plus_h'),
            $('header nav').removeClass('plus_h'),
            $('header #trigger').removeClass('plus_t'),
            $('header #nav_btn').removeClass('plus_t'),
            $('header span').eq(1).removeClass('hidden_m');
        }
        
    });
    
    // 모바일 메뉴
    
    var trigger = $('#trigger');
    var menu = $('nav ul');
	$(trigger).on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass("on");
        menu.slideToggle();
    });
    $(window).resize(function () {
        var w = $(window).width();
        if (w > 1280 && menu.is(':hidden')) {
        menu.removeAttr('style');
        }
    });
    
    // 스크린스킬
    
    var isVisible = false;
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var aboutH = $('.about_h').height();
        if(scrollTop >= aboutH &&!isVisible){
            $('.bar').each(function(){
                $(this).find('.bar-inner').stop().animate({
                    width: $(this).attr('data-width')},1000);
            });
            isVisible=true;
        };
    });
    
		
    
});