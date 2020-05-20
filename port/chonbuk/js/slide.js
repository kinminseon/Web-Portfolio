$(document).ready(function(){
	$('.con03_text').css('left',-300).each(function(index){
		$(this).attr('data-index',index);
	});
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		//alert(index);
		moveSlider(index);
	});
	function moveSlider(index){
		var willMoveLeft = -(index%3*453);
		$('.slider').animate({left:willMoveLeft},'slow');
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.con03_text[data-index='+index+']').show().animate({left:56},'slow');
		$('.con03_text[data-index!='+index+']').show().animate({left:-300},'slow');
	}
	var randomNumber = Math.round(Math.random()*1);
	moveSlider(randomNumber);
    
    //swiper slide
    var swiper = new Swiper('.swiper-container',{
        effect:'fade',
        loop:'true',
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
	
}); 










