$(function(){
	var s = []; //슬라이드 실행여부 기억하는 배열 변수 - 현재 어느 슬라이드가 실행 중인지 알 수 있다.
	var a = []; //다음 슬라이드 기억 배열 변수
	var b = []; //이전 슬라이드 기억 배열 변수
	var n = $('.slide').length; //슬라이드 전체 갯수 3
	var j = k = x = 0;
	    s[0] = 1; //첫번째가 실행 중임
		mainSlideNavfn(0);
	
	//둥근 네비게이션 버튼 클릭 이벤트
	$('.mainSlideNavBt').each(function(index){
		$(this).on({
			click:	function(){
				for(i=0; i<n; i++){
					if( s[i]==1 ){ //예] s[1]==1
						if( i < index ){  //index==2 
							//다음 해당 index 슬라이드 함수 호출
							nextSlide(index);
						}
						else if( i > index ){ 
							//이전 해당 index 슬라이드 함수 호출
							prevSlide(index);
						}
					}
				}
			}
		});
	});
	
	//둥근 네비게이션 버튼 이벤트	
	function mainSlideNavfn(z){
		$('.mainSlideNavBt').removeClass('addMainSlideNav');
		$('.mainSlideNavBt').eq(z).addClass('addMainSlideNav');
	}	
	
	//	setInterval(nextSlideIfFn, 3000);
	// 다음 슬라이드 클릭 이벤트
	$('.arrowNextBt').on({
		click:	function(){
			nextSlideIfFn();
		}
	});
	
	
	function nextSlideIfFn(){  //다음에 실행 할 함수
		//자동화
		for(i=0; i<n; i++){
			if( s[i]==1 ){  //실행 중인 슬라이드 중에서
				if( i == n-1 ){  //마지막 슬라이드 이라면
					nextSlide(0); //해당슬라이드 호출 임무 끝
					break;  //반복 조건문 탈출 반드시
				}
				else{  //마지막이 아니면 다음슬라이드
					nextSlide(i+1); //현재슬라이드번호 + 1 = 다음슬라이드,
					break;  //반복 조건문 탈출 반드시
				}
			}
		}	
	}
	
	//다음 슬라이드 함수
	function nextSlide(z){
		for(i=0; i<n; i++){
			s[i] = 0 ;	// s = [0,0,0,0,0...]
			a[i] = i ; // a = [0, 1, 2, ... 9, ... 99 ]
		}
		s[z] = 1;  //s = [1,0,0];s = [0,1,0];s = [0,0,1];

		mainSlideNavfn(z);
		
		
		//배열 메소드 
		//맨마지막 배열값을 삭제 pop() 팝핑 - 삭제하고 임시(imsi==temp) 기억 변수에 기억시켜둔다.
		imsi = a.pop();  // a = [0, 1, 2]
		
		//맨처음에 배열값을 삽입 unshift(imsi) 언쉬프팅
		a.unshift(imsi);  // 결과(Result) a = [2, 0, 1]
		
		//슬라이드 z==0이면 0회전
		//슬라이드 z==1이면 1회전 쉬프팅과 푸슁
		//슬라이드 z==2이면 2회전 쉬프팅과 푸슁
		for( i=0; i<z; i++ ){  
			//맨앞 배열값 삭제 후 임시기억변수 기억시켜둔다
			imsi = a.shift();
			//맨뒤에 삽입 한다.
			a.push(imsi);
		}

		/*
		if(z==0){    	//첫번재 슬라이드 0회전 [2,0,1]; >>
			a = [2,0,1];
		}
		else if(z==1){	//두번재 슬라이드 1회전  [2,0,1]; >> [0,1,2];
			a = [0,1,2];
		}
		else if(z==2){	//세번재 슬라이드 2회전 [2,0,1]; >> [0,1,2]; >> [1,2,0];
			a = [1,2,0];
		}
		*/

		j=-2;  //반드시 필요한 초기값
		for( i=0; i<n; i++ ){
			j++;  //-1 0 1 2 ...
			$('.slide').eq( a[i] ).stop().animate({left: (100*i) + '%'},0).animate({left: (100*j) + '%'},1000);		
		}
		
	}

	
	
	
	
	//이전 슬라이드 좌측에서 우측으로 이동 2 1 0
	$('.arrowPrevBt').on({
		click:	function(){
			prevSlideIffn();
		}
	});
	
	function prevSlideIffn(){
		for( i=0; i<n; i++ ){
			if( s[i]==1 ){ //현재 실행중인 슬라이드 중에서
				if( i==0 ){  //실행중인 슬라이드 번호가 첫번째 슬라이드 이면
					prevSlide( n-1 );  //마지막 슬라이드
					break;
				}
				else{
					prevSlide( i-1 );  //현재 슬라이드번호 - 1 = 이전슬라이드
					break;
				}
			}
		}
	}
	
	function prevSlide(z){
		x = n; //전체슬라이드 갯수 3
		
		for(i=0; i<n; i++){
			s[i] = 0;   //s =[0,0,0,...]
			x--;
			b[i] = x;   //b = [2,1,0]
		}
		s[z] = 1; //s = [1,0,0],s = [0,1,0],s = [0,0,1],

		mainSlideNavfn(z);
		
		//맨마지막 배열값 삭제 후 임시기억변수에 기억시켜둔다
		imsi = b.pop();  // b = [2, 1, 0]
		b.unshift(imsi);  // b = [0, 2, 1]
		
		for(i=n-1; i>z; i--){
			//맨앞 배열값 삭제 후 임시기억변수에 기억시켜둔다
			imsi=b.shift();
			b.push(imsi);
		}
	
		/*
		if( z == 2 ){   //0회전
			b = [0,2,1];
		}
		else if( z == 1 ){ //1회전
			b = [2,1,0];
		}
		else if( z == 0 ){ //2회전
			b = [1,0,2];
		}
		*/
		
		k=2;
		for(i=0; i<n; i++){
			k--;  //1 0 -1 -2 -3 ...
			$('.slide').eq( b[i] ).stop().animate({left:(100*-i)+'%'},0).animate({left:(100*k)+'%'},1000);		
		}
	}
	
	
}); //mainSlide.js