// Burger menu functionality
$(document).ready(function() {

    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });

// Auto-update copyright year
$("#copyright-year").text(moment().format("YYYY"))