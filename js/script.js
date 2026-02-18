// ============================== LOADER SECTION ============================== 
$(window).on('load', function () {
  $('#loader-img').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({ 'overflow': 'visible' });
})

// ============================== STICKY NAVBAR ==============================
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  if (pageYOffset > 150) {
    header.classList.add('tb-navscroll');
  } else {
    header.classList.remove('tb-navscroll');
  }
});

// ============================== RESPONSIVE JQUERY ============================== 
$(document).ready(function () {
  function footerToggle() {
    if ($(window).width() < 992) {
      $(".tb-footer-section-title").addClass("toggle");
      $(".tb-footer-section-title.toggle").unbind("click");
      var Accordions = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var link = this.el.find('.toggle');
        link.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
      }

      Accordions.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
          $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('active');

        if (!e.data.multiple) {
          $el.find('.tb-footer-section-body').not($next).slideUp().parent().removeClass('active');
        };
      }

      var accordions = new Accordions($('.tb-footer-toggle-menu'), false);
    } else {
      $(".tb-footer-section-title.toggle").unbind("click");
      $(".tb-footer-section-title").removeClass('toggle');
    }
  }
  $(document).ready(function () { footerToggle(); });
  $(window).resize(function () { footerToggle(); });

});

// ============================== CLICK NAV-LINK HIDE NAVBAR ============================== 
$(function () {
  var navMain = $(".navbar-collapse");

  navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
  });
});

// ============================== BACK TO TOP ============================== 
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $('#return-to-top').fadeIn(200);
  } else {
    $('#return-to-top').fadeOut(200);
  }
});
$('#return-to-top').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});

// ============================== COUNTER ============================== 
var isAlreadyRun = false;

$(window).scroll(function () {

  $('.counter-show').each(function (i) {

    var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
    var bottom_of_window = $(window).scrollTop() + $(window).height();


    if (bottom_of_window > (bottom_of_object + 20)) {
      if (!isAlreadyRun) {
        $('.count-number').each(function () {

          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 3500,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      }
      isAlreadyRun = true;
    }
  });

});


// inspect Close Code Start

    // Prevent Developer Tools, Right-Click, and Restricted Shortcuts
    document.addEventListener('keydown', function(event) {
        if (
            event.keyCode === 123 || // F12
            (event.ctrlKey && event.shiftKey && (event.keyCode === 67 || event.keyCode === 99)) || // Ctrl+Shift+C or c
            (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 105)) || // Ctrl+Shift+I or i
            (event.ctrlKey && event.shiftKey && (event.keyCode === 74 || event.keyCode === 106)) || // Ctrl+Shift+J or j
            (event.ctrlKey && event.keyCode === 85) || // Ctrl+U
            (event.ctrlKey && event.shiftKey && (event.keyCode === 77 || event.keyCode === 109)) || // Ctrl+Shift+M or m
            (event.ctrlKey && event.shiftKey && (event.keyCode === 69 || event.keyCode === 101)) || // Ctrl+Shift+E or e
            (event.ctrlKey && event.shiftKey && (event.keyCode === 84 || event.keyCode === 116)) || // Ctrl+Shift+T or t
            (event.ctrlKey && event.shiftKey && (event.keyCode === 88 || event.keyCode === 120)) || // Ctrl+Shift+X or x
            (event.ctrlKey && event.altKey && event.keyCode === 83) || // Ctrl+Alt+S
            (event.metaKey && event.shiftKey && event.keyCode === 80) || // Cmd+Shift+P (Mac)
            (event.ctrlKey && event.keyCode === 83) || // Ctrl+S
            (event.metaKey && event.keyCode === 83) // Cmd+S (Mac)
        ) {
            event.preventDefault();
        }
    }, false);
    
    // Prevent context menu
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    }, false);
    
    // Prevent mouse actions
    document.addEventListener('mousedown', function(event) {
        if (
            event.button === 2 || // Right-click
            (event.ctrlKey && event.button === 0) || // Ctrl+Left-click
            (event.metaKey && event.button === 0) // Cmd+Left-click on Mac
        ) {
            event.preventDefault();
        }
    }, false);

// inspect Close Code End