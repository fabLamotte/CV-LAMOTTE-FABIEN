$(document).ready(function(){
    // Gestion animation du header
    $('header .front-header .photo').fadeIn(1200).addClass('moved');
    $('header .back-header h1').fadeIn(1200).addClass('moved');
    $('header .back-header .subtitle').fadeIn(1200).addClass('moved');
    $('header .header-title h2').fadeIn(1200);

    // Ajout de la map
    $('.localisation .carte').append('<div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=tergnier&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com"></a><br><style>.mapouter{position:relative;text-align:right;height:400px;width:400px;}</style><a href="https://www.embedgooglemap.net">custom google map generator</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:400px;}</style></div></div>');
});
// Gestion de l'animation FadeIn au scroll de l'utilisateur
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    if(scroll > 200){
        $('.age-block').fadeIn(1200);
    }
    if(scroll > 400){
        $('.passions-block').fadeIn(1200);
    }
    if(scroll > 600){
        $('.social-network-block').fadeIn(1200);
    }
    if(scroll > 800){
        $('.experience-block').fadeIn(1200);
    }
    if(scroll > 950){
        $('.studies-block').fadeIn(1200);
    }
    if(scroll > 1500){
        $('.mastering-block').fadeIn(1200);
        levelAnimate();
    }
    if(scroll > 1700){
        $('.localisation-block').fadeIn(1200);
    }
});

function levelAnimate(){
    if(!$('.list-language, .list-framework').hasClass('displayed')){
        $('.list-language, .list-framework').addClass('displayed');
        $('.list-language li, .list-framework li').each(function(){
            var percent = $(this).find('div.data').attr('data-level');
            var bar = $(this).find('div.filling-bar');
            bar.animate({'width': percent +'%'}, 1500).delay(1500).empty().append(percent + "%");
        });
    }
}