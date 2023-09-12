   
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


    //하단 배너 슬라이드

    $('.p').click(function(){

        $('.bannerslide li:last').prependTo('.bannerslide');
        
        $('.bannerslide').css('margin-left',-1200);
        
        $('.bannerslide').stop().animate({marginLeft:0},800);
        
        });
    
        
        $('.n').click(function(){
        
             $('.bannerslide').stop().animate({marginLeft:-1200},800, function(){
        
                $('.bannerslide li:first').appendTo('.bannerslide');
        
                $('.bannerslide').css({marginLeft:0});
        
           });
        
        });

        $(".bannerslide").mouseover(function(){
            $(".bottombanner > span ").css("display", "block");
    
            $(".bottombanner > span").mouseout(function(){
                $(".bottombanner > .p").css("display", "none");
            });
        });



        //OPEAN API 책정보

    var search;
    search = ["칵테일, 러브, 좀비", "여름 언덕에서 배운 것", "집중투자의 정석", "돌아온, 할머니는 도둑"]
    for(let i=0; i<search.length; i++){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:search[i]},
        async:false,
        headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
    })
        .done(function (msg) {
            console.log(msg)
            
            //1
            $(".book").eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".book").eq(i).append("<h5>"+msg.documents[0].title+"</h5>");
            $(".book").eq(i).append("<h5>"+msg.documents[0].publisher+"</h5>");
            $(".book").eq(i).append("<h5>"+msg.documents[0].authors[0]+"</h5>");
            $(".book").eq(i).append("<h4>"+msg.documents[0].sale_price+"원 </h4>");

           
            //2

           

        });
    };

    var searchtwo;
    searchtwo = ["운동의 뇌과학", "미래의 나를 구하러 갑니다", "완벽이 온다", "진짜 일 학년 시험을 치다!"]
    for(let i=0; i<searchtwo.length; i++){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:searchtwo[i]},
        async:false,
        headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
    })

        .done(function(msg){
            console.log(msg)

            $(".book2").eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".book2").eq(i).append("<h5>"+msg.documents[0].title+"</h5>");
            $(".book2").eq(i).append("<h5>"+msg.documents[0].publisher+"</h5>");
            $(".book2").eq(i).append("<h5>"+msg.documents[0].authors[0]+"</h5>");
            $(".book2").eq(i).append("<h4>"+msg.documents[0].sale_price+"원 </h4>");
        });
};