var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    loop: false,
    initialSlide: 1,
    navigation: {
        nextEl: ".swiper-btn.btn-next-product",
        prevEl: ".swiper-btn.btn-prev-product",
    },
    speed: 1000,
});

var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 4,
        },
    },
    speed: 1000,
    // autoplay: {
    //     delay: 3000,
    // },
});

var swiper = new Swiper(".sl-post", {
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 3,
        },
    },
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
});

var swiper = new Swiper(".sl-post", {
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 3,
        },
    },
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
});

var swiper = new Swiper(".sl-product-4", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 30,
    speed: 1000,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".sl-product-2", {
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

var swiper = new Swiper(".sl-product-3", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 38,
    speed: 1000,
    direction: 'horizontal',
    // autoplay: {
    //     delay: 2000,
    // },
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
            slidesPerView: 5,
        },
    },
});  
