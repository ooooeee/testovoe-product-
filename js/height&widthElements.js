

if (document.body.clientWidth > 800){
    var screen_height  = window.innerHeight;
    $('.sec').css({height: String(screen_height) + 'px'})
}else{
    $('#sec-one').css({heigth: String(screen_height) + 'px'})
}
