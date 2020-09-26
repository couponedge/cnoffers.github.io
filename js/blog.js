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

        default:
            viewName = "grid-view";
    }

    // Change icon classes
    $(sectionClassName + " li").removeClass();
    var viewClassName = sectionClassName + " li:nth-child(" + viewIndex + ")";
    $(viewClassName).attr("class", "heading-view-active");

    // Change View
    $(sectionClassName + " main").removeClass();
    $(sectionClassName + " main").attr("class", viewName);
}
