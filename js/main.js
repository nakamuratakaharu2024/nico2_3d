$(document).ready(function () {
  // slide
  $('.gallery_list').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false
        }
      }
    ]
  });

  $('.voice_list').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $(".slide_list").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

  // accordion
  var speed = 200;

  $(".qa_box dt").click(function () {
    $(this).toggleClass("opened");
    $(this).next().slideToggle(speed);
  });

  // anchor
  $('.anchor a, a.anchorlink').click(function () {
    if ($($(this).attr('href')).length) {
      var p = $($(this).attr('href')).offset();
      $('html,body').animate({
        scrollTop: p.top
      }, 1000);
    }
    return false;
  });

  //totop
  $('.totop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
  });

  // scroll area
  $(window).on('scroll load', function () {
    if ($(window).width() <= 767) {
      if ($(this).scrollTop() > 100) {
        $('.scroll_area').removeClass("show");
      } else {
        $('.scroll_area').addClass("show");
      }
    } else {
      if ($(this).scrollTop() > 100) {
        $('.scroll_area').removeClass("show");
      } else {
        $('.scroll_area').addClass("show");
      }
    }
  });

  // Modal
  var swiper;
  $('.spec_img a').magnificPopup({
    type: 'inline',
    preloader: false,
    callbacks: {
      open: function () {
        swiper = new Swiper(".modal_container", {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      },
      afterClose: function () {
        swiper.destroy(false, true);
      }
    }
  });

  $(".modal-close").click(function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // fadeup
  delayHeight = 300;
  $(window).on('load scroll', function () {
    $('.fadeup, .fadein').each(function () {
      var setThis = $(this),
        elmTop = setThis.offset().top,
        elmHeight = setThis.height(),
        scrTop = $(window).scrollTop(),
        winHeight = $(window).height();
      if (setThis.attr('data-delayHeight') == "") {
        delayHeight = 150;
      } else {
        delayHeight = 0;
      }
      if (scrTop > elmTop - winHeight + delayHeight && scrTop < elmTop + elmHeight) {
        setThis.addClass('active');
      }
    });
  });

  $('.mainmenu li a').on('click', function () {
    var href = $(this).attr("href"),
        target = $(href === "#" || href === "" ? 'html' : href),
        offset = target.offset().top;
    $('html, body').animate({ scrollTop: offset }, 800);
    return false;
  });

  var $body = $('body'),
      $hambuger = $('.hamburger button');

  // Open menu on SP
  $hambuger.on('click', function() {
      $body.toggleClass('nav-opened');
  });

  if ($(window).width() < 959) {
      $('.mainmenu >li >a').click(function() {
          $body.removeClass('nav-opened');
      });
  }

  $(".slide_list").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  });

});


