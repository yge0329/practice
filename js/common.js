$(function() {
    const swiper = new Swiper('.visual', {
        loop: true,
    });

    //swiper.on -> API에서 'Methods & Properties' 참고
    swiper.on('slideChange', function () {
        console.log(swiper.realIndex); 
        //loop가 되는 슬라이드일 때 현재 활성화 된 슬라이드가 몇번째인지 알려주는 것(realIndex) - loop 아닐 때는 activeIndex

        var idx = swiper.realIndex;

        //만약에 인덱스 값이 0번째(1번째)가 되면 .gnb에 있는 모든 li를 찾아서(=>반복문 each 이용해서 찾아야 함) 그 중 .active 되어있는 걸 찾아라
        if( idx == '0'){
            // $('.gnb li').each(function(){//.gnb는 li를 전부 찾아야한다 
            //     if( $(this).hasClass('active')){
            //         $(this).children('a').css('color','#f17785');
            //     }
            // });
            color('#f17785');
        }else if( idx == '1'){
            // $('.gnb li').each(function(){//.gnb는 li를 전부 찾아야한다 
            //     if( $(this).hasClass('active')){
            //         $(this).children('a').css('color','#abcd05');
            //     }
            // });
            color('#abcd05');
        }
    });

    // 위에 주석처리 된 부분들 반복되니까 함수로 간략하게 만든 것!
    function color(color){ //color 함수 만든 것. 함수명color(변수color)
        $('.gnb li').each(function(){//.gnb는 li를 전부 찾아야한다 
            if( $(this).hasClass('active')){
                $(this).children('a').css('color',color); //두번째 color는 변수인 color
            }
        });
    }



    const swiper2 = new Swiper('.thanks', {
        spaceBetween:30,
        slidesPerView:1.2, //소수점 가능,20퍼센트 보여주는 것
    });


    const swiper3 = new Swiper('.review_slide', {
        spaceBetween:30,
        slidesPerView:1.7, //70퍼센트 나오게  
        breakpoints: {
            370: {
                slidesPerView: 2,
            },
            500: {
                slidesPerView: 2.7,
            },
            700: {
                slidesPerView: 4,
            }
        },
        pagination: {
            el: '.review_slide .paging',
            type: 'bullets',
        },
    });

    const swiper4 = new Swiper('.slide2', {
        spaceBetween:30,
        slidesPerView:2, 
    });

    // 팝업
    //클릭 및 닫기 시 배경 스크롤 관련
    function bodyvisible(){
        $('body').css('overflow','visible');
    }
    function bodyhidden(){
        $('body').css('overflow','hidden');
    }

    $('.btn_program_view').on('click', function() {
        $('.popup.type1').stop().animate({
            top:0
        }, 500); 
        //1. animate가 반복해서 실행되면 안되므로 stop먼저 걸어두기
        //2. 500: 0.5초 
        $('.dimmed').fadeIn(300);
        bodyhidden();
    });
    $('.popup.type1 .btn_close').on('click', function() {
        $(this).parents('.popup.type1').stop().animate({
            //btn_close의 부모인 popup.type1
            top: -100 + '%'
        }, 500);
        $('.dimmed').fadeOut(300);
        bodyvisible();
    });

    $('.btn_close_pop').on('click', function() {
        $(this).parents('.popup .popup_wrap').animate({
            bottom:-100 + '%'
        },300, function(){ //300: 0.3초동안
            $('.popup.type2').fadeOut(200);
        });
    });

    $('.btn_close_pop2').on('click', function() {
        $(this).parents('.popup').fadeOut(200);
    });

    $('.open_popup').on('click', function(e) {
        $('.popup.type3').fadeIn(200);
        bodyhidden();
        e.preventDefault(); //function안에 e랑 e.preventefault 안쓰면 클릭해도 바로 새로고침 됨(팝업 나오게 하기 위해 써준 것)

    });
});

