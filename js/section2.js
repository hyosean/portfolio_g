$(function(){
	//객체와 배열 처리하여 이미지 기억장소 넣어두고
	//객체와 배열로 호출하여 사용한다.
	//var img = {};  //객체선언
	//var a   = [];  //배열선언
	
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
				   //객체.배열[줄]
	//console.log( img.side[1] );  //img객체의 side[1] 사이드배열2번째 방의 내용을 호출
	//console.log( img.front[2] );  //img객체의 front[2] 프론트배열3번째 방의 내용을 호출
	
	$('.moreBtn').each(function(index){
		$(this).on({
			mouseenter:	function(){  //이벤트 핸들러
				$(this).find('.section2-more-view').addClass('addMore');
				$(this).find('.section2-car-img-wrap').addClass('addMore');
				$(this).find('img').attr('src', img.front[index] );
				$(this).find('img').addClass('addMore');
			},
			mouseleave:	function(){
				$(this).find('.section2-more-view').removeClass('addMore');
				$(this).find('.section2-car-img-wrap').removeClass('addMore');
				$(this).find('img').attr('src', img.side[index] );
				$(this).find('img').removeClass('addMore');			
			}
		});
	});
	
	
	
	/*
	
	//앵커버튼 Anchor(a링크버튼)에 마우스 on - mouseenter 이면- 이벤트 헨들러
	//해당(this) 더알아보기 버튼이 나타나고 - 이벤트1
	//해당(this) 자동차가 전면이미지로 변경된다 - 이벤트2
	
	//해당(this) 위치를 떠나면(mouseleave) - 클래스를 removeClass
	//해당(this) 위치를 떠나면(mouseleave) - 전면이미지를 사이드이미지로 변경
	
	
	
	
	$('.moreBtn').eq(0).on({
		mouseenter:	function(){  //이벤트 핸들러
			$(this).find('.section2-more-view').addClass('addMore');
			$(this).find('.section2-car-img-wrap').addClass('addMore');
			$(this).find('img').attr('src','img/g70_gnb_front.png');
			$(this).find('img').addClass('addMore');
		},
		mouseleave:	function(){
			$(this).find('.section2-more-view').removeClass('addMore');
			$(this).find('.section2-car-img-wrap').removeClass('addMore');
			$(this).find('img').attr('src','img/g70_gnb_side.png');
			$(this).find('img').removeClass('addMore');			
		}
	});
	
	$('.moreBtn').eq(1).on({
		mouseenter:	function(){  //이벤트 핸들러
			$(this).find('.section2-more-view').addClass('addMore');
			$(this).find('.section2-car-img-wrap').addClass('addMore');
			$(this).find('img').attr('src','img/gnb_g80_on_B.png');
			$(this).find('img').addClass('addMore');
		},
		mouseleave:	function(){
			$(this).find('.section2-more-view').removeClass('addMore');
			$(this).find('.section2-car-img-wrap').removeClass('addMore');
			$(this).find('img').attr('src','img/gnb_g80_B_1.png');
			$(this).find('img').removeClass('addMore');			
		}
	});
	
	$('.moreBtn').eq(2).on({
		mouseenter:	function(){  //이벤트 핸들러
			$(this).find('.section2-more-view').addClass('addMore');
			$(this).find('.section2-car-img-wrap').addClass('addMore');
			$(this).find('img').attr('src','img/gnb_g80sport_on.png');
			$(this).find('img').addClass('addMore');
		},
		mouseleave:	function(){
			$(this).find('.section2-more-view').removeClass('addMore');
			$(this).find('.section2-car-img-wrap').removeClass('addMore');
			$(this).find('img').attr('src','img/gnb_g80sport.png');
			$(this).find('img').removeClass('addMore');			
		}
	});
	
	$('.moreBtn').eq(3).on({
		mouseenter:	function(){  //이벤트 핸들러
			$(this).find('.section2-more-view').addClass('addMore');
			$(this).find('.section2-car-img-wrap').addClass('addMore');
			$(this).find('img').attr('src','img/01_gnb_pc_g90_163x117.png');
			$(this).find('img').addClass('addMore');
		},
		mouseleave:	function(){
			$(this).find('.section2-more-view').removeClass('addMore');
			$(this).find('.section2-car-img-wrap').removeClass('addMore');
			$(this).find('img').attr('src','img/01_gnb_pc_g90_273x85.png');
			$(this).find('img').removeClass('addMore');			
		}
	});
	*/
	
	
	
}); //section2.js