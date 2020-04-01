// picture carousel logos java script

$('.company-logos').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: 100,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

var owl = $('.company-logos');
owl.owlCarousel();
// Go to the next item
$('.nxtBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prvBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})






// picture carousel for previous students 

$('.student-info').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}); 

// var owl = $('.student-info');
// owl.owlCarousel();
// // Go to the next item
// $('.nxtBtn-2').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.prvBtn').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);
// })