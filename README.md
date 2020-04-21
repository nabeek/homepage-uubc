# nabeek.github.io

This serves as my personal website and functions as a living portfolio of the projects I build throughout the University of Utah's coding bootcamp, along with pet projects I fit into my free time: https://nabeek.github.io/

# Motivation

I've worked with developers of various platforms and products for over seven years, and always had the passion to learn web development. My earliest attempts were very rudimentary, building Wordpress and sites and utilizing an understanding of HTML I gained back in high school (2003ish). With my growing skillset, this website is my attempt to build something I'm proud of, that is really "me" in design, and that I think will attract potential employers and collaborators to get in contact with me.

# Screenshots
![iPhone XS Max Screenshot](https://user-images.githubusercontent.com/4752937/79895436-1f4a1980-83c4-11ea-8804-c7b31a59aa63.png)

# Tech Used

**Built with:**

[Adobe Illustrator](https://www.adobe.com/products/illustrator.html)\
[Adobe Photoshop](https://www.adobe.com/products/photoshop.html)\
[Bulma](https://bulma.io/)\
[Font Awesome](https://fontawesome.com)\
[jQuery](https://jquery.com)\
[Moment.js](https://momentjs.com)

# Code Samples

Dynamically re-sizing the "Ribbon Rack" using JavaScript, vice CSS media queries

```javascript
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
```

Win/loss logic in the "Did Jonas Win with VS" call

```javascript 
    var success = function(response) {

        matchID = response[0].match_id

        if (response[0].player_slot <= 127 && response[0].radiant_win == true) {
            result = "won";
        } else if (response[0].player_slot >= 128 && response[0].radiant_win == false) {
            result = "won";
        } else {
            result = "lost";
        }
```

# Roadmap

- Finish adding description/amplifying information to each ribbon on the Ribbon Rack (will change on click, like the name)
- Add virtual reality content links and still photography to the portfolio page
- Redesign the portfolio page to use a card/tile view, incorporating desktop and mobile mockup screenshots and gifs
- Write my own adaptive CSS framework for text sizing specifically, as I'm not impressed with Bulma's options
- Find and build another weekend project, (as of 4/21) thinking about a COVID-19 tracker [I did recently build a 355M GPT-2 model trained by the Twitter account @NihilistArbys, to see how nihilist-y it would get; it was perhaps too nihilist-y for me to want to add to my portfolio]

# License

MIT © [nabeek](https://github.com/nabeek)