$(function(){
	var cnt = 0;  //슬라이드 우측 좌측 화살버튼 클릭시 1씩 증가 전역변수
	var slideWrapWidth = 0;  //한화면의 슬라이드박스 너비 ul li 3개의 너비 - 1860
	var slideWidth = 0;  	//슬라이드1개의 너비 li - 620
	var slideWrapTotalWidth = 0;  	//슬라이드 전체의 너비 ul - 16740
	var timer = 0;  					//애니메이션 이동 지연 시간 타이머
	var arrowTop = 0;  					
	var slideTotalN = $('.section3-slide-wrap>li').length; //총 슬라이드 갯수
	var slideN = 3;  //한화면의 슬라이드 갯수 기본값 1250 초과이면 3개 설정
    var txt = '';
	var currentNum = 0;
	
		naviBtnColorFn(cnt);
		//로딩시 실행
		responseFn();
		setTimeout(responseFn, 100);
	
		function responseFn(){
			
			currentNum = slideN; //이전갯수
			
			if( $(window).innerWidth() > 1250 ){
				slideN = 3;  	//슬라이드 갯수
			}
			else if( $(window).innerWidth() > 800 ){
				slideN = 2;		//슬라이드 갯수
			}
			else{
				slideN = 1;		//슬라이드 갯수
			}
			
			
			if( currentNum != slideN ){  //한화면의 슬라이드 갯수 이전과 현재가 다르면
				cnt = 0 ;   // 초기화 - 첫번째 슬라이드로 초기화 색상변경
			}
			naviBtnColorFn(cnt);
			
			//화살버튼 탑값 = (슬라이드 이미지 높이 - 화살버튼 높이)/2  가운데 맞추기 설정 
			arrowTop = ($('.slide-img-wrap').innerHeight()-105)/2;
			$('.arrow-left-wrap, .arrow-right-wrap').css({top: arrowTop });  //탑값 설정
			
			//슬라이드박스 너비 slideWrapWidth = 섹션3(메인박스)의 너비 - 슬라이드 뷰박스 마진값
			//예] 1860 = 1920 - 60(좌측50+우측10)	
			//애니메이션 포지션값(left:1860) 설정으로 사용됨
			if( $(window).innerWidth() > 800 ){
				slideWrapWidth = $('#section3').innerWidth() - 60 ;			
			}
			else{  //한화면 너비 가득 여백 없앤다
				slideWrapWidth = $('#section3').innerWidth() - 0 ;			
			}


			//슬라이드1개의 너비 slideWidth = 슬라이드박스 너비/한화면의 슬라이드 갯수
			//예] 620 = 1860 / 3
			slideWidth = slideWrapWidth / slideN ;
			$('.section3-slide-wrap>li').css({width: slideWidth });  //너비 설정
			
			//슬라이드 전체박스 너비 slideWrapTotalWidth = 슬라이드1개의 너비 * 총슬라이드 갯수(27) ul
			//예] 16740 = 620 * 27
			slideWrapTotalWidth = slideWidth * slideTotalN ;
			$('.section3-slide-wrap').css({width: slideWrapTotalWidth });  //슬라이드 전체너비 설정
			
			//애니메이션 슬라이드 부드럽게 한 화면씩 이동
			$('.section3-slide-wrap').stop().animate({left: -slideWrapWidth * cnt }, timer );
			
			//네비게이션 둥근버튼 자동 출력
			for(i=0; i<parseInt(slideTotalN/slideN+0.9); i++){
				txt += "<li><a href='javascript:' class='navBtn blind'>둥근버튼</a></li>";
			}
				$('.navBtn-wrap').html( txt );
				txt = '';
				$('.navBtn').eq(cnt).addClass('addNavBtn');
				
			
		}	
		
		//BOM - 창크기가 변경되면 적요
		$(window).resize(function(){
			timer=0;
			responseFn();
		});	
		
		
		//터치이벤트
		$('.section3-slide-wrap').on({
			swipeleft:	function(){  //우측에서 좌측으로 터치이벤트 다음슬라이드
				cnt++; //0 1 2 3 4 5 6 7 8  8보다크면 초기화 8로 마지막 슬라이드
				if( cnt > (parseInt(slideTotalN/slideN+0.9)-1) ){  //8=전체슬라이드갯수/한화면의슬라이드갯수
					cnt = (parseInt(slideTotalN/slideN+0.9)-1);    //3개씩 묶음은 9, 2개식묶음은 14
				}
				else{ // 1 ~ 8까지만 적용
					timer=600;
					responseFn();
					naviBtnColorFn(cnt);
				}
			},
			swiperight:	function(){  //좌측에서 우측으로 터치이벤트 이전슬라이드
				cnt--; //7 6 5 4 3 2 1 0 0보다 작으면 초기화 0으로 처음슬라이드
				if(cnt<0){
					cnt=0;
				}
				else{ // 1 ~ 8까지만 적용
					timer=600;
					responseFn();
					naviBtnColorFn(cnt);
				}
			}
		});
		
		
		
		
		//우측화살버튼 (다음슬라이드 Next Slide) - 슬라이드박스가 우측에서 좌측으로 이동하는 슬라이드
		//이동간격 한 화면( 1920 영역 - 좌측 여백 50px, 우측 여백 10px = 1860px )
		$('.arrow-rightBtn').on({
			click:	function(){
				cnt++; //0 1 2 3 4 5 6 7 8  8보다크면 초기화 8로 마지막 슬라이드
				if( cnt > (parseInt(slideTotalN/slideN+0.9)-1) ){  //8=전체슬라이드갯수/한화면의슬라이드갯수
					cnt = (parseInt(slideTotalN/slideN+0.9)-1);    //3개씩 묶음은 9, 2개식묶음은 14
				}
				else{ // 1 ~ 8까지만 적용
					timer=600;
					responseFn();
					naviBtnColorFn(cnt);
				}
			}
		});
		
		//촤측화살버튼 (이전슬라이드 Preview Slide) - 슬라이드박스가  촤측에서 우측으로 이동하는 슬라이드
		$('.arrow-leftBtn').on({
			click:	function(){
				cnt--; //7 6 5 4 3 2 1 0 0보다 작으면 초기화 0으로 처음슬라이드
				if(cnt<0){
					cnt=0;
				}
				else{ // 1 ~ 8까지만 적용
					timer=600;
					responseFn();
					naviBtnColorFn(cnt);
				}				
			}
		});
		
		//네비버튼 배열처리 클릭이벤트
		$(document).on('mouseenter','.navBtn', function(){
			
			$('.navBtn').each(function(index){
				$(this).on({
					click:	function(){
						cnt = index ;  //index현재 다음슬라이드 이전슬라이드 모두 연결하기위해
						timer=600;
						responseFn();
						naviBtnColorFn(cnt);
					}
				});
			});
			
		});
		
		

		
		//네비버튼 색상변경 함수 네비버튼 클릭이벤트와 다음슬라이드, 이전슬라이드 모두 공통 함수 호출 사용
		//매개변수 cnt = z 전달
		function naviBtnColorFn(z){
			$('.navBtn').removeClass('addNavBtn');
			$('.navBtn').eq(z).addClass('addNavBtn');
			
			$('.navCurrentNum').text( z+1 );
			$('.navTotalNum').text( slideTotalN );
			
		}
		
		
	
});  //section3-slide.js



