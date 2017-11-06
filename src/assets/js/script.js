/* ===========================
   Author: Bhargav Gandhi (BG)
   Description: script.js
   =========================== */

$(function() {
  checkBrowsers();
  var itsIE = detectIE();
  if (itsIE === false) {
    $(window).load(function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove();
        $("body").removeClass("Hide");
      });
    });
  } else {
    $(window).load(function() {
      $("#preloader").fadeOut("fast", function() {
        $(this).remove();
        $("body").removeClass("Hide");
        if (!$('body').hasClass('home')) {
          $("body").addClass("fadeIn");
        }
      });
    });
  }

  $("body").addClass("Hide");
  $("#preloader").removeClass("Hide");

  $("#nav-icon3").click(function() {
    $("#nav-icon3").toggleClass("open");
  });

  $('.nav-toggle').click(function() {
    $('header').toggleClass('closeHead');
    $('.navbar-collapse').toggleClass('slideRightHeading');

    $('header .wrapper, .navbar-collapse, #mainNav, footer, .nav-toggle').removeClass('animation-delay');
  });

  $('.homeSlides').bxSlider({adaptiveHeight: true, mode: 'fade', captions: true, pager: true, pagerType: 'short'});

  $('.map-lists-row .map-lists').css({'opacity': '0.5', 'filter': 'grayscale(100%)', '-webkit-filter': 'grayscale(100%)'})
  $('.map-all-lists').css({'opacity': '1', 'filter': 'grayscale(0%)', '-webkit-filter': 'grayscale(0%)'})

  $('.map-lists .map-btns').click(function() {
    var thisTarget = $(this).data('target-image'),
      thisTargetImg = "." + thisTarget + "-image";

    $('.map-lists').css({'opacity': '0.5', 'filter': 'grayscale(100%)', '-webkit-filter': 'grayscale(100%)'})
    $(this).parent().css({'opacity': '1', 'filter': 'grayscale(0%)', '-webkit-filter': 'grayscale(0%)'})

    $('.map-images').css({'opacity': 0});
    $(thisTargetImg).css({'opacity': 1});
  })

});
