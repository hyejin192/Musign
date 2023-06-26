
// ★ 메인메뉴에서 움직이는 바
$('.gnb li a').mouseenter(function(){
    // 마우스가 .gnb li a 요소 위로 진입하면 해당 요소의 왼쪽 위치 값을 변수 bar에 저장
    let bar = $(this).position().left 
    console.log(bar)
    let widNum = $(this).width();
    // $('bar').animate({실행문},시간)
    $('.bar').animate({
        'left':bar + "px",
        'width':widNum + "px",
        'opacity': 1,
    },200)
})

// ★ gnb의 영역에서 마우스 커서가 완전히 없어지면 바가 사라짐
$('.gnb').mouseleave(function(){
    $('.bar').animate({
        'left':0,
        'width':0,
        'opacity':0
    },10)
})


// ★ 전체화면 애니메이션 (scrolla) 
$('.animate').scrolla({
    // default
    mobile: true, // 모바일버전 활성화 유무
    once: false, // 스크롤시 한 번 실행(true) 또는 반복 실행(false)
    animateCssVersion: 4 // scrolla animate.css version (3 or 4)
});

// ★ menuOpen
// $('.menuOpen .open').on('click',function(){})
$('.menuOpen .open').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').addClass('on')
})
$('.menuWrap .close').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
})

$('.menuWrap ul li').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
})


// background color 변경
$(window).scroll(function(){
    // 여기서 $(this)는 window를 의미
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop)
    let offset = $('.service').offset().top - 200;
    // 서비스 영역이 천장에 닿을 때 클래스명 on을 body에 붙여라
    if(scrollTop>offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
});