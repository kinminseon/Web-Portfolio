$(document).ready(function(){
	//�˻�â ��������
	$('.search').each(function(){
		var search = this.defaultValue; 
		// search = �̸��� �Է����ּ���.
		// search = �޼����� �Է����ּ���.
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
	//�ؿ� ��������
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
	//����Ʈ �����ܿ� ���콺 ������
	$('#content2>ul>li').each(function(){
		var a = $(this);
		a.hover(function(){
			a.find('a').stop().animate({'margin-top':'-170px'},500)
		},function(){
			a.find('a').stop().animate({'margin-top':'0px'},500)
		});
	});
	
});



