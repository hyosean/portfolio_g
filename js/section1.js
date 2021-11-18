$(function(){	
	//창의 높이로 섹션1의 높이를 설정한다.	
	var winH = 0;
	var winW = 0;
	
	
		resizeFn();				   //최초 한번실행1
		setTimeout(resizeFn,100);  //최초 한번실행2

		//창크기에 따른 반응형
		$(window).resize(function(){
			resizeFn();
		});

		function resizeFn(){
			winW = $(window).innerWidth();
			$('.section1-video').css({left:(winW-1920)/2});
			
			
			winH = $(window).innerHeight();
			$('#section1').css({height: winH });
		}	
	
}); //section1.js