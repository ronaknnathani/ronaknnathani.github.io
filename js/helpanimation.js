$(function () {
    $("#bt").click(function () {
        $(".help").toggleClass("help-hide");
    });
});

$('.help a').click(function () {
    // Do your stuff.
    // The below line prevents the 'href' on the anchor to be followed.
    return false;
});