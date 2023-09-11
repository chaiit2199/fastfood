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
