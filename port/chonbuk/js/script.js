$(document).ready(function(){
	//검색창 제이쿼리
	$('.search').each(function(){
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
	//밑에 공지사항
	$('.con4_box1').each(function(){
		var box = $(this);
		var tit = box.find('.tit');
		function closeAll(){
			box.find('li').removeClass('on');
		}
		tit.click(function(){
			closeAll();
			$(this).parent().addClass('on');
		});
	});
	$('.con4_box2').each(function(){
		var box = $(this);
		var tit = box.find('.tit');
		function closeAll(){
			box.find('li').removeClass('on');
		}
		tit.click(function(){
			closeAll();
			$(this).parent().addClass('on');
		});
	});
	$('.con4_box4').each(function(){
		var box = $(this);
		var tit = box.find('.tit');
		function closeAll(){
			box.find('li').removeClass('on');
		}
		tit.click(function(){
			closeAll();
			$(this).parent().addClass('on');
		});
	});
	//doctor about
	var interval = 3000;
	$('.con03_02').each(function(){
		var timer;
		var container = $(this);
		function switchImg(){
			var anchors = container.find('a');
			var first = anchors.eq(0);
			var second = anchors.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn();
		}
		function startTimer(){
			timer=setInterval(switchImg,interval);
		}
		function stopTimer(){
			clearInterval(timer);
		}
		startTimer();
		container.find('a').hover(stopTimer,startTimer);
	});
	//리스트 아이콘에 마우스 오버시
	$('#content2>ul>li').each(function(){
		var a = $(this);
		a.hover(function(){
			a.find('a').stop().animate({'margin-top':'-170px'},500)
		},function(){
			a.find('a').stop().animate({'margin-top':'0px'},500)
		});
	});
	
});



