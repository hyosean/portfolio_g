$(function(){
	var t=0; //토글변수
	var x=80; //x=80
	var winH=400;

		mobileMenuHeightFn();
		setTimeout(mobileMenuHeightFn, 100);
		
		scrollTopValueFn();
		setTimeout(scrollTopValueFn, 100);
		
	$('.appbarBtn').on({
		click:	function(){
			$(this).find('.bar').toggleClass('addAppbar');
			$('.mobile-menu-wrap').toggleClass('addMfixed');
			$('html').toggleClass('addScroll');
		}
	});
	
	$('.mobileMainBtn').on({
		click:	function(){
			$('.msub').stop().hide();
	


	$(this).next('.msub').stop().show();
		}
	});
	
	
	//스크롤시 정지되는 섹션1의 탑값 기본 80
	function scrollTopValueFn(){
		if( $(window).innerWidth()>1250 ){
			x=80;			
		}
		else{  //1250이하이면
			x=60;
		}
	}

	//모바일 메뉴 높이 창높이로 설정
	function mobileMenuHeightFn(){
		winH=$(window).innerHeight()-120;
		$('.mobile-nav-wrap, .mobile-sub-btn-wrap').css({height:winH});
	}


	$(window).resize(function(){
		scrollTopValueFn();
		mobileMenuHeightFn();
	});
	
	
	
	//맨위에서 30픽셀 마우스 스크롤시 
	//header에 메뉴 배경이 나타난다.
	//섹션2의 탑값으로 맨위상단으로 부드럽게 이동한다.
	$(window).scroll(function(){
		
		if( $(window).scrollTop()>=30 ){
			if( t==0 ){
				t=1;
				$('html, body').stop().animate({scrollTop:$('#mainSlide').offset().top-x },800,'easeInExpo');
			}
		}
		else{  //30미만
			t=0;
		}
		
		
		if( $(window).scrollTop() >= $('#mainSlide').offset().top-180 ){
			$('#header').addClass('addHeader');
			$('.goTop').addClass('addGotop');
		}
		else{
			$('#header').removeClass('addHeader');
			$('.goTop').removeClass('addGotop');
		}
				
		
	});
	
	
	
	//메인메뉴 버튼에 마우스 올리면(mouseenter==mouseover)
	//메인메뉴 배경이 위에서아래로 부드럽게 내려온다.(.slideDown(300))

	$('.mainBtn').each(function(idx){
		$(this).on({
			mouseenter:	function(){
				
				$('#header').addClass('addHeader');
				
				$('.nav-bg').stop().slideDown(200, function(){
					$('.sub').stop().hide();
					$('.sub').eq(idx).stop().show();
				});
			},
			focusin:	function(){
				
				$('#header').addClass('addHeader');
				
				$('.nav-bg').stop().slideDown(200, function(){
					$('.sub').stop().hide();
					$('.sub').eq(idx).stop().show();
				});
			}
		});
	});
	

	//nav 메인메뉴 박스 : 선택자를 떠나면(mouseleave==mouseout)
	//메인메뉴 배경이 아래에서 위로 올라간다.(.slideUp(300))
	$('#nav').on({
		mouseleave:	function(){
			
			headerNavBgFn();
			
			$('.sub').stop().hide(0, function(){
				$('.nav-bg').stop().slideUp(300);
			});
			
		}	
	});
	
	
	//aside	
	//search
	$('#search').on({
		click:	function(){
			$('#header').addClass('addHeader');
		}
	});
	
	$('.form-wrap').on({
		mouseleave:	function(){
			
			headerNavBgFn();
			
		}
	});
	
	
	
	//quickLink
	//마우스가 올라가면 서브메뉴 부드럽게 위에서 아래로 펼쳐진다.
	$('.quickLinkBtn').on({
		mouseenter:	function(){
			
			$('#header').addClass('addHeader');
			
			$(this).addClass('addQuick');
			$(this).next().stop().slideDown(300);
		}
	});
	
	//마우스가 떠나면 서브메뉴 부드럽게 아래에서 위로 접는다.
	$('.quikLink-wrap').on({
		mouseleave:	function(){
			
			headerNavBgFn();
						
			$(this).find('.quickLinkBtn').removeClass('addQuick');
			//$(this).children('.asideSub').stop().slideUp(300);
			$(this).find('.asideSub').stop().slideUp(300);
		}
	});
	
	
	//language
	$('.languageBtn').on({
		mouseenter:	function(){
			
			$('#header').addClass('addHeader');
						
			$(this).addClass('addLanguage');
			$(this).next().stop().slideDown(300);
		}
	});

	$('.language-wrap').on({
		mouseleave:	function(){
			
			headerNavBgFn();
						
			$(this).find('.languageBtn').removeClass('addLanguage');
			$(this).find('.asideSub').stop().slideUp(300);
		}
	});
	
	
	//30픽셀 미만에서만 메인메뉴배경 사라지는 함수
	function headerNavBgFn(){
		if( $(window).scrollTop() < $('#section2').offset().top-180 ){
			$('#header').removeClass('addHeader');
		}
	}
	
	
	//////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////
	//객체.배열[]
	var img = {
				side:
					[
						'img/g70_gnb_side.png',
						'img/gnb_g80_B_1.png',
						'img/gnb_g80sport.png',
						'img/01_gnb_pc_g90_273x85.png'
					],
				front:
					[
						'img/g70_gnb_front.png',
						'img/gnb_g80_on_B.png',
						'img/gnb_g80sport_on.png',
						'img/01_gnb_pc_g90_163x117.png'
					]
			  };
	
	$('.subBtn').each(function(idx){
		$(this).on({
			mouseenter:	function(){
				$(this).find('img').attr('src',  img.front[idx] );	
				$('.subBtn').removeClass('addSub');
				$(this).addClass('addSub');
			},
			mouseleave:	function(){
				$(this).find('img').attr('src',  img.side[idx] );	
				$('.subBtn').removeClass('addSub');
			}
		});
	});
	
	//goTopBtn 이벤트
	$('.gotopBtn').on({
		click:	function(){
			$('html, body').stop().animate({scrollTop: 0 },600);
		}
	});
	
	
});  //nav.js