$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        autoPlay: 3000,
        items: 6,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        center: true,
        nav: true,
        loop: true,
        responsive: {
            600: {
                items: 4
            }
        }






    });
});
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });


    