$(document).ready(function() {
  topSlider();
  itemCarousel();  
});

function topSlider(){
  if ($("#slider").length) {
    $("#slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      autoPlay : 5000,
      singleItem:true 
    });
  }
}

function itemCarousel(){
  if ($(".pgwSlider").length) {
    $(".pgwSlider").pgwSlider({
      autoSlide : false,
      listPosition : 'left',
      displayControls: true
    });
  }
}