// // //  ▼ ???? ▼
// // $(function () {
// //     var a = $('ul.box li').css('width');
// //     $('ul.box li').css('height', a);
// // });

// // 만나서 반가워요 클릭 이벤트(모달)
// $(document).ready(function () {
//     $('.hi').click(function () {
//         $('#himodal').show();
//     });
// });
// function close_pop(flag) {
//     $('#himodal').hide();
// }

// // 모바일 우측 햄버거 메뉴 클릭 이벤트
// $(document).ready(function ($) {
//     $('.hambtn').on('click', function (event) {
//         //.hambtn 버튼 누르면
//         $('.ham_bg').show(); // .ham_bg 오픈
//     });

//     $('body').on('click', function (event) {
//         if (event.target.className == 'hamclose material-icons' || event.target.className == 'ham_bg') {
//             $('.ham_bg').hide(); //ham_bg클릭시 팝업 삭제
//         }
//     });
// });

// // 만나서 반가워요 인풋 체크 이벤트
// $(document).ready(function () {
//     $('.photo img').css('display', 'block');
//     $('.BACK').click(function () {
//         $('.photo img').css('display', 'none');
//         $('.BACKGROUND').css('display', 'block');
//     });
//     $('.LI').click(function () {
//         $('.photo img').css('display', 'none');
//         $('.LIKE').css('display', 'block');
//     });
//     $('.AL').click(function () {
//         $('.photo img').css('display', 'none');
//         $('.BACKGROUND').css('display', 'block');
//         $('.LIKE').css('display', 'block');
//     });
// });

// // works html연결
// $(function () {
//     $('.aesop').click(function () {
//         url = '/web-portfolio/kimjiwon-portfolio/aesop.html';
//         window.open(url);
//     });
//     $('.djcentum').click(function () {
//         url = '/web-portfolio/kimjiwon-portfolio/djcentum.html';
//         window.open(url);
//     });
//     $('.pohang').click(function () {
//         url = '/web-portfolio/kimjiwon-portfolio/pohang.html';
//         window.open(url);
//     });
//     $('.samyang').click(function () {
//         url = '/web-portfolio/kimjiwon-portfolio/samyang.html';
//         window.open(url);
//     });
// });

// // // works 새창 연결
// // $(function () {
// //     $('.aesop').click(function () {
// //         url = '/web-portfolio/0810-aesop-redesign/main.html';
// //         window.open(url);
// //     });
// //     $('.djcentum').click(function () {
// //         url = '/web-portfolio/0824-djcentum/index.html';
// //         window.open(url);
// //     });
// //     $('.samyang').click(function () {
// //         url = '/web-portfolio/0822-samyangfood-redesign/index.html';
// //         window.open(url);
// //     });
// // });

// // aboutem 똑똑 호버 말풍선
// $(document).ready(function () {
//     $('.email').mouseover(function () {
//         $('.ebubble').css('display', 'block');
//     });
//     $('.email').mouseout(function () {
//         $('.ebubble').css('display', 'none');
//     });
//     $('.ebubble').mouseover(function () {
//         $('.ebubble').css('display', 'block');
//     });
//     $('.ebubble').mouseout(function () {
//         $('.ebubble').css('display', 'none');
//     });
// });

/* calendar */
$(function () {
    function c() {
        p();
        var e = h();
        var r = 0;
        var u = false;
        l.empty();
        while (!u) {
            if (s[r] == e[0].weekday) {
                u = true;
            } else {
                l.append('<div class="blank"></div>');
                r++;
            }
        }
        for (var c = 0; c < 42 - r; c++) {
            if (c >= e.length) {
                l.append('<div class="blank"></div>');
            } else {
                var v = e[c].day;
                var m = g(new Date(t, n - 1, v)) ? '<div class="today">' : '<div>';
                l.append(m + '' + v + '</div>');
            }
        }
        var y = o[n - 1];
        a.css('background-color', y)
            .find('h1')
            .text(i[n - 1] + ' ' + t);
        f.find('div').css('color', y);
        l.find('.today').css('background-color', y);
        d();
    }
    function h() {
        var e = [];
        for (var r = 1; r < v(t, n) + 1; r++) {
            e.push({ day: r, weekday: s[m(t, n, r)] });
        }
        return e;
    }
    function p() {
        f.empty();
        for (var e = 0; e < 7; e++) {
            f.append('<div>' + s[e].substring(0, 3) + '</div>');
        }
    }
    function d() {
        var t;
        var n = $('#calendar').css('width', e + 'px');
        n.find((t = '#calendar_weekdays, #calendar_content'))
            .css('width', e + 'px')
            .find('div')
            .css({ width: e / 7 + 'px', height: e / 7 + 'px', 'line-height': e / 7 + 'px' });
        n.find('#calendar_header')
            .css({ height: e * (1 / 7) + 'px' })
            .find('i[class^="icon-chevron"]')
            .css('line-height', e * (1 / 7) + 'px');
    }
    function v(e, t) {
        return new Date(e, t, 0).getDate();
    }
    function m(e, t, n) {
        return new Date(e, t - 1, n).getDay();
    }
    function g(e) {
        return y(new Date()) == y(e);
    }
    function y(e) {
        return e.getFullYear() + '/' + (e.getMonth() + 1) + '/' + e.getDate();
    }
    function b() {
        var e = new Date();
        t = e.getFullYear();
        n = e.getMonth() + 1;
    }
    var e = 480;
    var t = 2013;
    var n = 9;
    var r = [];
    var i = [
        'JANUARY',
        'FEBRUARY',
        'MARCH',
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
    ];
    var s = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var o = ['#111', '#111', '#111', '#111', '#111', '#111', '#111', '#111', '#111', '#111', '#111', '#111'];
    var u = $('#calendar');
    var a = u.find('#calendar_header');
    var f = u.find('#calendar_weekdays');
    var l = u.find('#calendar_content');
    b();
    c();
    a.find('i[class^="icon-chevron"]').on('click', function () {
        var e = $(this);
        var r = function (e) {
            n = e == 'next' ? n + 1 : n - 1;
            if (n < 1) {
                n = 12;
                t--;
            } else if (n > 12) {
                n = 1;
                t++;
            }
            c();
        };
        if (e.attr('class').indexOf('left') != -1) {
            r('previous');
        } else {
            r('next');
        }
    });
});
/* check click event */
$(document).ready(function () {
    $('#calendar').hide();
    $('.shadow').hide();
    $('.cbtn').click(function () {
        $('#calendar').toggle();
        $('.shadow').toggle();
    });
});

/* link conect */
$(function () {
    $('.num1 img').click(function () {
        url = '/exhibition/gallery.html';
        window.open(url, '_self');
    });
    $('.logo img').click(function () {
        url = '/exhibition/index.html';
        window.open(url, '_self');
    });
});
