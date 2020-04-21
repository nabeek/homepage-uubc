// Burger menu functionality
$(document).ready(function() {

    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });

// Portfolio item event listener
const project = $(".portfolio-project");

project.click(function() {
  let project = this.textContent;
  $("#portfolio-right-name").text(project);

  if (project === "Earthquake Now") {
    $("#portfolio-screenshot").attr("src", "./assets/images/en screenshot.png");
    $("#portfolio-repo").attr("href", "https://github.com/nabeek/Earthquake-Now");
    $("#portfolio-link").attr("href", "https://nabeek.github.io/Earthquake-Now/");
  } else if (project === "JavaScript Quiz") {
    $("#portfolio-screenshot").attr("src", "./assets/images/quiz screenshot.png");
    $("#portfolio-repo").attr("href", "https://github.com/nabeek/UUBC-Homework4");
    $("#portfolio-link").attr("href", "https://nabeek.github.io/UUBC-Homework4/");
  } else if (project === "Weekly Planner") {
    $("#portfolio-screenshot").attr("src", "./assets/images/planner screenshot.png");
    $("#portfolio-repo").attr("href", "https://github.com/nabeek/UUBC-Homework5");
    $("#portfolio-link").attr("href", "https://nabeek.github.io/UUBC-Homework5/");
  }
  
})


// Auto-update copyright year
$("#copyright-year").text(moment().format("YYYY"))