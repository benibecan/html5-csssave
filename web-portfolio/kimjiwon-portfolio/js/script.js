// //  ▼ ???? ▼
// $(function () {
//     var a = $('ul.box li').css('width');
//     $('ul.box li').css('height', a);
// });

//  ▼ 모달 이벤트 ▼
// $(document).ready(function () {
//     //팝업 모달
//     $('.hi').click(function () {
//         $('#himodal').show();
//     });
// });
// //팝업 Close 기능
// function close_pop(flag) {
//     $('#himodal').hide();
// }

$(document).ready(function () {
    //팝업 모달
    $('.hi').click(function () {
        $('#himodal').show();
    });
});
//팝업 Close 기능
function close_pop(flag) {
    $('#himodal').hide();
}
// $(document).on('click', '.hi', function () {
//     alert('동작확인');
// });

// function Modal(props) {
//     useEffect(() => {
//         // modal이 떠 있을 땐 스크롤 막음
//         disableScroll();
//         // modal 닫히면 다시 스크롤 가능하도록 함
//         return () => enableScroll();
//     }, []);

//     // 생략
// }
// export default Modal;

// 모바일 햄버거 메뉴 팝업
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
// 만나서 반가워요 클릭시 인풋 체크 이미지 조절
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
