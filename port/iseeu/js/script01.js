jQuery(document).ready(function(){
	
	// index01 : 검색 
	$('.search_img').toggle(function(){
		$('.search_content').animate({marginTop:'42px',opacity:1},500);
	},function(){ 
		$('.search_content').animate({marginTop:'-100px',opacity:0},500);
	});

	
	// 주소창이 없어지는 스크립트
	// <![CDATA[
		try {
			window.addEventListener('load', function() {
				setTimeout(scrollTo, 0, 0, 1); 
			}, false);
		} catch(e) {}
	// ]]>
	
	// 기본 가이드 텍스트
	var guideClass = 'guide'; 
	$('.guideText').each(function(){ 
		var guideText = this.defaultValue; 
		var element = $(this);

		element.focus(function(){  
			if( element.val() === guideText ){ 
				element.val('');
				element.removeClass(guideClass);
			} 
		});
		element.blur(function(){  
			if( element.val() === '' ){  
				element.val(guideText);
				element.addClass(guideClass);
			} 
		});
		
		if(element.val() === guideText){
			element.addClass(guideClass); 
		}
	});
	
	// index01 : + 버튼 클릭시
	$('.menu_bar_btn3').click(function(e){
		e.preventDefault();
		$('div.dim').addClass('ani');
		window.scrollTo(0,0);
		e.stopPropagation();
		return false;
	});
	$('.submit1_1').click(function(e){
		e.preventDefault();
		$('div.dim').removeClass('ani');
	});
	$('.submit').click(function(e){
		e.preventDefault();
		$('div.dim').removeClass('ani');
		
	});
	
		// index01 : +버튼 클릭시 나오는 리스트추가 화면에서 리스트 하단 + 버튼 클릭시
		$('p.add_option > img').click(function(){
			$('p.add_option').slideUp();
		});
	
	
	
	// day_list 클릭시
	/* var eq_i = $('#container div').index();
	$('.day_list').each(function(){
		$(this).click(function(e){
			e.preventDefault();
			alert(eq_i);
		//	$('div.dim'+eq(eq_i)+'.dim_com').addClass('ani_com');
		});
	}); */
	
	
	$('.list1').click(function(e){
		e.preventDefault();
		$('div.dim1.dim_com').addClass('ani_com');
		
	});
	
	$('.list2').click(function(e){
		e.preventDefault();
		$('div.dim2.dim_com').addClass('ani_com');
	});
	
	$('.list3').click(function(e){
		e.preventDefault();
		$('div.dim3.dim_com').addClass('ani_com');
	});
	
	$('.list4').click(function(e){
		e.preventDefault();
		$('div.dim4.dim_com').addClass('ani_com');
	});
	
	$('.list5').click(function(e){
		e.preventDefault();
		$('div.dim5.dim_com').addClass('ani_com');
	});
	
	$('.list6').click(function(e){
		e.preventDefault();
		$('div.dim6.dim_com').addClass('ani_com');
	});
	
	
	$('.submit2').click(function(e){
		e.preventDefault();
		$('div.dim_com').removeClass('ani_com');
	});
	$('.submit1').click(function(e){
		e.preventDefault();
		$('div.dim_com').removeClass('ani_com');
	});
	
	
	var clicked = sessionStorage.getItem('clicked');
	if(clicked){
		$('#onboarding').remove();
		}
	$('#onboarding').click(function(){
			$('#onboarding').stop(true,true).animate({'margin-top':'0px'},500, 
				function(){
					$('#onboarding').remove();
				});
			sessionStorage.setItem('clicked', true );
	});
	
});
