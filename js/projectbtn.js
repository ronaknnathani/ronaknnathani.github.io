$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('.helpr').fadeIn();
    } else {
        $('.helpr').fadeOut();
    }

});