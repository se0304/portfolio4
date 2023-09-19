   
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

        $(".bottombanner").mouseover(function(){
            $(".bottombanner > span ").show();
            $(".bottombanner").mouseleave(function(){
                $(".bottombanner>span").hide();
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

var crema;
crema = ["안젤리크"]
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:crema},
    headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
})

    .done(function(msg){
        console.log(msg)

        $(".crema").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".crema").append("<h4>"+msg.documents[0].title+"</h4>");
    });

    //section 8 book1
    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"나의 멋진 경주"},
        headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
    })
    
        .done(function(msg){
            console.log(msg)
    
            $(".book8:nth-of-type(1)").append("<img src='" + msg.documents[0].thumbnail + "'/>");s
        });

        //2

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: {query:"나의 이상하고 평범한 부동산 가족"},
            headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
        })
        
            .done(function(msg){
                console.log(msg)
        
                $(".book8:nth-of-type(2)").append("<img src='" + msg.documents[0].thumbnail + "'/>");s
            });

    //섹션7 책정보
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"요즘 저는 아버지께 책을 읽어 드립니다"},
        headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
    })
    
        .done(function(msg){
            console.log(msg)
    
            $(".book7").append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".book7").append("<h5>"+msg.documents[0].title+"</h5>");
            $(".book7").append("<h6>"+msg.documents[0].authors[0]+" 저 | 두란노"+"</h6>");
        });

// 섹션 7-2 책정보

var book6;
    book6 = ["구의 증명", "아가미", "아몬드", "파과", "천개의 파랑"]
    for(let i=0; i<book6.length; i++){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:book6[i]},
        async:false,
        headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
    })

        .done(function(msg){
            console.log(msg)

            $(".book6").eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>" );
            $(".book6").eq(i).append("<h5>"+msg.documents[0].title+"</h5>");
            $(".book6").eq(i).append("<h5>"+msg.documents[0].authors[0]+"</h5>");
        });
};

// 2

var booksix;
    booksix = ["그리하여흘려쓴것들","사람을사랑해도될까","불온하고불완전한편지","캣콜링","서랍에저녁을넣어두었다"]
    for(let i=0; i<booksix.length; i++){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:booksix[i]},
        async:false,
        headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
    })

        .done(function(msg){
            console.log(msg)

            $(".booksix").eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>" );
            $(".booksix").eq(i).append("<h5>"+msg.documents[0].title+"</h5>");
            $(".booksix").eq(i).append("<h5>"+msg.documents[0].authors[0]+"</h5>");
        });
};

//섹션2 책정보

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"소녀 동지여 적을 쏴라"},
    headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
})

    .done(function(msg){
        console.log(msg)

        $(".boxsection2book").append("<img src='" + msg.documents[0].thumbnail + "'/>");
    });


//섹션5 책정보


var bookfive;
    bookfive = ["윤성현","파리의 심리학 카페","도대체 해외여행이 뭐라고"]
    for(let i=0; i<booksix.length; i++){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:bookfive[i]},
        async:false,
        headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
    })

        .done(function(msg){
            console.log(msg)

            $(".sectionbook").eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".sectionbook").eq(i).append("<h5>"+msg.documents[0].title+"</h5>");
            $(".sectionbook").eq(i).append("<h6>"+msg.documents[0].authors[0]+"</h6>");
            $(".sectionbook").eq(i).append("<h6>"+msg.documents[0].sale_price+"원 </h6>");
        });
};

var sectionbooktwo;
sectionbooktwo = ["살롱 드 경성","이중섭, 편지화","어디서 무엇이 되어 다시 만나랴", "살아남은 그림들"]
    for(let i=0; i<sectionbooktwo.length; i++){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:sectionbooktwo[i]},
        async:false,
        headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
    })

        .done(function(msg){
            console.log(msg)

            $(".sectionbooktwo").eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".sectionbooktwo").eq(i).append("<h6>"+msg.documents[0].title+"</h6>");
        });
};

//
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"박문각 공인중개사"},
    headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
})

    .done(function(msg){
        console.log(msg)

        $(".headerbox").append("<img src='" + msg.documents[0].thumbnail + "'/>");
    });

//sub api

