$(window).scroll(function() {
if ($(this).scrollTop() > 700){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});