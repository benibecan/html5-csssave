// //  ▼ ???? ▼
// $(function () {
//     var a = $('ul.box li').css('width');
//     $('ul.box li').css('height', a);
// });

// 만나서 반가워요 클릭 이벤트(모달)
$(document).ready(function () {
    $('.hi').click(function () {
        $('#himodal').show();
    });
});
function close_pop(flag) {
    $('#himodal').hide();
}

// 모바일 우측 햄버거 메뉴 클릭 이벤트
$(document).ready(function ($) {
    $('.hambtn').on('click', function (event) {
        //.hambtn 버튼 누르면
        $('.ham_bg').show(); // .ham_bg 오픈
    });

    $('body').on('click', function (event) {
        if (event.target.className == 'hamclose material-icons' || event.target.className == 'ham_bg') {
            $('.ham_bg').hide(); //ham_bg클릭시 팝업 삭제
        }
    });
});

// 만나서 반가워요 인풋 체크 이벤트
$(document).ready(function () {
    $('.photo img').css('display', 'block');
    $('.BACK').click(function () {
        $('.photo img').css('display', 'none');
        $('.BACKGROUND').css('display', 'block');
    });
    $('.LI').click(function () {
        $('.photo img').css('display', 'none');
        $('.LIKE').css('display', 'block');
    });
    $('.AL').click(function () {
        $('.photo img').css('display', 'none');
        $('.BACKGROUND').css('display', 'block');
        $('.LIKE').css('display', 'block');
    });
});

// works html연결
$(function () {
    $('.aesop').click(function () {
        url = '/web-portfolio/kimjiwon-portfolio/aesop.html';
        window.open(url);
    });
    $('.djcentum').click(function () {
        url = '/web-portfolio/kimjiwon-portfolio/djcentum.html';
        window.open(url);
    });
    $('.pohang').click(function () {
        url = '/web-portfolio/kimjiwon-portfolio/pohang.html';
        window.open(url);
    });
    $('.samyang').click(function () {
        url = '/web-portfolio/kimjiwon-portfolio/samyang.html';
        window.open(url);
    });
});

// // works 새창 연결
// $(function () {
//     $('.aesop').click(function () {
//         url = '/web-portfolio/0810-aesop-redesign/main.html';
//         window.open(url);
//     });
//     $('.djcentum').click(function () {
//         url = '/web-portfolio/0824-djcentum/index.html';
//         window.open(url);
//     });
//     $('.samyang').click(function () {
//         url = '/web-portfolio/0822-samyangfood-redesign/index.html';
//         window.open(url);
//     });
// });

// aboutem 똑똑 호버 말풍선
$(document).ready(function () {
    $('.email').mouseover(function () {
        $('.ebubble').css('display', 'block');
    });
    $('.email').mouseout(function () {
        $('.ebubble').css('display', 'none');
    });
    $('.ebubble').mouseover(function () {
        $('.ebubble').css('display', 'block');
    });
    $('.ebubble').mouseout(function () {
        $('.ebubble').css('display', 'none');
    });
});
