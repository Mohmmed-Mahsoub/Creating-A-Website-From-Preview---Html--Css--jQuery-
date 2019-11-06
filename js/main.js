
/*global $*/
$(function () {

    'use strict';
    
    // links add class active

    $(".navbar ul li a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    // Adjust header height

    var myHeader = $(".header"),
        mySlider = $('.slider'),
        myWindow = $(window);

    myHeader.height(myWindow.height());


    myWindow.resize(function () {

        myHeader.height(myWindow.height());

        mySlider.each(function () {
            $(this).css("paddingTop", (myWindow.height() - $(".slider div").height()) / 2);
        });

    });

    //Adjust slider content to center

    mySlider.each(function () {
        $(this).css("paddingTop", (myWindow.height() - $(".slider div").height()) / 2);
    });

    // trigger the Bx silder

    mySlider.bxSlider({
        pager: false
    });
    
    //auto slider
    
    (function auto() {
        
        $(".outo-slider .active").each(function () {
            
            if (!$(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    auto();
                    
                });
                
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active");
                    $(".outo-slider div").eq(0).addClass("active").fadeIn();
                    auto();
                });
                
            }
            
        });
        
    }());
    
    //trigger Mixitup
    
    $(function () {
        $('#Container').mixItUp();
    });

    //adjust shuffle links

    $(".shuffle li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        
        // Adjust the margin of projects' images
        
        if($(this).data("filter")==="all") {
            $(".row>.mix:nth-child(2)").css("margin-left", "1.5%");
          } else {
              $(".row>.mix:nth-child(2)").css("margin-left", "0");
          }
    });
    
    // Smooth Scroll to Div
    
    $(".navbar ul li a").click(function () {
        $("html , body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        },1000)
    });
    
    // trigger nice scroll
    
    $("body").niceScroll({
        cursorcolor:"#33b297",
        cursorwidth:"10px" ,
        cursorborder: "none",
    });
});