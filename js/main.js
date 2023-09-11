   
// 마우스 오버하면 이전 다음 버튼 display block 마우스 아웃하면 이전 다음 버튼 display none
   $(".imgbannerslide").mouseover(function(){
        $(".slidewrap > span").css("display", "block");

        $(".imgbannerslide").mouseout(function(){
            $(".slidewrap > span").css("display", "none");
        });
    });

    // 상단 슬라이드 이전버튼 오토슬라이드
    let i = 0;

    function prev(){
        i--;
        if(i<0){
            i=3;
        }
        $('.slide li:last').prependTo('.slide');
        $('.slide').css('margin-left', -1090);
        $('.slide').stop().animate({marginLeft:0},800);
        $(".hover-1").eq(i).addClass("active").siblings().removeClass("active");
    }

    function next(){
        i++;
        if(i>3){i=0}
        $('.slide').stop().animate({marginLeft:-1090}, 800, function(){
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({marginLeft:0});
        });
        $(".hover-1").eq(i).addClass("active").siblings().removeClass("active");
    }

    $('.prev').click(function(){
        prev();   
    });
    
    
    $('.next').click(function(){    
        next();
    });
    
    setInterval(next, 8000);

    $(".textbox").hide();
