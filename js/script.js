
$(function(){





     // !----------------- S top btn
    const $topBtn = $('.top-btn');

     // 초기 상태: 버튼 숨김
    $topBtn.hide();
 
     // 스크롤 이벤트
    $(window).scroll(function() {
        const scrollTop = $(this).scrollTop(); // 현재 window의 스크롤 위치
    
        // 600px 이상 스크롤 시 top-btn 표시
        if (scrollTop > 600) {
            $topBtn.fadeIn(300);
        } else {
            $topBtn.fadeOut(300);
        }
    
        // 1000px 이상 스크롤 시 .sticky p 색상 변경
        if (scrollTop > 5200) {
            $('.sticky p').css('color', '#fff');
        } else {
            $('.sticky p').css('color', '#363636');
        }
    });

     // 버튼 클릭 이벤트
    $topBtn.click(function() {
         $('html, body').animate({ scrollTop: 0 }, 500); // 페이지 상단으로 스크롤 
         return false; // 기본 동작 방지
    });
    



    // !-------------------------------S header scroll
    let lastScrollTop = 0; // 이전 스크롤 위치 저장

    $(window).scroll(function() {
        let scrollTop = $(this).scrollTop();

        if (scrollTop > lastScrollTop) {
            // 스크롤 내릴 때
            $('header').css({
                'position': 'fixed',
                'top': '-40px',
                'transition': 'top 0.3s ease',
                'border-bottom': '1px solid #ccc'
            });
        } else {
            // 스크롤 올릴 때
            $('header').css({
                'position': 'fixed',
                'top': '0',
                'transition': 'top 0.3s ease'
            });
        }

        //!------------------------------------------------S guide-title animate
        if (scrollTop > 1600) { $('.guide-title').css({height: '435px', padding: '107px 0'}); } else { $('.guide-title').css({height: '0', padding: '0'}); }

         lastScrollTop = scrollTop; // 현재 스크롤 위치 저장
    });







    //! ------------------------------ S list btn
    $('.list').hide()
    $('.icon-list').click(function(){
        $('.list').slideToggle()
        return false
    })




    //!------------------------------------------------S national
    $('.national-space>div>a').click(function(){
        $('.national-space>div>a').removeClass('national-on')
        $(this).addClass('national-on')
        return false
    })


    $('.foreign-list').hide()
    
    $('.foreign>a').click(function(){
        $('.kor-list').hide()
        $('.foreign-list').show()
    })
    $('.kor>a').click(function(){
        
        $('.foreign-list').hide()
        $('.kor-list').show()
    })




    //!=------------------------------------------------------S brand-list
    $('.kor-list li>a').click(function() {
        $('.kor-list li>a').removeClass('brand-on'); 
        $(this).addClass('brand-on'); 
        return false;
    })

    $('.foreign-list li>a').click(function() {
        $('.foreign-list li>a').removeClass('brand-on'); 
        $(this).addClass('brand-on'); 
        return false;
    })

    $('#hyundai-btn').click(function(){
        $('.kia').fadeOut()
        $('.hyundai').fadeIn()
    })

    $('#kia-btn').click(function(){
        $('.hyundai').fadeOut()
        $('.kia').fadeIn()
    })


        // ! -----------------------------------------------S advice guide btn

    $('.advice-btnbox').hover(function(){
        $('.advice-btn').stop().animate({marginLeft : '-562px'}, 300); 
    }, function(){
        $('.advice-btn').stop().animate({marginLeft : '0px'}, 300); 
    });

    $('.guide-btnbox').hover(function(){
        $('.guide-btn').stop().animate({marginLeft : '-562px'}, 300); 
    }, function(){
        $('.guide-btn').stop().animate({marginLeft : '0px'}, 300); 
    });



    // ! -----------------------------------------------S care more btn
    $('.care-box .box').click(function(){
        $('.care-box .box').removeClass('care-on')
        $(this).addClass('care-on')
    })

    $('.more-txtbox').hide()
    $('.more-btn').click(function(){
        $('.more-btn img').toggleClass('rotated')
        $('.more-txtbox').slideToggle(350);
        $('.more-txtbox h4').animate({opacity : '1'},500)
        $('.more-txtbox p').animate({opacity : '1'},1000)
    })


    // ! --------------------------------------------S benefit slider
    const $sliderWrapper = $('.slider-wrapper');
    const $sliderItems = $('.slider-item');
    const totalItems = $sliderItems.length;
    
    let currentX = 0;
    
    // 슬라이더 아이템 복제
    $sliderItems.clone().appendTo($sliderWrapper);
    
    // 하나의 슬라이더 아이템 너비 계산
    const itemWidth = $sliderItems.first().outerWidth(true);
    const visibleWidth = $('.slider-container').width(); // 컨테이너 너비
    const totalWidth = itemWidth * totalItems;
    

    const RESET_THRESHOLD = totalWidth + 200; // 200px 추가로 뒤로 리셋

    // 슬라이더 애니메이션
    function animateSlider() {
      currentX -= 2; // 슬라이더 이동 속도 (음수로 설정)

      // 무한 루프 처리: 마지막 li가 화면에서 다 가려졌을 때 위치 재설정
    if (Math.abs(currentX) >= RESET_THRESHOLD) {
        currentX = 0; // 위치를 리셋
    }
    
      // 슬라이더 이동
    $sliderWrapper.css('transform', `translateX(${currentX}px)`);
    
      // 애니메이션 반복
    requestAnimationFrame(animateSlider);
    }
    
    animateSlider();


    // ! -------------------------------S benefit btn
    //  등급안내 버튼
    $('.modal-info').hide()
    $('.benefit-info').click(function(){
        $('.modal-info').show()
        $('body').addClass('no-scroll')
    })
    $('.info-close').click(function(){$('.modal-info').hide()
        $('body').removeClass('no-scroll')
    return false
    })
    $('.modal-btn').click(function(){
        $('.modal-info').hide()
        $('.modal-more').show()
        $('body').addClass('no-scroll')
        return false})




    // 혜택 자세히 보기 버튼
    $('.modal-more').hide()
    $('.benefit-more').click(function(){
        $('.modal-more').show()
        $('body').addClass('no-scroll')
    })
    $('.more-close').click(function(){$('.modal-more').hide()
        $('body').removeClass('no-scroll') 
        return false
    })

}) 