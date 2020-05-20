jQuery(document).ready(function(){
	//검색창 제이쿼리
	$('.input').each(function(){
		var input = this.defaultValue; 
		// input = 이름을 입력해주세요.
		// input = 메세지를 입력해주세요.
		var element = $(this);
		element.focus(function(){
			if(element.val()===input){
				element.val('');
				element.removeClass('input_text');
			}
		});
		element.blur(function(){
			if(element.val()===''){
				element.val(input);
				element.addClass('input_text');
			}
		});
		if(element.val()===input){
			element.addClass('input_text');
		}
	});
});