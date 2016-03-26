/**
 * Created by DC on 2016-03-24.
 */

if ($('#nextRoute')){
    $(window).scroll(function(){
        if ($(window).scrollTop() + $(window).height() >= ($(document).height()-80) && ($('#nextRoute').val() != null)) {
            console.log("Load new @ scroll: "+window.scrollY);
            Router.go($('#nextRoute').val());
        }
    });
}