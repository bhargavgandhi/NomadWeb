/* ===========================
   Author: Bhargav Gandhi (BG)
   Description: functions.js
   =========================== */
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}


function checkBrowsers(){

    var version = detectIE();

    if (version === true) {
      $("body").addClass("itsIE");
    }else if (version === false){
      if(isSafari){
        $("body").addClass("itsSafari");
      }
    }
}

function setHeight() {
  return $(window).innerHeight();
};

function setWidth() {
  return $(window).innerWidth();
};

function homePageAnimation() {
  $('section.container').addClass('hidden');
  var windowWidth = setWidth();
  if(windowWidth>999) $('html,body').css('height', '100%');
  $('body').addClass('black');

  $('#skipIntro1').click(function() {
    $("#introVideo")[0].pause();
    $('#introVideoHome').fadeOut(1000);

    setTimeout(function() {
      var elem = document.getElementById('introVideoHome');
      elem.parentNode.removeChild(elem);
    }, 500);

    setTimeout(function() {
      $('section.container').removeClass('hidden');
      $("body").removeClass("Hide");
      $("body").addClass("fadeIn");
      $('body').removeClass('black');
    }, 1000);

    if ($('body').hasClass('home')) {
      setTimeout(function(){
        $('header').removeClass('closeHead');
        $('body.home .left-blocks, body.home .left-blocks2, body.home .right-blocks, body.home .right-blocks2').css({
          'animation-play-state' : 'paused',
          'transform': 'translate3d(0, 0, 0)',
          '-webkit-transform': 'translate3d(0, 0, 0)',
          'animation' : 'unset'
        })
      }, 4000);
    }

  });

  setTimeout(function() {
    document.getElementById('introVideo').addEventListener('ended', myHandler, false);

    function myHandler() {
      $("#introVideo")[0].pause();

      setTimeout(function() {
        $('#introVideoHome').fadeOut(1500);
        //$('#introVideoHome').css('display', 'none');
      }, 2000);
      setTimeout(function() {
        $('#introVideoHome').css('display', 'none');
      }, 3000);

      setTimeout(function() {
        var elem = document.getElementById('introVideoHome');
        elem.parentNode.removeChild(elem);
      }, 3000);

      setTimeout(function() {
        $("body").removeClass("Hide");
        $("body").addClass("fadeIn");
        $('section.container').removeClass('hidden');
        $('body').removeClass('black');

      }, 3000);

      if ($('body').hasClass('home')) {
        setTimeout(function(){
          $('header').removeClass('closeHead');
          $('body.home .left-blocks, body.home .left-blocks2, body.home .right-blocks, body.home .right-blocks2').css({
            'animation-play-state' : 'paused',
            'transform': 'translate3d(0, 0, 0)',
            '-webkit-transform': 'translate3d(0, 0, 0)',
            'animation' : 'unset'
          })
        }, 6000);
      }

    }
  }, 1000);
}


function endVideo() {
  $("#introVideo")[0].pause();
  $('#introVideoHome').fadeOut();
  $('#introVideoHome').css('display', 'none');

  setTimeout(function() {
    var elem = document.getElementById('introVideoHome');
    elem.parentNode.removeChild(elem);
  }, 1000);

  setTimeout(function() {
    $("body").removeClass("Hide");
    $("body").addClass("fadeIn");
    $('section.container').removeClass('hidden');
    $('body').removeClass('black');
  }, 1000);

}
