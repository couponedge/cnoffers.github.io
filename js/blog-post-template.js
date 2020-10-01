var referral_link = "https://classroom.codingninjas.com/app/invite/TNMBH";

$(document).ready(function () {
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

    // Logo Redirect to HomePage Btn
    $("#logo").on("click", (e) => {
        window.open("../blog.html", "_self");
    });

    // GET NOW REDIRECT
    $("#menu-cta-btn").on("click", (e) => {
        window.open(referral_link, "_blank");
    });


    // Hide share options names on small size
    $(window).resize(function () {
        var width=$( document ).width();
        if(width>768 && width<900){
            $('.share-options li a span').hide();
        }
        
        if(width>900){
            $('.share-options li a span').show();
        }

    });


    // Jquery ending
});
