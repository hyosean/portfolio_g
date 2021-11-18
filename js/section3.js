$(function(){
	var cnt = 0; //클릭시 1식증가 변수
	//뷰박스 너비를 반응형 너비로
	//슬라이드 이미지 1개의 너비
	var imgW = 0;
	var arrowTop = 0;
	var n = 3;  //한화면의 슬라이드 이미지 3개 기본값  
	var sn = 9; //둥근버튼 갯수 기본값 9개 
	var txt = ''; //둥근버튼 태그 저장 변수
	
		responseFn();
		setTimeout(responseFn, 100);
	
	function responseFn(z){
		
		if( $(window).innerWidth() > 1300 ){ //1300초과인 경우 모두 
			n = 3;	
		}
		else if( $(window).innerWidth() > 800 ){ //801 ~ 1300픽셀 범위인 경우
			n = 2;
		}
		else{  //800픽셀 이하인 경우
			n = 1;
			
		}
		
		sn = parseInt( $('.section3-slide-wrap>li').length/n+0.9 );
		for(i=0; i<sn; i++){
			txt += "<li><a href='javascript:' class='navBtn blind'>navBtn</a></li>";
		}
		$('.navBtn-wrap').html( txt );
		txt = '';  //초기화 계속 누적되는걸 지운다.
		$('.navBtn').eq(0).addClass('addNavBtn');	
		
		
		if( $(window).innerWidth() > 800 ){ //800px 초과이면 여백 좌측50  우측10
			imgW = ($('#section3').innerWidth()-60)/n; //슬라이드 이미지1개 너비
		}
		else{  ///800px 이하이면
			imgW = ($('#section3').innerWidth()-0)/n; //슬라이드 이미지1개 너비
		}
		arrowTop = ($('.slide-img-wrap').innerHeight()-105)/2; //화살버튼 탑값 수직 가운데
		$('.section3-slide-wrap').css({width: imgW*27 });  //슬라이드 전체너비
		$('.section3-slide-wrap>li').css({width: imgW });  //슬라이드 이미지1개 너비
		$('.arrow-left-wrap, .arrow-right-wrap').css({top: arrowTop });
		
		//클릭 이벤트 슬라이드 이동
		$('.section3-slide-wrap').stop().animate({left: (-(imgW*n)*cnt) },z,'easeInOutQuart');
	}	
	
	//반응형
	$(window).resize(function(){
		responseFn(0);
	});
	
	
	//터치이벤트 스와이프 left 다음슬라이드(nextSlide)
	$('.section3-slide-wrap').on({
		swipeleft: function(){//우측에서 좌측으로 터치이벤트
			cnt++;
			if( cnt > sn-1 ){
				cnt=sn-1;
			}
			else{
				
				responseFn(600);
				
				$('.navBtn').removeClass('addNavBtn');
				$('.navBtn').eq(cnt).addClass('addNavBtn');
			}
		},
		swiperight:	function(){ //좌측에서 우측으로 터치이벤트
			cnt--;
			if( cnt < 0 ){
				cnt=0;
			}
			else{
				
				responseFn(600);
				
				$('.navBtn').removeClass('addNavBtn');
				$('.navBtn').eq(cnt).addClass('addNavBtn');
			}
		}
	});
	
	
	
	
	//우측화살버튼 클릭시 한화면의 슬라이드가 우측에서 좌측으로 이동하는 애니메이션
	//다음슬라이드(nextSlide)
	$('.arrow-rightBtn').on({
		click:	function(){
			cnt++;//cnt=cnt+1; ==  cnt+=1;  == cnt++;  1 2 3 4 5 6 7 8 9
			if( cnt > sn-1 ){  //9 >= 9
				cnt=sn-1;  //0 1 2 3 4 5 6 7 8
			}
			else{ //1 2 3 4 5 6 7 8 
				
				responseFn(600);
				
				$('.navBtn').removeClass('addNavBtn');
				$('.navBtn').eq(cnt).addClass('addNavBtn');
			}
		}
	});
	
	//이전 슬라이드(previewSlide)
	$('.arrow-leftBtn').on({
		click:	function(){
			cnt--;//cnt=cnt-1; ==  cnt-=1;  == cnt--;  8 7 6 5 4 3 2 1 0 -1
			if( cnt < 0 ){  //-1이면 == 0보다 작으면, 0으로 초기화 처음 슬라이드로
				cnt=0;
			}
			else{ //8 7 6 5 4 3 2 1 0 
				
				responseFn(600);
				
				$('.navBtn').removeClass('addNavBtn');
				$('.navBtn').eq(cnt).addClass('addNavBtn');
			}
		}
	});
	
	//슬라이드 네비게이션
	//클릭 이벤트 요소(클랙스) 배열처리 9개의 버튼을 
	//인덱스 배열 첨자 번호를 가져온다.
	$(document).on('mouseenter','.navBtn',function(){
		$('.navBtn').each(function(idx){
			$(this).on({
				click:	function(){
					cnt = idx; //클릭한 둥근 네비게이션 버튼번호를 cnt에 기억시켜 
							   //우측화살버튼 좌측화살버튼클릭시 이어사 다음과 이전을 사용해야 하기에
					responseFn(600);
					
					$('.navBtn').removeClass('addNavBtn');
					$('.navBtn').eq(idx).addClass('addNavBtn');				
				}
			});				
		});
	});
	
	

	
});//section3.js