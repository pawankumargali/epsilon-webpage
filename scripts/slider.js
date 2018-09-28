//Product jquery handle
$("#product-jquery-handle").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    pagination:false,
    responsive:{
      0 : {
            items:1
    },
    // breakpoint from 480 up
    480 : {
            items:2
    },
    // breakpoint from 768 up
    768 : {
            items:4
    },
    //breakpoint from 1000 up
        1000:{
            items:4
        }
    }
})


//Blog posts jquery handle
$("#blog-jquery-handle").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    pagination:false,
    responsive:{
      0 : {
            items:1
    },
    // breakpoint from 480 up
    480 : {
            items:1
    },
    // breakpoint from 768 up
    768 : {
            items:2
    },
    //breakpoint from 1000 up
        1000:{
            items:2
        }
    }
})