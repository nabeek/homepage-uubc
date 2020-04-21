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
  let repo = $("#portfolio-repo");
  let link = $("#portfolio-link");
  let screenshot = $("#portfolio-screenshot");

  $("#portfolio-right-name").text(project);
  repo.show();
  link.show();
  screenshot.show();

  if (project === "Earthquake Now") {
    screenshot.attr("src", "./assets/images/en screenshot.png");
    repo.attr("href", "https://github.com/nabeek/Earthquake-Now");
    link.attr("href", "https://nabeek.github.io/Earthquake-Now/");
  } else if (project === "JavaScript Quiz") {
    screenshot.attr("src", "./assets/images/quiz screenshot.png");
    repo.attr("href", "https://github.com/nabeek/UUBC-Homework4");
    link.attr("href", "https://nabeek.github.io/UUBC-Homework4/");
  } else if (project === "Weekly Planner") {
    screenshot.attr("src", "./assets/images/planner screenshot.png");
    repo.attr("href", "https://github.com/nabeek/UUBC-Homework5");
    link.attr("href", "https://nabeek.github.io/UUBC-Homework5/");
  }
});


// Auto-update copyright year
$("#copyright-year").text(moment().format("YYYY"))