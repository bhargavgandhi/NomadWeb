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


  //Search icon events
  $('.search-close-icon').click(function(){
    $('#search').addClass('hide-search')
  });
  $('.search-icon').click(function(){
    $('#search').toggleClass('hide-search')
  });

  $('.scroll-navs a').click(function(){
    $('.scroll-navs a').removeClass('deactive');
    $(this).toggleClass('deactive');
  });



  //Home Image Mouseover
  var imgTarget;
  $('.home-image-change').mouseover(function(){
    imgTarget = $(this).data('target');
    $('.main-images').addClass("hide-image");
    $('.image-' + imgTarget).addClass("show-image");

  }).mouseout(function(){
    $('.main-images').removeClass("hide-image");
    $('.image-' + imgTarget).removeClass("show-image");
  });


  $('.btn-maps').click(function(){
    var mapTarget = $(this).data('target');
    console.log(mapTarget);
    $('.location-maps').removeClass("show-image");
    $('.location-maps').addClass("hide-image");
    $("."+mapTarget+"-map").removeClass("hide-image").addClass("show-image");

    $('.location-map-list').addClass("hide-list");
    $("."+mapTarget+"-list").removeClass("hide-list");

    $('.btn-maps').removeClass("active-btn");
    $(this).addClass("active-btn");
  });


  var windowWidth = setWidth();
  // if(windowWidth < 1000){
  //   var mainSVG = document.getElementById('mainSVG');
  //    mainSVG.setAttribute("viewBox", "0 0 336 333");
  // }

  if(windowWidth > 999){
    $('.destination-list .map-lists-row .map-lists').css({'opacity': '0.5', 'filter': 'grayscale(100%)', '-webkit-filter': 'grayscale(100%)'})
    $('.map-all-lists').css({'opacity': '1', 'filter': 'grayscale(0%)', '-webkit-filter': 'grayscale(0%)'})

    $('.map-lists .map-btns').click(function() {
      var thisTarget = $(this).data('target-image'),
        thisTargetImg = "." + thisTarget + "-image";

      $('.destination-list .map-lists').css({'opacity': '0.5', 'filter': 'grayscale(100%)', '-webkit-filter': 'grayscale(100%)'})
      $(this).parent().css({'opacity': '1', 'filter': 'grayscale(0%)', '-webkit-filter': 'grayscale(0%)'})

      $('.map-images').css({'opacity': 0});
      $(thisTargetImg).css({'opacity': 1});
    })
  }else{
    $('.map-lists .map-btns').click(function() {
      var thisTarget = $(this).data('target-image'),
        thisTargetImg = "." + thisTarget + "-image";
      $('.map-images').css({'opacity': 0});
      $(thisTargetImg).css({'opacity': 1});
    })

      $('.map-lists ol').slideUp();
      $('.map-lists').click(function(){
        $('.map-lists ol').slideUp();
        $('.map-lists').removeClass('active');

        if($(this).find("ol").is(":hidden")){
          $(this).find("ol").slideToggle();
          $(this).toggleClass('active');
        }
      })
  }





});
