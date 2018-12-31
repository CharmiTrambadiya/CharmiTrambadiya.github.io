$(function () {

    "use strict";



    $(window).on('load', function (event) {
        $(".preloader").delay(500).fadeOut(500);
    });





    $("#search").on('click', function () {
        $(".search-box").slideToggle();
    });




    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });


    var subMenu = $(".sub-menu-bar .navbar-nav .drop-menu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });

        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children(".drop-menu").slideToggle();
            return false
        });

    }



    $('#slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        speed: 600,
    });



    $('#container').imagesLoaded(function () {


        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {

                columnWidth: 1,
            }
        });


        $(".case-menu ul").on('click', 'li', function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
        });


        $(".case-menu ul li").on('click', function (event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            event.preventDefault();
        });

    });

});

