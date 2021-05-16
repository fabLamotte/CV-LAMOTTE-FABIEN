$(document).ready(function(){
    // Gestion animation du header
    $('header .front-header .photo').fadeIn(1200).addClass('moved');
    $('header .back-header h1').fadeIn(1200).addClass('moved');
    $('header .back-header .subtitle').fadeIn(1200).addClass('moved');
    $('header .header-title h2').fadeIn(1200);

    // Ajout de la map
    $('section .infos-persos .presentation .localisation .carte').append('<div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=tergnier&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com"></a><br><style>.mapouter{position:relative;text-align:right;height:400px;width:400px;}</style><a href="https://www.embedgooglemap.net">custom google map generator</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:400px;}</style></div></div>');
});
