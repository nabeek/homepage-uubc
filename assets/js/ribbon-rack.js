// Define layout at tablet breakpoint

let timelineColumn = $("#timeline-column");
let timelineNode = $("#timeline");
let ribbonRackColumn = $("#ribbon-rack-column");

$(window).resize(function() {
    if (window.innerWidth < 1024) {
        timelineColumn.removeClass("is-5");
        timelineNode.addClass("is-centered");
        ribbonRackColumn.removeClass("is-6").addClass("is-10");
    } else {
        timelineColumn.addClass("is-5");
        timelineNode.removeClass("is-centered");
        ribbonRackColumn.addClass("is-6").removeClass("is-10");
    }
});