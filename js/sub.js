//공통
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

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"라스트 젤리 샷"},
    headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
})

    .done(function(msg){
        console.log(msg)

        $(".bannerendbox").append("<img src='" + msg.documents[0].thumbnail + "'/>");
    });
    

// sub api 2

var book;
    book = ["도시와 그 불확실한 벽","중요한 건 살인","네가 사라진 날","6시 20분의 남자", "비가 오면 열리는 상점", "탱크"]
    for(let i=0; i<book.length; i++){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:book[i]},
        async:false,
        headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
    })

        .done(function(msg){
            console.log(msg)

            $(".bookbox-2").eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".bookbox-2").eq(i).append("<h5>"+msg.documents[0].title+"</h5>");
            $(".bookbox-2").eq(i).append("<h6>"+msg.documents[0].authors[0]+"</h6>");
            $(".bookbox-2").eq(i).append("<h4>"+msg.documents[0].sale_price+"원 </h4>");
        });
};

var book3;
    book3 = ["1%를 읽는 힘","일론 머스크","멘탈을 회복하는 연습","마흔에 읽는 쇼펜하우어", "운동의 뇌과학"]
    for(let i=0; i<book3.length; i++){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:book3[i]},
        async:false,
        headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
    })

        .done(function(msg){
            console.log(msg)

            $(".box3").eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".box3").eq(i).append("<h5>"+msg.documents[0].title+"</h5>");
            $(".box3").eq(i).append("<h6>"+msg.documents[0].authors[0]+"</h6>");
            $(".box3").eq(i).append("<h4>"+msg.documents[0].sale_price+"원 </h4>");
        });
};

//텍스트 파일 1

$(function(){
    $.get("../sub/text/four.txt", function(data){
        $(".textfour").html(data);
    })
});

//텍스트 파일 2

$(function(){
    $.get("../sub/text/five.txt", function(data){
        $(".textfive").html(data);
    })
});

//텍스트 파일3

$(function(){
    $.get("../sub/text/seven.txt", function(data){
            $(".seventextbox").html(data);
    })
});

$(function(){
    $.get("../sub/text/tb.txt", function(data){
        $(".td").html(data)
    })
});

var contbox;
contbox = ["도시와 그 불확실한 벽","바다가 들리는 편의점","세상의 마지막 기차역","눈에 갇힌 외딴 산장에서", "바다가 들리는 편의점 2"]
    for(let i=0; i<contbox.length; i++){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:contbox[i]},
        async:false,
        headers: { Authorization: "KakaoAK f49ddabcd0f54008dff8bf9b020f1ced" }
    })

        .done(function(msg){
            console.log(msg)

            $(".contboxbook").eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".contboxbook").eq(i).append("<p>"+msg.documents[0].title+"</p>");
            $(".contboxbook").eq(i).append("<p>"+msg.documents[0].authors[0]+"</p>");
            $(".contboxbook").eq(i).append("<p>"+msg.documents[0].sale_price+"원 </p>");
        });
};

$(window).scroll(function(){
    let ws = $(this).scrollTop();
    console.log(ws)

    let sticky = $('.content-3').offset().top;
    if(ws > sticky){
        $('.contbox').css({'position': 'fixed', 'right': '18.4%'});
    }else {
        $('.contbox').css({'position': 'absolute', 'right': '0'});
    }
})