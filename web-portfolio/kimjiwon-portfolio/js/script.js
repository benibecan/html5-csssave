// $(function () {
//     var a = $('ul.box li').css('width');
//     $('ul.box li').css('height', a);
// });

//온클릭 이벤트
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
