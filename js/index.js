$(document).ready(function () {
  // Hamburger icon change
  $('#hamburger-icon1').click(() => {
    $('#menu-items-mobile').slideDown(250);
    $('#hamburger-icon1').toggle();
    $('#hamburger-icon2').toggle();
  });

  $('#hamburger-icon2').click(() => {
    $('#menu-items-mobile').slideUp(250);
    $('#hamburger-icon1').toggle();
    $('#hamburger-icon2').toggle();
  });

  // Box Shadow on Menu Bar
  $(window).scroll(function () {
    var height = $(this).scrollTop();
    var width = $(window).width();

    // console.log(height+" "+width);
    var scrollBreakPoint = 10;
    if (width > 768) scrollBreakPoint = 50;

    if (height >= scrollBreakPoint) {
      $('#menu-bar').css('box-shadow', '0px 1px 5px #00000029');
    }

    if (height < scrollBreakPoint) {
      $('#menu-bar').css('box-shadow', 'none');
    }
  });

  // Hide Menu Bar when menu links are clicked
  $('#menu-items-mobile > a').click(e => {
    $('#hamburger-icon2').trigger('click');

    //(https://css-tricks.com/hash-tag-links-padding/) fix
    // window.scrollBy(0,-100); variation
    var targetHref = e.currentTarget.hash;
    // alert(tagetHref);
    $('html, body').animate(
      { scrollTop: $(targetHref).offset().top - 120 },
      100
    );
  });

  // Zyada Scroll Ho rha h
  var isFirstTime = 1;
  var headerHeight = 120;
  $("a[href*='#']").on('click', function (e) {
    // same pe click karega toh return else scroll issue ho rha h
    var hash = window.location.hash;
    if (hash == this.hash) {
      // e.preventDefault();

      // if mobile, mobile pe prevent not working

      // console.log($(this.hash).offset().top+" "+window.pageYOffset );

      var scrollAmt = $(this.hash).offset().top;
      // if top to bottom
      // console.log($(this.hash).offset().top-window.pageYOffset);
      //i dont know what i did! but it works
      if ($(this.hash).offset().top - window.pageYOffset < 600)
        scrollAmt = scrollAmt - 20;
      else if ($(this.hash).offset().top > window.pageYOffset)
        scrollAmt = scrollAmt - headerHeight;
      else if ($(this.hash).offset().top < window.pageYOffset)
        scrollAmt = scrollAmt - 20;
      else {
        // nhi smajh aa rha
        // thoda sa upar karke click karne pe scroll issue, its a feature bc!
        e.prevemtDefault();
        return;
      }

      $('html, body').animate(
        {
          scrollTop: scrollAmt,
        },
        'linear'
      );
      return;
    }

    // Starting me hi scroll na kare if url contains
    // Bottom To Top
    if ($(this.hash).offset().top < window.pageYOffset) {
      $('html, body').animate(
        {
          scrollTop: $(this.hash).offset().top - 20,
        },
        'linear'
      );

      return;
    }

    // Top To Bottom
    isFirstTime = 0;
    $('html, body').animate(
      {
        scrollTop: $(this.hash).offset().top - headerHeight,
      },
      'linear'
    );
  });

  // Redirection from another page
  var hash = window.location.hash;
  if (hash == '' || hash == '#' || hash == undefined) return false;
  var target = $(hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

  if (target.length) {
    isFirstTime = 0;
    $('html,body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top - headerHeight, //offsets for fixed header
        },
        'linear'
      );
  }

  // Jquery ending
});

// Splide Slider animation

if ($('#image-slider-1').length) {
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider-1', {
      perPage: 2,
      rewind: true,
      width: '68%',
      height: '63%',
      arrows: true,
      autoplay: true,
      interval: 4000,
      resetProgress: false,
      keyboard: 'focused',

      breakpoints: {
        768: {
          perPage: 1,
          width: '100%',
          height: '100%',
        },
      },
    }).mount();
  });
}

if ($('#image-slider-2').length) {
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider-2', {
      perPage: 2,
      rewind: true,
      width: '68%',
      height: '63%',
      arrows: true,
      autoplay: true,
      interval: 4000,
      resetProgress: false,
      keyboard: 'focused',

      breakpoints: {
        768: {
          perPage: 1,
          width: '100%',
          height: '100%',
        },
      },
    }).mount();
  });
}

// FAQ
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    closeAllAccordions(this);
    this.classList.toggle('active');
    var panel = this.nextElementSibling;

    if (panel.style.height === '') {
      // panel.style.padding = '20px 50px';
      panel.style.height = panel.scrollHeight + 'px';
    } else {
      // panel.style.padding = '';
      panel.style.height = '';
    }
  });
}

function closeAllAccordions(curr) {
  for (i = 0; i < acc.length; i++) {
    if (acc[i] == curr) continue;
    var panel = acc[i].nextElementSibling;
    if (panel.style.height) {
      acc[i].click();
    }
  }
}
