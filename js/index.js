$(document).ready(function () {
    // Hamburger icon change
    $("#hamburger-icon1").click(() => {
        $("#menu-items-mobile").slideDown(250);
        $("#hamburger-icon1").toggle();
        $("#hamburger-icon2").toggle();
    });

    $("#hamburger-icon2").click(() => {
        $("#menu-items-mobile").slideUp(250);
        $("#hamburger-icon1").toggle();
        $("#hamburger-icon2").toggle();
    });

    // Box Shadow on Menu Bar
    $(window).scroll(function () {
        var height = $(this).scrollTop();
        var width = $(window).width();

        // console.log(height+" "+width);
        var scrollBreakPoint = 30;
        if (width > 768) scrollBreakPoint = 50;

        if (height >= scrollBreakPoint) {
            $("#menu-bar").css("box-shadow", "0px 1px 5px #00000029");
        }

        if (height < scrollBreakPoint) {
            $("#menu-bar").css("box-shadow", "none");
        }
    });

    // Hide Menu Bar when menu links are clicked
    $("#menu-items-mobile > a").click((e) => {
        $("#hamburger-icon2").trigger("click");

        //(https://css-tricks.com/hash-tag-links-padding/) fix
        // window.scrollBy(0,-100); variation
        var targetHref = e.currentTarget.hash;
        // alert(tagetHref);
        $("html, body").animate(
            { scrollTop: $(targetHref).offset().top - 120 },
            100
        );
    });

    // Discount Proof Slider
    var dpLocations = [
        "assets/proof/0.jpg",
        "assets/proof/1.jpg",
        "assets/proof/2.jpg",
        "assets/proof/3.jpg",
        "assets/proof/4.jpg",
        "assets/proof/5.jpg",
    ];

    var d_dp_curr1 = 2,
        d_dp_curr2 = 3;
    var m_dp_curr = 2;

    $("#dp-prev-btn").click((e) => {
        if ($(window).width() > 768) {
            // Desktop
            // console.log('running desktop');
            var currentIndicatorClass1 = ".dp-image-no-" + d_dp_curr1;
            var currentIndicatorClass2 = ".dp-image-no-" + d_dp_curr2;

            $(currentIndicatorClass1).removeClass("d-active-indicator");
            $(currentIndicatorClass2).removeClass("d-active-indicator");
            $(currentIndicatorClass1).addClass("d-inactive-indicator");
            $(currentIndicatorClass2).addClass("d-inactive-indicator");

            d_dp_curr1 = d_dp_curr1 - 1;
            d_dp_curr2 = d_dp_curr2 - 1;
            if (d_dp_curr1 < 0) d_dp_curr1 = dpLocations.length - 1;
            if (d_dp_curr2 < 0) d_dp_curr2 = dpLocations.length - 1;

            currentIndicatorClass1 = ".dp-image-no-" + d_dp_curr1;
            currentIndicatorClass2 = ".dp-image-no-" + d_dp_curr2;
            $(currentIndicatorClass1).removeClass("d-inactive-indicator");
            $(currentIndicatorClass1).addClass("d-active-indicator");
            $(currentIndicatorClass2).removeClass("d-inactive-indicator");
            $(currentIndicatorClass2).addClass("d-active-indicator");

            var imageId1 = "#dp-image-1 img";
            $(imageId1).attr("src", dpLocations[d_dp_curr1]);
            var imageId2 = "#dp-image-2 img";
            $(imageId2).attr("src", dpLocations[d_dp_curr2]);
        } else {
            // Mobile
            // console.log('running mobile');
            var currentIndicatorClass = ".dp-image-no-" + m_dp_curr;

            $(currentIndicatorClass).removeClass("m-active-indicator");
            $(currentIndicatorClass).addClass("m-inactive-indicator");

            m_dp_curr = m_dp_curr - 1;
            if (m_dp_curr < 0) m_dp_curr = dpLocations.length - 1;

            currentIndicatorClass = ".dp-image-no-" + m_dp_curr;
            $(currentIndicatorClass).removeClass("m-inactive-indicator");
            $(currentIndicatorClass).addClass("m-active-indicator");

            var imageId = "#dp-image-1 img";
            // TODO: add animation
            // $(imageId).slideUp(200);
            $(imageId).attr("src", dpLocations[m_dp_curr]);
            // $(imageId).slideDown(200);
        }
    });

    $("#dp-next-btn").click((e) => {
        if ($(window).width() > 768) {
            // Desktop
            var currentIndicatorClass1 = ".dp-image-no-" + d_dp_curr1;
            var currentIndicatorClass2 = ".dp-image-no-" + d_dp_curr2;

            $(currentIndicatorClass1).removeClass("d-active-indicator");
            $(currentIndicatorClass2).removeClass("d-active-indicator");
            $(currentIndicatorClass1).addClass("d-inactive-indicator");
            $(currentIndicatorClass2).addClass("d-inactive-indicator");

            d_dp_curr1 = d_dp_curr1 + 1;
            d_dp_curr2 = d_dp_curr2 + 1;
            if (d_dp_curr1 >= dpLocations.length) d_dp_curr1 = 0;
            if (d_dp_curr2 >= dpLocations.length) d_dp_curr2 = 0;

            currentIndicatorClass1 = ".dp-image-no-" + d_dp_curr1;
            currentIndicatorClass2 = ".dp-image-no-" + d_dp_curr2;
            $(currentIndicatorClass1).removeClass("d-inactive-indicator");
            $(currentIndicatorClass1).addClass("d-active-indicator");
            $(currentIndicatorClass2).removeClass("d-inactive-indicator");
            $(currentIndicatorClass2).addClass("d-active-indicator");

            var imageId1 = "#dp-image-1 img";
            $(imageId1).attr("src", dpLocations[d_dp_curr1]);
            var imageId2 = "#dp-image-2 img";
            $(imageId2).attr("src", dpLocations[d_dp_curr2]);
        } else {
            // Mobile
            var currentIndicatorClass = ".dp-image-no-" + m_dp_curr;

            $(currentIndicatorClass).removeClass("m-active-indicator");
            $(currentIndicatorClass).addClass("m-inactive-indicator");

            m_dp_curr = m_dp_curr + 1;
            if (m_dp_curr >= dpLocations.length) m_dp_curr = 0;

            currentIndicatorClass = ".dp-image-no-" + m_dp_curr;
            $(currentIndicatorClass).removeClass("m-inactive-indicator");
            $(currentIndicatorClass).addClass("m-active-indicator");

            var imageId = "#dp-image-1 img";
            $(imageId).attr("src", dpLocations[m_dp_curr]);
        }
    });

    // Discounts On Next Course Slider
    var doncLocations = [
        "assets/benefits/0.jpg",
        "assets/benefits/1.jpg",
        "assets/benefits/2.jpg",
        "assets/benefits/3.jpg",
        "assets/benefits/4.jpg",
        "assets/benefits/5.jpg",
    ];

    var d_donc_curr1 = 2,
        d_donc_curr2 = 3;
    var m_donc_curr = 2;

    $("#donc-prev-btn").click((e) => {
        if ($(window).width() > 768) {
            // Desktop
            // console.log('running desktop');
            var currentIndicatorClass1 = ".donc-image-no-" + d_donc_curr1;
            var currentIndicatorClass2 = ".donc-image-no-" + d_donc_curr2;

            $(currentIndicatorClass1).removeClass("d-active-indicator");
            $(currentIndicatorClass2).removeClass("d-active-indicator");
            $(currentIndicatorClass1).addClass("d-inactive-indicator");
            $(currentIndicatorClass2).addClass("d-inactive-indicator");

            d_donc_curr1 = d_donc_curr1 - 1;
            d_donc_curr2 = d_donc_curr2 - 1;
            if (d_donc_curr1 < 0) d_donc_curr1 = doncLocations.length - 1;
            if (d_donc_curr2 < 0) d_donc_curr2 = doncLocations.length - 1;

            currentIndicatorClass1 = ".donc-image-no-" + d_donc_curr1;
            currentIndicatorClass2 = ".donc-image-no-" + d_donc_curr2;
            $(currentIndicatorClass1).removeClass("d-inactive-indicator");
            $(currentIndicatorClass1).addClass("d-active-indicator");
            $(currentIndicatorClass2).removeClass("d-inactive-indicator");
            $(currentIndicatorClass2).addClass("d-active-indicator");

            var imageId1 = "#donc-image-1 img";
            $(imageId1).attr("src", doncLocations[d_donc_curr1]);
            var imageId2 = "#donc-image-2 img";
            $(imageId2).attr("src", doncLocations[d_donc_curr2]);
        } else {
            // Mobile
            var currentIndicatorClass = ".donc-image-no-" + m_donc_curr;

            $(currentIndicatorClass).removeClass("m-active-indicator");
            $(currentIndicatorClass).addClass("m-inactive-indicator");

            m_donc_curr = m_donc_curr - 1;
            if (m_donc_curr < 0) m_donc_curr = doncLocations.length - 1;

            currentIndicatorClass = ".donc-image-no-" + m_donc_curr;
            $(currentIndicatorClass).removeClass("m-inactive-indicator");
            $(currentIndicatorClass).addClass("m-active-indicator");

            var imageId = "#donc-image-1 img";
            $(imageId).attr("src", doncLocations[m_donc_curr]);
        }
    });

    $("#donc-next-btn").click((e) => {
        if ($(window).width() > 768) {
            // Desktop
            var currentIndicatorClass1 = ".donc-image-no-" + d_donc_curr1;
            var currentIndicatorClass2 = ".donc-image-no-" + d_donc_curr2;

            $(currentIndicatorClass1).removeClass("d-active-indicator");
            $(currentIndicatorClass2).removeClass("d-active-indicator");
            $(currentIndicatorClass1).addClass("d-inactive-indicator");
            $(currentIndicatorClass2).addClass("d-inactive-indicator");

            d_donc_curr1 = d_donc_curr1 + 1;
            d_donc_curr2 = d_donc_curr2 + 1;
            if (d_donc_curr1 >= doncLocations.length) d_donc_curr1 = 0;
            if (d_donc_curr2 >= doncLocations.length) d_donc_curr2 = 0;

            currentIndicatorClass1 = ".donc-image-no-" + d_donc_curr1;
            currentIndicatorClass2 = ".donc-image-no-" + d_donc_curr2;
            $(currentIndicatorClass1).removeClass("d-inactive-indicator");
            $(currentIndicatorClass1).addClass("d-active-indicator");
            $(currentIndicatorClass2).removeClass("d-inactive-indicator");
            $(currentIndicatorClass2).addClass("d-active-indicator");

            var imageId1 = "#donc-image-1 img";
            $(imageId1).attr("src", doncLocations[d_donc_curr1]);
            var imageId2 = "#donc-image-2 img";
            $(imageId2).attr("src", doncLocations[d_donc_curr2]);
        } else {
            // Mobile
            var currentIndicatorClass = ".donc-image-no-" + m_donc_curr;

            $(currentIndicatorClass).removeClass("m-active-indicator");
            $(currentIndicatorClass).addClass("m-inactive-indicator");

            m_donc_curr = m_donc_curr + 1;
            if (m_donc_curr >= doncLocations.length) m_donc_curr = 0;

            currentIndicatorClass = ".donc-image-no-" + m_donc_curr;
            $(currentIndicatorClass).removeClass("m-inactive-indicator");
            $(currentIndicatorClass).addClass("m-active-indicator");

            var imageId = "#donc-image-1 img";
            $(imageId).attr("src", doncLocations[m_donc_curr]);
        }
    });


    // Zyada Scroll Ho rha h
    var isFirstTime = 1;
    var headerHeight = 120;
    $("a[href*='#']").on("click", function (e) {
        
        // same pe click karega toh return else scroll issue ho rha h
        var hash = window.location.hash;
        if(hash==this.hash){
            // e.preventDefault();

            // if mobile, mobile pe prevent not working

            // console.log($(this.hash).offset().top+" "+window.pageYOffset );

            var scrollAmt=$(this.hash).offset().top;
            // if top to bottom
            // console.log($(this.hash).offset().top-window.pageYOffset);
            //i dont know what i did! but it works
            if($(this.hash).offset().top-window.pageYOffset < 600)
                scrollAmt=scrollAmt-20;
            else if($(this.hash).offset().top > window.pageYOffset)
                scrollAmt=scrollAmt-headerHeight;
            else if($(this.hash).offset().top < window.pageYOffset)
                scrollAmt=scrollAmt-20;
            else{
                // nhi smajh aa rha
                // thoda sa upar karke click karne pe scroll issue, its a feature bc!
                e.prevemtDefault();
                return;
            }

            $("html, body").animate(
                {
                    scrollTop: scrollAmt,
                },
                "linear"
            );
            return;
        }

        // Starting me hi scroll na kare if url contains 
        // Bottom To Top
        if (
            $(this.hash).offset().top < window.pageYOffset
        ) {
            $("html, body").animate(
                {
                    scrollTop: $(this.hash).offset().top - 20,
                },
                "linear"
            );

            return;
        }

        // Top To Bottom
        isFirstTime = 0;
        $("html, body").animate(
            {
                scrollTop: $(this.hash).offset().top - headerHeight,
            },
            "linear"
        );
    });

    // Redirection from another page
    var hash = window.location.hash;
    if (hash == "" || hash == "#" || hash == undefined) return false;
    var target = $(hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    
    if (target.length) {
        isFirstTime = 0;
        $("html,body")
            .stop()
            .animate(
                {
                    scrollTop: target.offset().top - headerHeight, //offsets for fixed header
                },
                "linear"
            );
    }

    // Jquery ending
});
