// 슬라이더
$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3
});
// modal 창
$('.modal-1').click(function(){
    $('.modal').css('display','block')
});
$('.modal').click(function(){
    $('.modal').css('display','none')
});


