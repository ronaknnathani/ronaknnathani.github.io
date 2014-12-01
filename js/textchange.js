function nextMsg(i) {
    if (messages.length == i) {
        i = 0;
    }
    $('#message').html(messages[i]).fadeIn(500).delay(1000).fadeOut(500, function () {
        nextMsg(i + 1);
    });
};

var messages = [
    "Health Tech",
    "Medical Devices",
    "Biotech",
    "Pharmaceuticals",
    "Mobile Health"
];

$('#message').hide();

nextMsg(0);