$(document).ready(function(){
    $(".product-carousel").owlCarousel({
        items:2,
        loop:true,
        margin:15,
        autoplay:true,
        autoplayTimeout:3500,
        autoplayHoverPause:true,
        responsive:{
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            922: {
                items: 4
            }
        }
    });

    $(".product-related").owlCarousel({
        items:2,
        loop:true,
        margin:15,
        responsive:{
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            922: {
                items: 4
            }
        }
    });

    $(".product-side").owlCarousel({
        items:2,
        loop:true,
        margin:15,
        autoplay:true,
        autoplayTimeout:3500,
        autoplayHoverPause:true,
        responsive:{
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            768: {
                items: 1
            }
        }
    });
    
    $('.next').click(function(){
        var _target = $(this).attr('data-target');
        $(_target).trigger('next.owl.carousel');
    });
    
    $('.prev').click(function(){
        var _target = $(this).attr('data-target');
        $(_target).trigger('prev.owl.carousel');
    });
    
    $('.next, .prev').on('mouseenter',function(){
        var _target = $(this).attr('data-target');
        $(_target).trigger('stop.owl.autoplay');
    });
    
    $('.next, .prev').on('mouseleave',function(){
        var _target = $(this).attr('data-target');
        $(_target).trigger('play.owl.autoplay');
    });

    $('.caption').matchHeight();

    $('.showtip').tooltip();

    $('.plus').click(function(){
        var plusNum = parseInt($('#num').val())+1;
        $('#num').val(plusNum);
    });
    
    $('.minus').click(function(){
        var minusNum = parseInt($('#num').val())-1;
        $('#num').val(minusNum>0?minusNum:1);
    });

    $('.scroll-to').click(function(e){
        e.preventDefault();
        var _target = $(this).attr('href');
        console.log(_target);
        $('.nav-tabs a[href="'+_target+'"]').click();
        $('html, body').animate({
            scrollTop: $(_target).offset().top,
        }, 1000);
    });
});