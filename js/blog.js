$(document).ready(function () {
    // Slideshow Hightlight
    $(".mySlides").hover(
        function () {
            $(".slideshow-highlight").css("display", "block");
        },
        function () {
            $(".slideshow-highlight").css("display", "none");
        }
    );

    // Text-Ellipsis
    function addDots() {
        $(".main-single-details p").each(function (index) {
            var txt = $(this).text();
            txt.substr(0, 200);
            $(this).text(txt + "...");
        });
    }
    addDots();

    // Show back to top button
    $(document).scroll(() => {
        var y = $(this).scrollTop();
        if (y > 200) {
            $(".back2top").fadeIn();
        } else {
            $(".back2top").fadeOut();
        }
    });

    $(".back2top").click(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // Jquery ending
});

// Thumbnail SlideShow
var slideIndex = 1;
showSlides();

function plusSlides(n) {
    showSlidesViaBtn((slideIndex += n));
}

function currentSlide(n) {
    showSlidesViaBtn((slideIndex = n));
}

function showSlidesViaBtn(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";

    // ANCHOR: Toggle it!
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Change View
function changeView(sectionIndex, viewIndex) {
    var sectionClassName = "";
    var viewName = "";
    switch (sectionIndex) {
        case 1:
            sectionClassName = ".latest";
            break;

        case 2:
            sectionClassName = ".reviews";
            break;

        case 3:
            sectionClassName = ".offers";
            break;
    }

    switch (viewIndex) {
        case 1:
            viewName = "grid-view";
            break;

        case 2:
            viewName = "big-list-view";
            break;

        case 3:
            viewName = "small-list-view";
            break;
    }

    // Change icon classes
    $(sectionClassName + " li").removeClass();
    var viewClassName = sectionClassName + " li:nth-child(" + viewIndex + ")";
    $(viewClassName).attr("class", "heading-view-active");

    // Change View
    $(sectionClassName + " main").removeClass();
    $(sectionClassName + " main").attr("class", viewName);
}

// On View Change Change Layour
$(window).resize(() => {
    // FIXME: Automatically Calling On changing view in mobile?
    if ($(window).width() < 768) {
        // $(".heading-view-options-cntr li:nth-child(2)").trigger("click");
    } else {
        // $(".heading-view-options-cntr li:nth-child(1)").trigger("click");
    }
});

// Add animation in trend section
if ($(window).width() < 768) {
    $(".trend li.paragraph").attr("data-aos", "fade-up");
    $(".trend .section-heading-cntr").attr("data-aos", "fade-up");
}

// Change View in mobile
if ($(window).width() < 768) {
    $(".heading-view-options-cntr li:nth-child(2)").click();
}