$(document).ready(function() {
 
  $("#slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      autoPlay : 5000,
      
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

$(document).ready(function() {
    $('.pgwSlider').pgwSlider({
      autoSlide : false,
      listPosition : 'left',
      displayControls: true


    });
});