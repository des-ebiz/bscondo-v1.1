$(function() {
	// 슬라이더
	$("#main-contents .bxS").each(function() {
		$_bxP = $(this).next();
		$(this).bxSlider({
			mode: 'fade',
			pagerCustom: $_bxP,
			auto:true,
			speed: 500,
			duration: 5000,
			prevText: '<img src="http://img.bscondo.co.kr/prevBtn.png" alt="이전">',
			nextText: '<img src="http://img.bscondo.co.kr/nextBtn.png" alt="다음">'
		});
	});
	
//	$("#main-contents > div").eq(0).siblings().hide();
	// Tab기능
	/*$("#gnb-dep2 > li").on('click', function() {
		var idx = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$("#main-contents > div").eq(idx).show().siblings().hide();				   
	});
	*/
	
});