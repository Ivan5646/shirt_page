  // did not work
  if ($(window).width() < 1050) {
   $(".slider").owlCarousel({
    scrollPerPage: false,
    items: 1
   });
  }else{
    $(".slider").owlCarousel({
      navigation: true,
      items: 3, /* if the default owl-item is not changed it works */
      pagination: false,
      navigationText: ["<img src='images/left_arrow.png'>", "<img src='images/right_arrow.png'>"],
      responsive: false,
      scrollPerPage: false /* true: if you drag with the mouse it scrolls all items at once */   
    });
  }
  
// slider all messed up with this code  
    $(".slider").owlCarousel({
    navigation: true,
    items: 3, /* if the default owl-item is not changed it works */
    pagination: false,
    navigationText: ["<img src='images/left_arrow.png'>", "<img src='images/right_arrow.png'>"],
    responsive: false,
    scrollPerPage: true, /* true: if you drag with the mouse it scrolls all items at once */  
    if($(window).width() < 1050) {
      scrollPerPage: false
    }
  });







// stakcoverflow
  $(".slider").owlCarousel({
    navigation: true,
    items: 3, 
    pagination: false,
    navigationText: ["<img src='images/left_arrow.png'>", "<img src='images/right_arrow.png'>"],
    responsive: false,
    scrollPerPage: true   
  });


if ($(window).width() < 1050) {
   $(".slider").owlCarousel({
    scrollPerPage: false,
    items: 1
  });
 }else{
  $(".slider").owlCarousel({
    navigation: true,
    items: 3, 
    pagination: false,
    navigationText: ["<img src='images/left_arrow.png'>", "<img src='images/right_arrow.png'>"],
    responsive: false,
    scrollPerPage: false /
  });
}
