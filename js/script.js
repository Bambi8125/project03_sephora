$(document).ready(function () {
  //모바일 메뉴 열기
  $('#only1280>i').click(function(){
    $(this).siblings('#mobileMenu').css({"left":"0"})
  })

  //모바일 메뉴 닫기
  $('#mobileMenu>i').click(function(){
    $(this).parent('#mobileMenu').css({"left":"-1280px"})
  })


  //모바일 하위메뉴 업&다운
  $('.mobile_depth1>li>a').click(function(){
    $(this).find('i.fas').toggleClass('rotate')
    $(this).siblings('.mobile_depth2').slideToggle()
  });

  // Top Button
  var topBtn = $("#top_btn");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      topBtn.addClass("show");
    } else {
      topBtn.removeClass("show");
    }
  });

  topBtn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 450);

    return false;
  });

  //상단 텍스트 슬라이더
  var currenttxt = 0;
  var subtext = $('.sub_text>li');
  var tim2;

  function set2() {
      tim2 = setInterval(function () {

          var prev2 = subtext.eq(currenttxt);
          move2(prev2, 0, '100%');
          currenttxt++;
          if (currenttxt == subtext.size()) {
              currenttxt = 0
          }
          var next2 = subtext.eq(currenttxt)
          move2(next2, '-100%', 0);
      }, 3000);
  }

  set2();

  function move2(tgg2, start, end) {
      tgg2.css('top', start).stop().animate({
          top: end
      }, 800);
  }

  $('.sub_text').hover(function () {
      clearInterval(tim2);
  }, function () {
      set2();
  });

  //  메뉴 슬라이드 업다운
  $("#mainMenu > .depth1 >li").mouseenter(function () {
    $(this).find(".depth2").stop().slideDown();
  });

  $("#mainMenu > .depth1 >li").mouseleave(function () {
    $(this).find(".depth2").stop().slideUp();
  });

  // // 메인 배너 슬라이드 이미지
  var visual = $(".pc_main>ul>li"); //비주얼 슬라이드 이미지
  var button = $(".slide_num>ul>li"); //슬라이드 버튼
  var current = 0; //현재상태 초기화
  var setIntervalId; //반복되는 배너를 변수로 지정

  function move(tg, start, end) {
    tg.css("left", start).stop().animate(
      {
        left: end,
      },
      4000
    );
  }

//슬라이드 이미지
var visual = $('.pc_main>ul>li'); //비주얼 슬라이드 이미지
var button = $('.slide_num>ul>li') //슬라이드 버튼
var current = 0; //현재상태 초기화
var setIntervalId; //반복되는 배너를 변수로 지정

function move(tg, start, end) {
    tg.css('left', start).stop().animate({
        left: end
    }, 700)
}

timer(); //호출 

function timer() { //일정시간 호출하기 위해 타이머를 만듬.
    setIntervalId = setInterval(function () {
        var prev = visual.eq(current);
        var pn = button.eq(current);
        move(prev, 0, '-100%');

        pn.removeClass('on');
   
        current++;

        if (current == visual.size()) {
            current = 0
        }

        var next = visual.eq(current);
        var pnn = button.eq(current);

        move(next, '100%', 0);
        pnn.addClass('on');
    }, 4000);
}

//stop & play버튼

$('.sd_stop').click(function () {
    clearInterval(setIntervalId);
    $('.sd_stop').hide();
    $('.sd_start').show();
})

$('.sd_start').click(function () {
    timer();
    $('.sd_stop').show();
    $('.sd_start').hide();
})

//배너 하단 동그라미버튼
button.click(function () {
    var tg = $(this);
    var i = tg.index();
    button.removeClass('on');
    tg.addClass('on');
    movel(i); //버튼을 클릭하면 현재 화면에서 재생되도록
});

function movel(i) { //현재화면에서 재생
    if (current == i) {
        return
    } //i가 현재 화면과 같다면 반환해~
    var currentEl = visual.eq(current);
    var nextEl = visual.eq(i);
    currentEl.css({
        left: 0
    }).stop().animate({
        left: '-100%'
    }, 900);
    nextEl.css({
        left: '100%'
    }).stop().animate({
        left: 0
    }, 900);
    current = i;
}

  //브랜드 로고 배너 #Shop By Brand
  //배너 자동 회전
  var slide1 = $(".scBannerWrap>ul.scBanner");
  var slideListWidth1 = $(".scBannerWrap>ul.scBanner>li").width();
  var setInterval03;

  mainSlide1();

  function mainSlide1() {
    setInterval03 = setInterval(function () {
      slide1.stop().animate({
          left: -slideListWidth1,
        },
        500,
        function () {
          $("ul.scBanner>li:first").insertAfter("ul.scBanner>li:last");
          slide1.css("left", 0);
        }
      );
    }, 2000);
  }

  $(".scBanner, .arrowL, .arrowR").hover(
    function () {
      clearInterval(setInterval03);
    },
    function () {
      mainSlide1();
    }
  );

  //화살표버튼 클릭하면,
  //왼쪽에서 오른쪽으로 한 칸씩 이동
  function prev1_1() {
    $("ul.scBanner>li:last").insertBefore("ul.scBanner>li:first");
    slide1.css("left", -slideListWidth1);
    slide1.animate({
        left: 0,
      },
      500
    );
  }

  //오른쪽에서 왼쪽으로 한 칸씩 이동
  function next1_1() {
    $("ul.scBanner>li:first").insertAfter("ul.scBanner>li:last");
    slide1.css("left", slideListWidth1);
    slide1.animate({
        left: 0,
      },
      500
    );
  }

  $(".arrowR").click(function () {
    prev1_1();
  });
  $(".arrowL").click(function () {
    next1_1();
  });

// 베스트 리뷰 TOP10 탭메뉴 

  $('.bestReviewContents>.bestReviewTabs>li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.bestReviewTabs>li').removeClass('onTab');
		$('.reviewTab').removeClass('onTab');

		$(this).addClass('onPage');
		$("#"+tab_id).addClass('onPage');
	})


// ///////////////////////////////////

  $(function(){
    $('.bestReview_tabcontent > div').hide();
    $('.bestReview_tabnav a').click(function () {
      $('.bestReview_tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.bestReview_tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();
    });

    // 460미만에서 X 버튼 사라짐
    if (screen.width <= 420) {
      $('.mobile_depth2 > li').click(function(){
        $('#mobileMenu').css({"left":"-1280px"})
      })
    }

    if (screen.width <= 420) {
      $('.mobile_gnb > li').click(function(){
        $('#mobileMenu').css({"left":"-1280px"})
      })
    }
});

	

