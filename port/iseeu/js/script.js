jQuery(document).ready(function(){
			//Initialize Swiper
	var swiper_auto = new Swiper('#top_auto .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0, <!-- marginright -->
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
		loop: true
    });

	var swiper_bestlist = new Swiper('#info .swiper-container', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 20,
        freeMode: true,
		loop: true
    });	


	var swiper_bestlist = new Swiper('#around .swiper-container', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 20,
        freeMode: true,
		loop: true
    });	
	
	//식단표
	/* $('#content_left a').lightBox();  */
	$('.picture a').lightBox({
		overlayBgColor: '#000000',
		overlayOpacity: 0.8,
		containerResizeSpeed: 400
	}); 
});
