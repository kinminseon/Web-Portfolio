jQuery(document).ready(function(){
	//top banner 버튼 누르면
	toggle = true;
	$('.toggle_btn').click(function(){
		if(toggle){
			$(this).find('img').attr('src','images/open.png');
			$(this).find('img').attr('alt','퀵버튼 열기');
			$(this).find('span.tit').text('Open');
			$(this).prev().stop().slideUp(500,function(){toggle=false;});
		}else{
			//$(this).removeClass('top_open');
			$(this).find('img').attr('src','images/close.png');
			$(this).find('img').attr('alt','퀵버튼 닫기');
			$(this).find('span.tit').text('Close');
			$(this).prev().stop().slideDown(500,function(){toggle=true;});
			
		}
	});
});