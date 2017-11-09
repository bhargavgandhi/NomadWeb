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
        $("body").addClass("fadeIn");
      });
    });
  } else {
    $(window).load(function() {
      $("#preloader").fadeOut("fast", function() {
        $(this).remove();
        $("body").removeClass("Hide");
        $("body").addClass("fadeIn");
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
    $('header').addClass('animate');

    $('.navbar-collapse').toggleClass('slideRightHeading');

    $('header .wrapper, .navbar-collapse, #mainNav, footer, .nav-toggle, .nav-search').removeClass('animation-delay');
  });

  $('a[href^="#"]').click(function (event) {
    // The id of the section we want to go to.
    var id = $(this).attr("href");

    // An offset to push the content down from the top.
    var offset = 0;

    // Our scroll target : the top position of the
    // section that has the id referenced by our href.
    var target = $(id).offset().top - offset;

    // The magic...smooth scrollin" goodness.
    $("html, body").animate({
      scrollTop: target
    }, 500);

    //prevent the page from jumping down to our section.
    event.preventDefault();
  });

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


  //Search icon events
  $('.search-close-icon').click(function(){
    $('#search').addClass('hide-search')
  });
  $('.search-icon').click(function(){
    $('#search').removeClass('hide-search')
  });



  //Home Image Mouseover

  $('.home-image-c').mouseover(function(){
    $('.home-image-a1, .home-image-f1, .home-image-h1').addClass("hide-image");
    $('.home-image-a2, .home-image-f2, .home-image-h2').addClass("show-image");

  }).mouseout(function(){
    $('.home-image-a1, .home-image-f1, .home-image-h1').removeClass("hide-image");
    $('.home-image-a2, .home-image-f2, .home-image-h2').removeClass("show-image");
  })

});
