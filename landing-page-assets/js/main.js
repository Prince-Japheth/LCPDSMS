
(function ($) {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {
        const currentPage = window.location.pathname.split('/').pop().split('?')[0] || 'index.html';
        console.log('Current page:', currentPage); // Debugging
    
        const menuItems = document.querySelectorAll('.sub-menu li');
        console.log('Menu items:', menuItems); // Debugging
    
        menuItems.forEach(item => {
            const link = item.querySelector('a');
            if (link) {
                console.log('Checking link:', link.getAttribute('href')); // Debugging
                if (link.getAttribute('href') === currentPage) {
                    item.classList.add('active');
                }
            }
        });
    });
    

    //Toggle Js
		$('.rr-checkout-login-form-reveal-btn').on('click', function () {
			$('#rrReturnCustomerLoginForm').slideToggle(400);
		});

        $('.rr-checkout-coupon-form-reveal-btn').on('click', function () {
			$('#rrCheckoutCouponForm').slideToggle(400);
		});

    var windowOn = $(window);

/*======================================
    Preloader activation
========================================*/
    $(window).on("load", function (event) {
        $("#preloader").delay(1000).fadeOut(500);
    });

    $(".preloader-close").on("click", function () {
        $("#preloader").delay(0).fadeOut(500);
    });

    $(document).ready(function () {

        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
            $('body').addClass('firefox');
        }
        
        var header = $(".header"),
            stickyHeader = $(".primary-header");

        function menuSticky(w) {
            if (w.matches) {
                
                $(window).on("scroll", function () {
                    var scroll = $(window).scrollTop();
                    if (scroll >= 110) {
                        stickyHeader.addClass("fixed");
                    } else {
                        stickyHeader.removeClass("fixed");
                    }
                });
                if ($(".header").length > 0) {    
                    var  headerHeight = document.querySelector(".header"),
                        setHeaderHeight = headerHeight.offsetHeight;	
                    header.each(function () {
                        $(this).css({
                            'height' : setHeaderHeight + 'px'
                        });
                    });
                }
            }
        }

        var minWidth = window.matchMedia("(min-width: 992px)");
        if (header.hasClass("sticky-active")) {
            menuSticky(minWidth);
        }

        //Mobile Menu Js
        $(".mobile-menu-items").meanmenu({
            meanMenuContainer: ".side-menu-wrap",
            meanScreenWidth: "992",
            meanMenuCloseSize: "30px",
            meanRemoveAttrs: true,
            meanExpand: ['<i class="fa-solid fa-caret-down"></i>'],
        });

        // Mobile Sidemenu
        $(".mobile-side-menu-toggle").on("click", function () {
            $(".mobile-side-menu, .mobile-side-menu-overlay").toggleClass("is-open");
        });

        $(".mobile-side-menu-close, .mobile-side-menu-overlay").on("click", function () {
            $(".mobile-side-menu, .mobile-side-menu-overlay").removeClass("is-open");
        });

        // Popup Search Box
        $(function () {
            $("#popup-search-box").removeClass("toggled");

            $(".dl-search-icon").on("click", function (e) {
                e.stopPropagation();
                $("#popup-search-box").toggleClass("toggled");
                $("#popup-search").focus();
            });

            $("#popup-search-box input").on("click", function (e) {
                e.stopPropagation();
            });

            $("#popup-search-box, body").on("click", function () {
                $("#popup-search-box").removeClass("toggled");
            });
        });

        // Popup Sidebox
        function sideBox() {
            $("body").removeClass("open-sidebar");
            $(document).on("click", ".sidebar-trigger", function (e) {
                e.preventDefault();
                $("body").toggleClass("open-sidebar");
            });
            $(document).on("click", ".sidebar-trigger.close, #sidebar-overlay", function (e) {
                e.preventDefault();
                $("body.open-sidebar").removeClass("open-sidebar");
            });
        }

        sideBox();

        // Venobox Video
        new VenoBox({
            selector: ".video-popup, .img-popup",
            bgcolor: "transparent",
            numeration: true,
            infinigall: true,
            spinner: "plane",
        });

        // Data Background
        $("[data-background").each(function () {
            $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
        });

        // Custom Cursor
        $("body").append('<div class="mt-cursor"></div>');
        var cursor = $(".mt-cursor"),
            linksCursor = $("a, .swiper-nav, button, .cursor-effect"),
            crossCursor = $(".cross-cursor");

        $(window).on("mousemove", function (e) {
            cursor.css({
                transform: "translate(" + (e.clientX - 15) + "px," + (e.clientY - 15) + "px)",
                visibility: "inherit",
            });
        });

        /* Odometer */
        $(".odometer").waypoint(
            function () {
                var odo = $(".odometer");
                odo.each(function () {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            },
            {
                offset: "80%",
                triggerOnce: true,
            }
        );

        // Wow JS Active
        new WOW().init();

        // Nice Select Js
        $("select").niceSelect();
        

        // Course Carousel
        var swiperCourse = new Swiper(".course-carousel", {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".course-section .swiper-prev",
                prevEl: ".course-section .swiper-next",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
            },
        });

        // Course Carousel
        var swiperCourse = new Swiper(".course-feature-carosuel", {
            slidesPerView: 4,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".course-feature .swiper-prev",
                prevEl: ".course-feature .swiper-next",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
            },
        });

        // Course Carousel
        var swiperEvent = new Swiper(".event-carousel", {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".event-section .swiper-prev",
                prevEl: ".event-section .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            },
        });

        // Testi Carousel
        var swiperTesti = new Swiper(".testi-carousel", {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".course-feature .swiper-prev",
                prevEl: ".course-feature .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            },
        });

        // Testi Carousel
        var swiperTesti = new Swiper(".testi-carousel-2", {
            slidesPerView: 1,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".testi-carousel-wrap-2 .swiper-prev",
                prevEl: ".testi-carousel-wrap-2 .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            },
        });

        // Testi Carousel
        var swiperTesti = new Swiper(".testi-carousel-3", {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".testi-carousel-wrap-2 .swiper-prev",
                prevEl: ".testi-carousel-wrap-2 .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
            },
        });

        // Testi Carousel
        var swiperPostthumb= new Swiper(".post-thumb-carousel", {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            grabcursor: true,
            navigation: {
                nextEl: ".post-thumb-carousel .swiper-prev",
                prevEl: ".post-thumb-carousel .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            },
        });

        // Testi Carousel
        var swiperTesti = new Swiper(".testi-carousel-4", {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            },
        });

        // Sponsor Carousel
        var swiperSponsor = new Swiper(".sponsor-carousel", {
            slidesPerView: 4,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            grabcursor: true,
            speed: 600,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
            },
        });

        // Sponsor Carousel
        var swiperShop = new Swiper(".shop-carousel", {
            slidesPerView: 4,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            grabcursor: true,
            speed: 600,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
            },
        });

        // Project Carousel
        var swiperCourse = new Swiper(".course-carousel-2", {
            slidesPerView: 3,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: '.course-carousel-top .swiper-prev',
                prevEl: '.course-carousel-top .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                }
            },
        });


        // Lang Exam Carousel
        var swiperExam = new Swiper(".lang-exam-carousel", {
            slidesPerView: 1,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            loop: true,
            autoplay: true,
            grabcursor: true,
            navigation: {
                nextEl: '.lang-exam-carousel-wrap .swiper-prev',
                prevEl: '.lang-exam-carousel-wrap .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 1,
                }
            },
        });

        //Swiper Slider For Shop
        var swiper = new Swiper(".product-gallary-thumb", {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
            direction: 'vertical',
        });
        
        var swiper2 = new Swiper(".product-gallary", {
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: ".swiper-nav-next",
                prevEl: ".swiper-nav-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });

        // Date Range Picker
        $(function () {
            $('input[name="daterange"]').daterangepicker(
                {
                    opens: "center",
                },
                function (start, end, label) {
                    console.log(
                        "A new date selection was made: " + start.format("YYYY-MM-DD") + " to " + end.format("YYYY-MM-DD")
                    );
                }
            );
        });

        $(function () {
            $('input[name="birthday"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
            });
        });

        // Scroll To Top
        var scrollTop = $("#scrollup");
        $(window).on("scroll", function () {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
                $("#scrollup").removeClass("hide");
                $("#scrollup").addClass("show");
            } else {
                $("#scrollup").removeClass("show");
                $("#scrollup").addClass("hide");
            }
        });

        $(scrollTop).on("click", function () {
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                0
            );
            return false;
        });
    });
})(jQuery);
