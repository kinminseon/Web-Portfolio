$(document).ready(function(){  	
	$('.mo_btn').on('click',function(){
		$('#gnbMo').fadeIn();
		return false;
	});
	$('#gnbMo>a').on('click',function(){
		$('#gnbMo').fadeOut();
		return false;
	});
});

















