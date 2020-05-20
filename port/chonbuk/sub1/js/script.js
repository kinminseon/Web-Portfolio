jQuery(document).ready(function(){
	//탭메뉴 jQuery
	$('.list01').show();
	$('.list02').hide();
	$('.list03').hide();
	$('.inter').addClass('on');
	
	$('.inter').click(function(){
		$('.list01').show();
		$('.list02').hide();
		$('.list03').hide();
		$('.inter').addClass('on');
		$('.gener').removeClass('on');
		$('.dent').removeClass('on');
	});
	$('.gener').click(function(){
		$('.list01').hide();
		$('.list02').show();
		$('.list03').hide();
		$('.inter').removeClass('on');
		$('.gener').addClass('on');
		$('.dent').removeClass('on');
	});
	$('.dent').click(function(){
		$('.list01').hide();
		$('.list02').hide();
		$('.list03').show();
		$('.inter').removeClass('on');
		$('.gener').removeClass('on');
		$('.dent').addClass('on');
	});
	//탭 메뉴 이미지 변경
	$('.inter>a>img').attr('src','images/tap_menu01_on.jpg');
	$('.tap_menu').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		var src_on = src_off.replace('_off','_on')
		$('<img />').attr('src',src_on);
		a.bind('mouseenter focus', function(){
			img.attr('src',src_on);
		});
		a.bind('mouseleave blur', function(){
			img.attr('src',src_off);
		});
		//bind()묶어주는거
	});
	
	//검색창 제이쿼리
	$('#search').each(function(){
		var search = this.defaultValue; 
		// search = 이름을 입력해주세요.
		// search = 메세지를 입력해주세요.
		var element = $(this);
		element.focus(function(){
			if(element.val()===search){
				element.val('');
				element.removeClass('search_text');
			}
		});
		element.blur(function(){
			if(element.val()===''){
				element.val(search);
				element.addClass('search_text');
			}
		});
		if(element.val()===search){
			element.addClass('search_text');
		}
	});
	//검색하기 라벨
	$('#search').on('focus',function(){
		$(this).prev().animate({'color':'#999','top':'-22px','left':'54px','font-size':'12px'},500);
	}).on('blur',function(){
		if($(this).val()=='') $(this).prev().animate({'color':'#666','top':'12px','left':'54px','font-size':'14px'},500);
	});
});