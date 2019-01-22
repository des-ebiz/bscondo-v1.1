$(function() {
	// 슬라이더
	$("[id*=bxS-]").bxSlider({
		auto:true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/btn_prev2.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/btn_next2.png" alt="다음">'
	});
});