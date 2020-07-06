jQuery(document).ready(function($) {

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -70
        }, 1000, 'easeInOutExpo');
      }
    }
  });

$(window).scroll (function(){
  var wScroll = $(this).scrollTop();
  
  if( wScroll > $('.skill').offset().top -350) {
      $(".html").animate({
          width: "87%"
      }, 2500);
      
      $(".js").animate({
          width: "60%"
      }, 2500);
      
      $(".css").animate({
          width: "67%"
      }, 2500);
      
      $(".cplus").animate({
          width: "35%"
      }, 2500);
      
      $(".java").animate({
          width: "40%"
      }, 2500);
      
      $(".c").animate({
          width: "31%"
      }, 2500);
      
      $(".python").animate({
        width: "37%"
      }, 2500);
      
      $(".bash").animate({
        width: "90%"
      }, 2500);
      
      $(".linux").animate({
        width: "97%"
      }, 2500);
  }
});

new WOW().init();

  document.getElementById('themeSwitch').addEventListener('change', function(event){
    (event.target.checked) ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');

    if ( document.getElementById("nav").classList.contains('navbar-light') )
       document.getElementById("nav").classList.toggle('navbar-dark');

    if ( document.getElementById("icons").classList.contains('fa-moon') )
       document.getElementById("icons").classList.toggle('fa-sun');
       
    (event.target.checked) ? document.getElementById("brand").src="assets/img/icon-dark.png" : document.getElementById("brand").src="assets/img/icon.png";
  });

});