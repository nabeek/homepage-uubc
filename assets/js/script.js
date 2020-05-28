// Burger menu functionality
$(document).ready(function () {
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

// Portfolio item event listener
let project = $(".portfolio-project");

project.click(function () {
  let name = this.textContent;
  let repo = $("#portfolio-repo");
  let link = $("#portfolio-link");
  let screenshot = $("#portfolio-screenshot");
  console.log(name);

  $("#portfolio-right-name").text(name);
  repo.show();
  link.show();
  screenshot.show();

  if (name === "Earthquake Now") {
    screenshot.attr("src", "./assets/images/en screenshot.png");
    repo.attr("href", "https://github.com/nabeek/Earthquake-Now");
    link.attr("href", "https://nabeek.github.io/Earthquake-Now/");
  } else if (name === "JavaScript Quiz") {
    screenshot.attr("src", "./assets/images/quiz screenshot.png");
    repo.attr("href", "https://github.com/nabeek/UUBC-Homework4");
    link.attr("href", "https://nabeek.github.io/UUBC-Homework4/");
  } else if (name === "Daily Planner") {
    screenshot.attr("src", "./assets/images/planner screenshot.png");
    repo.attr("href", "https://github.com/nabeek/UUBC-Homework5");
    link.attr("href", "https://nabeek.github.io/UUBC-Homework5/");
  } else if (name === "Team Generator") {
    screenshot.attr(
      "src",
      "https://user-images.githubusercontent.com/4752937/81086301-87652900-8eb5-11ea-82fb-34cf76147439.png"
    );
    repo.attr("href", "https://github.com/nabeek/employee-summary");
    link.hide();
  } else if (name === "Note Taker") {
    screenshot.attr("src", "./assets/images/note-taker screenshot.png");
    repo.attr("href", "https://github.com/nabeek/note-taker");
    link.attr("href", "https://nabeek-note-taker.herokuapp.com/");
  } else if (name === "Employee Tracker") {
    screenshot.attr(
      "src",
      "https://user-images.githubusercontent.com/4752937/82268960-77c1f780-992d-11ea-9b0c-28017c7fd026.png"
    );
    repo.attr("href", "https://github.com/nabeek/employee-tracker");
    link.hide();
  } else if (name === "Eat-Da-Burger") {
    screenshot.attr("src", "./assets/images/eat-da-burger screenshot.png");
    repo.attr("href", "https://github.com/nabeek/eat-da-burger");
    link.attr("href", "https://nabeek-eat-da-burger.herokuapp.com/");
  }
});

// Auto-update copyright year
$("#copyright-year").text(moment().format("YYYY"));
