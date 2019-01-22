$(function () {
	// 단체문의 팝업
	$(".popOpen").on('click', function () {

		var thisObj = $(this);
		//var popTop = thisObj.offset().top;
		var popTop = $(window).scrollTop() + 100;


		$('#contact-pop').css("top", popTop);
		$('#contact-pop, #contact-bg').show();

	});
	
	/*페이지 Dep2 클릭 기능*/
	$('#gnb-header .gnbDep2 a').bind('click', function (event) {
		var $_anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($_anchor.attr('href')).offset().top - 150
		}, 800);
		event.preventDefault();
	});
	$('#main-contents .menu_tap a').bind('click', function (event) {
		var $_anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($_anchor.attr('href')).offset().top - 80
		}, 800);
		event.preventDefault();
	});

	// 글로벌 네비게이션
	var gnbHt = $("#gnb-header").height();
	$(window).on('scroll', function () {
		var scr = $(window).scrollTop();
		var setTop = $("#gnb-header").offset().top + gnbHt;

		if (scr < setTop) {
			$("#gnb-header").removeClass('on');
		}
		if (scr >= setTop) {
			$("#gnb-header").addClass('on');
		}
	});
	
	// 모바일 네비게이션
	$('#navTab-m').on('click', function () {
		$(this).toggleClass('active');
		$('#gNav-m').toggleClass('active');
	});
	
	//FAQ 노출, 질문 펼치기 및 닫기
	$("#faq-a").on('click', function() {
		$('#bs-wrap').css({
			"position": "fixed"
		});
		$("#faqWrap-back").fadeIn();
		$(this).addClass('on');
	});
	$("#faqWrap .i-x").on('click', function() {
		$('#bs-wrap').css({
			"position": "relative"
		});
		$("#faqWrap-back").hide();
		$("#faq-a").removeClass('on');
	});
	$("#faqWrap .d1").click(function() {
		$(this).next().slideToggle('fast');
		 $(this).toggleClass('on');
	});
	// 모바일
	$("#faq .f_q").on("click", function () {
		$(this).next().slideToggle("fast");
	});
	$("#wrap .wrapperin .btn-area .btn-a").on("click", function () {
		$('#faq li').show();
	});
});
	
function toggleOn(itm, type) {
	if (type == "sib") {
		$(itm).on('click', function () {
			var idx = $(this).index();
			
			$(this).toggleClass('on').siblings().removeClass('on');
			//console.log('on');
		});
	} else {
		$(itm).on('click', function () {
			var idx = $(this).index();
			$(this).toggleClass('on');
		});
	}
}

