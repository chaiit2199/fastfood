var swiper = new Swiper(".mySwiper1", { 
    spaceBetween: 35, 
    loop: true,  
    autoplay: {
    delay: 3000, 
    },  
    speed: 1000, 
});

var swiper =  new Swiper(".sl-product-1", {
    slidesPerView: 1,
    loop: false,  
    spaceBetween: 30, 
    speed: 1000,  
    direction: 'horizontal',
    navigation: {
        nextEl: ".btn-next-product-1",
        prevEl: ".btn-prev-product-1",
    }, 
    breakpoints: {
        0: {
            slidesPerView: 1,
        }, 
        750: {
            slidesPerView: 2,
        }, 
        1280: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});  

var swiper =  new Swiper(".sl-product-2", {
    slidesPerView: 1,
    loop: true,  
    spaceBetween: 0, 
    speed: 1000,  
    direction: 'horizontal', 
    autoplay: {
    delay: 2000, 
    },  
    breakpoints: {
        0: {
            slidesPerView: 1,
        }, 
        400: {
            slidesPerView: 1,
        }, 
        750: {
            slidesPerView: 2,
        }, 
        1280: {
            slidesPerView: 4,
        },
    },
});  
