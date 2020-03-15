$(document).ready(function() {
  triggerAnimation();
});

function triggerAnimation() {
  var moreInfo = $('.more-info');
  $.each(moreInfo, function( i, val ) {
    setTimeout(function() {
      $(val).css('display', 'block');
    }, 1500 * i);
  })
}

