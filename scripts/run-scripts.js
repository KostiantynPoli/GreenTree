// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
// });
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        autoplayTimeout: 6500,
        autoplaySpeed: 1000,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            1100: {
                items: 4
            },
            1024:{
                items: 3
            },
            800: {
                items: 2
            },
            740: {
                items: 2
            }

        }
    })
})