$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

$(document).ready(function(){
  $(function () {
    $.scrollUp({
          scrollName: 'scrollUp', // Element ID
          scrollDistance: 300, // Distance from top/bottom before showing element (px)
          scrollFrom: 'top', // 'top' or 'bottom'
          scrollSpeed: 300, // Speed back to top (ms)
          easingType: 'linear', // Scroll to top easing (see http://easings.net/)
          animation: 'fade', // Fade, slide, none
          animationSpeed: 200, // Animation in speed (ms)
          scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
          //scrollTarget: false, // Set a custom target element for scrolling to the top
          scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
          scrollTitle: false, // Set a custom <a> title if required.
          scrollImg: false, // Set true to use image
          activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
          zIndex: 2147483647 // Z-Index for the overlay
    });
  });
});


$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').css('background-color', '#303F9F');
          $('#navbar').css('color', '#E8EAF6');
       } else {
          $('#navbar').css('background-color', 'transparent');
          $('#navbar').css('color', '#303F9F');
       }
   });
});