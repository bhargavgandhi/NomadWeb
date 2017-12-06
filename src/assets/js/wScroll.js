/* ===========================
   Author: Bhargav Gandhi (BG)
   Description: wScroll.js
   =========================== */
var count1 = 0;
$(window).scroll(function() {
  var wScroll = $(this).scrollTop(),
    fadeClass = "fadeInUp";
  if ($('body').hasClass('neighborhood')) {
    if (wScroll > $('#main').offset().top - ($(window).height() / 1.4)) {
      count1++;
      if (count1 === 1) {
        console.log('Maps');
        $('body.neighborhood .left-blocks, body.neighborhood .left-blocks2, body.neighborhood .right-blocks, body.neighborhood .right-blocks2').css({
          'animation-play-state' : 'running'
        })
      }
    }
  }
});
