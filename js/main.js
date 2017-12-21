var xhr = $.get("http://api.giphy.com/v1/gifs/random?api_key=1FWdZ57xAx5Xds5Ziy50DQpfrZGAv4b4");
xhr.done(function(data) {
    var img = data.data.fixed_height_downsampled_url;
    $('.card img').attr('src', img);
});

$(".contact-card_back").on('click', function showPopup() {
    $(".popup").fadeIn(800); 
    $('body').addClass('overflowhidecs');
});
$(".popup_bg").click(function() { 	   
    $(".popup").fadeOut(800); 
    $('body').removeClass('overflowhidecs');
});
$('.close').click(function() {    
    $(".popup").fadeOut(800);
    $('body').removeClass('overflowhidecs');
});

$('.slider').bxSlider({
mode: 'fade',
   captions: true,
   auto: true,
   mode: 'fade',
   pagerCustom: '#bx-pager',
   adaptiveHeight: true,
   responsive: true,
   nextText: '',
   prevText: '',
});

$(window).on('load', function() {
    var preloader = $('#p_prldr'),
        svg_anm = preloader.find('.svg_anm');
    svg_anm.fadeOut();
    preloader.delay(500).fadeOut('slow');
});