$(document).ready(function() {
    $('.comment').hide();
    $('.otp').hide();
});


$('#sendotp').click(function(){
    $('.otpmessage').show();
    $('.otp').show();
    $('#sendotp').addClass('d-none');
    $('#submitotp').removeClass('d-none');
});

$('#submitotp').click(function(){
    $('.otp').hide();
    $('.comment').show();
    $('.otpmessage').hide();
    $('#submitotp').addClass('d-none');
    $('#submitform').removeClass('d-none');
});