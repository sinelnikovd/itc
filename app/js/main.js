$(document).ready(function() {
  var aboutMenuFixed, addAnim, addAnimTech, cardSlickInit, clientCarousel, consistCarousel, efficiencyCarousel, headerFixed, mq480, mq480Handler, mq550, mq550Handler, mq600, mq600Handler, mq750, mq750Handler, mq950, mq950Handler, priceSlickInit, priceTechSlickInit, recur, recurTech, resizeBgAbout, resizeBgPortfolio, reviewsCarousel, shopworkCarousel, sidebarFixed, slicEmployeekInit, slickInit, toActiveMainMenuHover, vacancyBlockFixed;
  $('input.js-inputmask').inputmask("+7 (999) 999-99-99", {
    clearIncomplete: true
  });
  clientCarousel = $('.client__slider').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: true,
    dotsContainer: ".client-slider-nav__dots",
    dotsData: true,
    autoplay: true,
    autoplayTimeout: 10000
  });
  $('.client-slider-nav__arrow_prev').click(function() {
    return clientCarousel.trigger('prev.owl.carousel');
  });
  $('.client-slider-nav__arrow_next').click(function() {
    return clientCarousel.trigger('next.owl.carousel');
  });
  $(".call__select").change(function() {
    $(".call__phone-item").removeClass("call__phone-item_active");
    return $(".call__phone-item").eq($(this).val()).addClass("call__phone-item_active");
  });
  sidebarFixed = function(scrollPosition) {
    var sidebarBottom, sidebarTop;
    if ($("div").is("#sidebar-top")) {
      sidebarTop = $("#sidebar-top").offset().top + $("#sidebar-top").outerHeight();
    }
    sidebarBottom = $("div").is("#sidebar-bottom") ? $("#sidebar-bottom").offset().top : $(".footer").offset().top;
    if (scrollPosition > sidebarTop - 105) {
      $("#sidebar").addClass("sidebar_fixed");
    }
    if (scrollPosition <= sidebarTop - 105) {
      $("#sidebar").removeClass("sidebar_fixed");
    }
    if (scrollPosition > sidebarBottom - $("#sidebar .sidebar__body").outerHeight(true) - 105) {
      $("#sidebar").removeClass("sidebar_fixed");
      $("#sidebar").addClass("sidebar_absolute");
      $("#sidebar").css({
        bottom: $(document).height() - sidebarBottom + $("#sidebar .sidebar__body").outerHeight(true)
      });
    }
    if (scrollPosition <= sidebarBottom - $("#sidebar .sidebar__body").outerHeight(true) - 105) {
      $("#sidebar").removeClass("sidebar_absolute");
      return $("#sidebar").css({
        bottom: "auto"
      });
    }
  };
  sidebarFixed($(window).scrollTop());
  $(window).scroll(function() {
    var scrollPosition;
    scrollPosition = $(this).scrollTop();
    return sidebarFixed(scrollPosition);
  });
  $(".accordion").accordion({
    collapsible: true,
    heightStyle: "content"
  });
  $(".accordion").accordion("option", "icons", null);
  $(".vacancy__accordion").accordion("option", "active", false);
  $(".accordion").on("accordionbeforeactivate", function(event, ui) {
    ui.oldHeader.removeClass("accordion__head_active");
    return ui.newHeader.addClass("accordion__head_active");
  });
  $(".technology__item .technology__accordion").on("accordionbeforeactivate", function(event, ui) {
    $(".technology__item.active .radial-item").removeClass("radial-item_active");
    console.log(ui.newHeader.index());
    return $(".technology__item.active .radial-item").eq(ui.newHeader.index() / 2).addClass("radial-item_active");
  });
  $(".select-inline__txt").click(function() {
    var list, self;
    list = $(this).next(".select-inline__list").toggleClass("select-inline__list_dropdown");
    if (list.offset().left + list.width() > $(document).width()) {
      list.css({
        right: "-30px"
      });
    }
    $(this).closest(".select-inline").find(".select-inline__overlay").toggleClass("select-inline__overlay_dropdown");
    self = $(this);
    $(this).closest(".select-inline").find(".select-inline__overlay").click(function() {
      self.next(".select-inline__list").removeClass("select-inline__list_dropdown");
      return self.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown");
    });
    return $(this).next(".select-inline__list").find(".select-inline__item").click(function() {
      self.text($(this).text());
      $(".typesite__list.typesite__list_active").removeClass("typesite__list_active");
      $(".typesite__list").eq($(this).index()).addClass("typesite__list_active");
      self.next(".select-inline__list").removeClass("select-inline__list_dropdown");
      return self.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown");
    });
  });
  $(".js-tab-top10").click(function() {
    $(".tab__item.active").removeClass("active");
    $(this).addClass("active");
    $(".top10-price__data").removeClass("top10-price__data_active");
    if ($(this).attr("id") === "sub-month") {
      return $(".top10-price__data_month").addClass("top10-price__data_active");
    } else {
      return $(".top10-price__data_year").addClass("top10-price__data_active");
    }
  });
  $(".top10-price__arrow_prev").click(function() {
    return $('.top10-price__row').slick("slickPrev");
  });
  $(".top10-price__arrow_next").click(function() {
    return $('.top10-price__row').slick("slickNext");
  });
  $('.popup-tech__arrow_prev').click(function() {
    return $('.popup-tech__slider-items').trigger('prev.owl.carousel');
  });
  $('.popup-tech__arrow_next').click(function() {
    return $('.popup-tech__slider-items').trigger('next.owl.carousel');
  });
  slickInit = false;
  mq750 = window.matchMedia('only screen and (max-width : 750px)');
  mq750Handler = function() {
    if (mq750.matches) {
      $('.top10-price__row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        slide: ".top10-price__cell_slide",
        asNavFor: '.top10-price__row'
      });
      slickInit = true;
      $('.popup-tech__slider-items').addClass("owl-carousel");
      return $('.popup-tech__slider-items').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 2,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          }
        }
      });
    } else {
      if (slickInit) {
        $('.top10-price__row').slick("unslick");
        slickInit = false;
      }
      if ($('.popup-tech__slider-items').hasClass("owl-carousel")) {
        return $('.popup-tech__slider-items').removeClass("owl-carousel").trigger('destroy.owl.carousel');
      }
    }
  };
  mq750Handler();
  mq750.addListener(mq750Handler);
  headerFixed = function(scrollPosition) {
    if (scrollPosition > 0) {
      if (!$(".header").hasClass("header_fixed")) {
        $(".header").addClass("header_fixed");
      }
    }
    if (scrollPosition <= 0) {
      if ($(".header").hasClass("header_fixed")) {
        return $(".header").removeClass("header_fixed");
      }
    }
  };
  headerFixed($(window).scrollTop());
  $(window).scroll(function() {
    var scrollPosition;
    scrollPosition = $(this).scrollTop();
    return headerFixed(scrollPosition);
  });
  $(window).scroll(function() {
    if ($(".sidebar").is(":visible")) {
      return $(".sidebar__link").each(function() {
        var link, linkCenter;
        link = $(this);
        linkCenter = link.offset().top + link.outerHeight() / 2;
        return $(".darkBlock").each(function(index, element) {
          var darkBottom, darkTop;
          darkTop = $(this).offset().top;
          darkBottom = darkTop + $(this).outerHeight();
          if (linkCenter > darkTop && linkCenter <= darkBottom) {
            link.addClass("sidebar__link_white");
            return false;
          } else {
            return link.removeClass("sidebar__link_white");
          }
        });
      });
    }
  });
  slicEmployeekInit = false;
  $(".employee__nav_prev").click(function() {
    return $('.employee__slider').slick("slickPrev");
  });
  $(".employee__nav_next").click(function() {
    return $('.employee__slider').slick("slickNext");
  });
  mq950 = window.matchMedia('only screen and (max-width : 950px)');
  mq950Handler = function() {
    if (mq950.matches) {
      $(".header__call").prependTo($("#nav"));
      $(".sidebar__links").appendTo($("#nav"));
      $('.employee__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 601,
            settings: {
              vertical: true
            }
          }
        ]
      });
      return slicEmployeekInit = true;
    } else {
      $(".header__call").insertBefore($(".header__recall"));
      $(".sidebar__links").appendTo($(".sidebar__body"));
      $(".nav__hover").stop();
      $(".nav__hover").width($(".nav__item_active").width());
      $(".nav__hover").animate({
        left: $(".nav__item_active").offset().left - $('.nav').offset().left
      }, 250);
      if (slicEmployeekInit) {
        $('.employee__slider').slick("unslick");
        return slicEmployeekInit = false;
      }
    }
  };
  mq950Handler();
  mq950.addListener(mq950Handler);
  $(".hamburger").click(function() {
    return $(".header").toggleClass("header_nav750active");
  });
  efficiencyCarousel = $('.efficiency__slider').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: false
  });
  $('.efficiency__arrow_prev').click(function() {
    return efficiencyCarousel.trigger('prev.owl.carousel');
  });
  $('.efficiency__arrow_next').click(function() {
    return efficiencyCarousel.trigger('next.owl.carousel');
  });
  reviewsCarousel = $('.reviews__items').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: false
  });
  $('.reviews__arrow_prev').click(function() {
    return reviewsCarousel.trigger('prev.owl.carousel');
  });
  $('.reviews__arrow_next').click(function() {
    return reviewsCarousel.trigger('next.owl.carousel');
  });
  $(".price__arrow_prev").click(function() {
    return $('.price__list').slick("slickPrev");
  });
  $(".price__arrow_next").click(function() {
    return $('.price__list').slick("slickNext");
  });
  $(".tech-price__arrow_prev").click(function() {
    return $('.tech-table__row').slick("slickPrev");
  });
  $(".tech-price__arrow_next").click(function() {
    return $('.tech-table__row').slick("slickNext");
  });
  priceSlickInit = false;
  priceTechSlickInit = false;
  mq600 = window.matchMedia('only screen and (max-width : 600px)');
  mq600Handler = function() {
    if (mq600.matches) {
      $('.price__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        slide: ".price-item"
      });
      priceSlickInit = true;
      $('.tech-table__row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        slide: ".js-slide",
        asNavFor: '.tech-table__row'
      });
      priceTechSlickInit = true;
      return $(".popup-tech__cell").css({
        height: "auto"
      });
    } else {
      if (priceSlickInit) {
        $('.price__list').slick("unslick");
        priceSlickInit = false;
      }
      if (priceTechSlickInit) {
        $('.tech-table__row').slick("unslick");
        return priceTechSlickInit = false;
      }
    }
  };
  mq600Handler();
  mq600.addListener(mq600Handler);
  $('.popup-shop__arrow_prev').click(function() {
    return $(this).closest('.popup-shop__table').find('.popup-shop__slider-items').trigger('prev.owl.carousel');
  });
  $('.popup-shop__arrow_next').click(function() {
    return $(this).closest('.popup-shop__table').find('.popup-shop__slider-items').trigger('next.owl.carousel');
  });
  cardSlickInit = false;
  mq550 = window.matchMedia('only screen and (max-width : 550px)');
  mq550Handler = function() {
    if (mq550.matches) {
      $('.card__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true
      });
      cardSlickInit = true;
      $('.popup-shop__slider-items').addClass("owl-carousel");
      $('.popup-shop__slider-items').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 2,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          }
        }
      });
      return $("#about-menu").removeClass("about-menu_header").appendTo($(".about-menu-wrap"));
    } else {
      if (cardSlickInit) {
        $('.card__items').slick("unslick");
        cardSlickInit = false;
      }
      if ($('.popup-shop__slider-items').hasClass("owl-carousel")) {
        return $('.popup-shop__slider-items').removeClass("owl-carousel").trigger('destroy.owl.carousel');
      }
    }
  };
  mq550Handler();
  mq550.addListener(mq550Handler);
  $(".site-result__btn").click(function() {
    $(this).toggleClass("site-result__btn_active");
    return $(this).next(".site-result__list-wrap").slideToggle();
  });
  $(".js-order-popup").magnificPopup({
    items: {
      src: '#popup-order',
      type: 'inline'
    },
    closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'
  });
  $(".js-call-popup").magnificPopup({
    items: {
      src: '#popup-call',
      type: 'inline'
    },
    closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'
  });
  $(".js-question-popup").magnificPopup({
    items: {
      src: '#popup-question',
      type: 'inline'
    },
    closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'
  });
  $(".js-tech-popup").magnificPopup({
    items: {
      src: '#popup-tech',
      type: 'inline'
    },
    closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i></i></button>',
    callbacks: {
      open: function() {
        return $(".popup-tech__header .popup-tech__cell").each(function() {
          var containers, i, indx, maxH;
          indx = $(this).index() + 1;
          containers = $(this).add($(".popup-tech__coll .popup-tech__cell:nth-child(" + indx + ")"));
          maxH = 0;
          i = 0;
          return containers.each(function() {
            var h;
            $(this).height("auto");
            h = $(this).height();
            if (h > maxH) {
              maxH = h;
            }
            i += 1;
            if (i === containers.length) {
              if (typeof maxH === 'undefined' || typeof maxH === 'null') {
                false;
              }
              return containers.css({
                height: maxH + 'px'
              });
            }
          });
        });
      }
    }
  });
  $(".js-shop-popup").magnificPopup({
    items: {
      src: '#popup-shop',
      type: 'inline'
    },
    closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i></i></button>',
    callbacks: {
      open: function() {
        return $(".popup-shop__header .popup-shop__cell").each(function() {
          var containers, i, indx, maxH;
          indx = $(this).index() + 1;
          containers = $(this).add($(this).closest(".popup-shop__table").find(".popup-shop__coll .popup-shop__cell:nth-child(" + indx + ")"));
          maxH = 0;
          i = 0;
          console.log(containers);
          return containers.each(function() {
            var h;
            $(this).height("auto");
            h = $(this).height();
            if (h > maxH) {
              maxH = h;
            }
            i += 1;
            if (i === containers.length) {
              if (typeof maxH === 'undefined' || typeof maxH === 'null') {
                false;
              }
              return containers.css({
                height: maxH + 'px'
              });
            }
          });
        });
      }
    }
  });
  $('.file-upload__input').each(function() {
    var $input, $label, labelVal;
    $input = $(this);
    $label = $input.next('label');
    labelVal = $label.find('.file-upload__txt').html();
    $input.on('change', function(e) {
      var fileName;
      fileName = '';
      if (this.files && this.files.length > 1) {
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
      } else if (e.target.value) {
        fileName = e.target.value.split('\\').pop();
      }
      if (fileName) {
        $label.find('.file-upload__txt').html(fileName);
        return $input.parent().addClass("file-upload_load");
      } else {
        $label.find('.file-upload__txt').html(labelVal);
        return $input.parent().removeClass("file-upload_load");
      }
    });
    $input.on('focus', function() {
      return $input.addClass('has-focus');
    }).on('blur', function() {
      return $input.removeClass('has-focus');
    });
    return $label.next('.file-upload__kill').on('click', function() {
      $label.find('.file-upload__txt').text("");
      $input.val("");
      return $input.parent().removeClass("file-upload_load");
    });
  });
  addAnim = function(collection, elem, elInitIndex) {
    return collection.eq(elem).addClass("anim").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
      if (elem !== elInitIndex) {
        addAnim(collection, elem + 1, elInitIndex);
      }
      collection.eq(elem).addClass("anim-stop");
      return $(".js-button").eq(elem + 1).addClass("lines-point_orange");
    });
  };
  recur = function(collection, elem, elInitIndex) {
    if (elem === 0 || collection.eq(elem - 1).hasClass("anim-stop")) {
      addAnim(collection, elem, elInitIndex);
      return;
    }
    return recur(collection, elem - 1, elInitIndex);
  };
  $(".js-button").click(function() {
    var elem;
    $(".js-button").first().addClass("lines-point_orange");
    if ($(this).hasClass("js-button_finish")) {
      elem = $(".js-button").last().index();
    } else {
      elem = $(this).index();
    }
    if (!$(this).closest(".js-lines").find(".js-line").eq(elem).hasClass("anim-stop")) {
      recur($(this).closest(".js-lines").find(".js-line"), elem, elem);
      return recur($(this).closest(".js-lines").find(".js-btn-line"), elem, elem);
    }
  });
  $(".js-button").click(function(e) {
    $(this).addClass("tooltip_active");
    $(this).css({
      "z-index": 50
    });
    return $(".fade").show();
  });
  $(".fade").click(function() {
    $(".js-button.tooltip_active").css({
      "z-index": 1
    });
    $(".js-button.tooltip_active").removeClass("tooltip_active");
    return $(".fade").hide();
  });
  $(window).scroll(function() {
    var coords, yPos;
    yPos = -($(window).scrollTop() / 2);
    coords = 'center ' + yPos + 'px';
    $(".top-bg").css({
      backgroundPosition: coords
    });
    if ($("div").is(".order")) {
      yPos = ($(window).scrollTop() - $(".order").offset().top) / 2;
      coords = 'center ' + yPos + 'px';
      $(".order").css({
        backgroundPosition: coords
      });
    }
    if ($("div").is(".rsya")) {
      yPos = -($(window).scrollTop() - $(".rsya").offset().top) / 10;
      coords = yPos + 'px';
      $(".rsya__arm").css({
        transform: "translateY(" + coords + ")"
      });
    }
    if ($("div").is(".mission")) {
      yPos = -($(window).scrollTop() - $(".mission").offset().top) / 10;
      coords = 'center ' + yPos + 'px';
      return $(".mission").css({
        backgroundPosition: coords
      });
    }
  });
  $(".js-interaction").click(function() {
    $(this).addClass("interaction-item_active-tooltip");
    return $(".fade").show();
  });
  $(".fade").click(function() {
    $(".js-interaction.interaction-item_active-tooltip").removeClass("interaction-item_active-tooltip");
    return $(".fade").hide();
  });
  $(".rate__tab-container").tabtab({
    tabMenu: '.rate__tab',
    tabContent: '.rate-content',
    startSlide: 1,
    easing: "easeInOutCubic",
    translateX: "500px"
  });
  $(".technology__tab-container").tabtab({
    tabMenu: '.technology__tab',
    tabContent: '.technology__body',
    startSlide: 1,
    easing: "easeInOutCubic",
    translateX: "500px"
  });
  $(".evaluation__tab-container").tabtab({
    tabMenu: '.evaluation__tab',
    tabContent: '.evaluation__body',
    fixedHeight: false,
    dynamicHeight: true,
    startSlide: 1,
    easing: "easeInOutCubic",
    translateX: "500px"
  });
  $(".solutions__tab-container").tabtab({
    tabMenu: '.solutions__tab',
    tabContent: '.solutions__body',
    fixedHeight: true,
    startSlide: 1,
    easing: "easeInOutCubic",
    translateX: "500px"
  });
  $(".shop-price__tab-container").tabtab({
    tabMenu: '.shop-price__tab',
    tabContent: '.shop-price__body',
    startSlide: 1,
    fixedHeight: true,
    easing: "easeInOutCubic",
    translateX: "500px"
  });
  $(".instrument__tab-container").tabtab({
    tabMenu: '.instrument__tab',
    tabContent: '.instrument__body',
    startSlide: 1,
    fixedHeight: false,
    dynamicHeight: true,
    easing: "easeInOutCubic",
    translateX: "500px"
  });
  $(".scheme-work").viewportChecker({
    offset: 300,
    callbackFunction: function(elem, action) {
      elem.find(".line-scheme__line").removeClass("line-scheme__line_to-animated");
      return elem.find(".line-scheme__line").addClass("line-scheme__line_animated");
    }
  });
  addAnimTech = function(collection, elem, elInitIndex) {
    return collection.eq(elem).addClass("anim").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
      if (elem !== elInitIndex) {
        addAnimTech(collection, elem + 1, elInitIndex);
      }
      collection.eq(elem).addClass("anim-stop");
      return $(".js-tech-button").eq(elem + 1).addClass("tech-point_orange");
    });
  };
  recurTech = function(collection, elem, elInitIndex) {
    if (elem === 0 || collection.eq(elem - 1).hasClass("anim-stop")) {
      addAnimTech(collection, elem, elInitIndex);
      return;
    }
    return recurTech(collection, elem - 1, elInitIndex);
  };
  $(".tech-shem").viewportChecker({
    offset: 300,
    callbackFunction: function(elem, action) {
      var el;
      console.log("ASdasdd");
      $(".js-tech-button").first().addClass("tech-point_orange");
      el = $(".js-tech-button").last().index();
      recurTech($(".js-tech-line"), el, el);
      return recurTech($(".js-tech-btn-line"), el, el);
    }
  });
  toActiveMainMenuHover = function() {
    $(".nav__hover").stop();
    $(".nav__hover").width($(".nav__item_active").width());
    return $(".nav__hover").animate({
      left: $(".nav__item_active").offset().left - $('.nav').offset().left
    }, 250);
  };
  toActiveMainMenuHover();
  $(".nav__item").mouseover(function() {
    $(".nav__hover").stop();
    $(".nav__hover").width($(this).width());
    return $(".nav__hover").animate({
      left: $(this).offset().left - $('.nav').offset().left
    }, 250);
  });
  $(".nav__item").mouseout(function() {
    return toActiveMainMenuHover();
  });
  $(".js-tab-tech-price").click(function() {
    $(".tab__item.active").removeClass("active");
    $(this).addClass("active");
    $(".tech-table__data").removeClass("tech-table__data_active");
    if ($(this).attr("id") === "month") {
      return $(".tech-table__data_month").addClass("tech-table__data_active");
    } else {
      return $(".tech-table__data_year").addClass("tech-table__data_active");
    }
  });
  $(".technology").viewportChecker({
    offset: 300,
    callbackFunction: function(elem, action) {
      return $(".radial-item__progress, .radial-item__progress-active").each(function() {
        var cfrom, cto, ctx, draw, example, html, p, staticDraw, t, t1, x;
        p = $(this).data("value") * 100;
        cfrom = $(this).data("color-from");
        cto = $(this).data("color-to");
        x = 0;
        html = $(this).html();
        $(this).html('');
        example = $('<canvas width="' + $(this).data("size") + '" height="' + $(this).data("size") + '">' + html + '</canvas>').appendTo($(this))[0];
        ctx = example.getContext('2d');
        t = 27;
        t1 = 16;
        staticDraw = function() {
          ctx.clearRect(0, 0, example.width, example.height);
          ctx.beginPath();
          ctx.arc(example.width / 2, example.height / 2, example.height / 2 - t / 2, 0, Math.PI * 2, false);
          ctx.strokeStyle = "#f5f5f5";
          ctx.lineWidth = t - 3;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(example.width / 2, example.height / 2, example.height / 2 - 1, 0, Math.PI * 2, false);
          ctx.strokeStyle = "#e5e5e5";
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(example.width / 2, example.height / 2, example.height / 2 - t + 1, 0, Math.PI * 2, false);
          ctx.strokeStyle = "#e5e5e5";
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(example.width / 2, example.height / 2, example.height / 2 - t / 2, Math.PI * 1.5, 180 * Math.PI / 180, true);
          ctx.strokeStyle = "#fff";
          ctx.lineWidth = 30;
          ctx.stroke();
          ctx.save();
          ctx.translate(example.width / 2, example.height / 2);
          ctx.rotate(180 * Math.PI / 180 + Math.PI / 2);
          ctx.beginPath();
          ctx.moveTo(0, -example.height / 2 + t);
          ctx.lineTo(0, -example.height / 2);
          ctx.strokeStyle = "#e5e5e5";
          ctx.lineWidth = 1;
          ctx.stroke();
          return ctx.restore();
        };
        draw = function() {
          var grd;
          staticDraw();
          grd = ctx.createLinearGradient(0, 0, example.width, example.height);
          grd.addColorStop(0, cfrom);
          grd.addColorStop(1, cto);
          ctx.beginPath();
          ctx.arc(example.width / 2, example.height / 2, example.height / 2 - t / 2, Math.PI * 1.5, 36 * (x + 1) / 10 * Math.PI / 180 + Math.PI * 1.5, false);
          ctx.strokeStyle = "#fff";
          ctx.lineWidth = 27;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(example.width / 2, example.height / 2, example.height / 2 - t / 2, Math.PI * 1.5, 36 * x / 10 * Math.PI / 180 + Math.PI * 1.5, false);
          ctx.strokeStyle = grd;
          ctx.lineWidth = t1;
          ctx.stroke();
          ctx.save();
          ctx.translate(example.width / 2, example.height / 2);
          ctx.rotate(36 * (x + 1) / 10 * Math.PI / 180 - Math.PI * 2);
          ctx.beginPath();
          ctx.moveTo(0, -example.height / 2 + t);
          ctx.lineTo(0, -example.height / 2);
          ctx.strokeStyle = "#e5e5e5";
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
          if (x < p) {
            window.requestAnimationFrame(draw);
          }
          return x += 1;
        };
        return draw();
      });
    }
  });
  $(window).resize(function() {
    if (!mq600.matches) {
      return $(".popup-tech__header .popup-tech__cell").each(function() {
        var containers, i, indx, maxH;
        indx = $(this).index() + 1;
        containers = $(this).add($(".popup-tech__coll .popup-tech__cell:nth-child(" + indx + ")"));
        maxH = 0;
        i = 0;
        return containers.each(function() {
          var h;
          $(this).height("auto");
          h = $(this).height();
          if (h > maxH) {
            maxH = h;
          }
          i += 1;
          if (i === containers.length) {
            if (typeof maxH === 'undefined' || typeof maxH === 'null') {
              false;
            }
            return containers.css({
              height: maxH + 'px'
            });
          }
        });
      });
    }
  });
  $(window).resize(function() {
    if (!mq550.matches) {
      return $(".popup-shop__header .popup-shop__cell").each(function() {
        var containers, i, indx, maxH;
        indx = $(this).index() + 1;
        containers = $(this).add($(this).closest(".popup-shop__table").find(".popup-shop__coll .popup-shop__cell:nth-child(" + indx + ")"));
        maxH = 0;
        i = 0;
        return containers.each(function() {
          var h;
          $(this).height("auto");
          h = $(this).height();
          if (h > maxH) {
            maxH = h;
          }
          i += 1;
          if (i === containers.length) {
            if (typeof maxH === 'undefined' || typeof maxH === 'null') {
              false;
            }
            return containers.css({
              height: maxH + 'px'
            });
          }
        });
      });
    }
  });
  resizeBgPortfolio = function() {
    return $(".portfolio-item-inline").each(function() {
      var bg, bgLeft, bgRight, cnt;
      cnt = $(this).find(".portfolio-item-inline__content");
      bg = $(this).find(".portfolio-item-inline__bg");
      bgLeft = $(this).offset().left - cnt.offset().left;
      bgRight = cnt.offset().left + cnt.outerWidth() - $(this).width();
      return bg.css({
        left: bgLeft,
        right: bgRight
      });
    });
  };
  resizeBgPortfolio();
  $(window).resize(function() {
    return resizeBgPortfolio();
  });
  resizeBgAbout = function() {
    return $(".top-banner").each(function() {
      var bg, bgBottom, bgLeft, bgRight, bgTop, cnt;
      cnt = $(this).find(".top-banner__block");
      bg = $(this).find(".top-banner__bg");
      bgLeft = $(this).offset().left - cnt.offset().left;
      bgRight = cnt.offset().left + cnt.outerWidth() - $(this).width();
      bgTop = $(this).offset().top - cnt.offset().top;
      bgBottom = cnt.offset().top + cnt.outerHeight() - $(this).outerHeight();
      return bg.css({
        top: bgTop,
        bottom: bgBottom,
        left: bgLeft,
        right: bgRight
      });
    });
  };
  resizeBgAbout();
  $(window).resize(function() {
    return resizeBgAbout();
  });
  mq480 = window.matchMedia('only screen and (max-width : 480px)');
  mq480Handler = function() {
    if (mq480.matches) {
      $('.shop-price__slider').addClass("owl-carousel");
      return $('.shop-price__slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1,
        onInitialized: function(e) {
          var cont;
          cont = $(e.target).closest(".js-tabs-height");
          console.log(cont);
          return cont.height($(e.target).outerHeight());
        }
      });
    } else {
      if ($('.shop-price__slider').hasClass("owl-carousel")) {
        return $('.shop-price__slider').removeClass("owl-carousel").trigger('destroy.owl.carousel');
      }
    }
  };
  mq480Handler();
  mq480.addListener(mq480Handler);
  $(".shop-price__header .shop-price__cell").each(function() {
    var containers, i, indx, maxH;
    if (!mq480.matches) {
      indx = $(this).index() + 1;
      containers = $(this).add($(".shop-price__col .shop-price__cell:nth-child(" + indx + ")"));
      maxH = 0;
      i = 0;
      return containers.each(function() {
        var h;
        $(this).height("auto");
        h = $(this).height();
        if (h > maxH) {
          maxH = h;
        }
        i += 1;
        if (i === containers.length) {
          if (typeof maxH === 'undefined' || typeof maxH === 'null') {
            false;
          }
          return containers.css({
            height: maxH + 'px'
          });
        }
      });
    }
  });
  $('.call__select').niceSelect();
  consistCarousel = $('.shop-consist__slider').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: true,
    dotsContainer: ".shop-consist__slider-dots"
  });
  $('.shop-consist__arrow_prev').click(function() {
    return consistCarousel.trigger('prev.owl.carousel');
  });
  $('.shop-consist__arrow_next').click(function() {
    return consistCarousel.trigger('next.owl.carousel');
  });
  shopworkCarousel = $('.shop-work__slider').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    onDragged: function(e) {
      $(".shop-work-item").removeClass("shop-work-item_animate_left").removeClass("shop-work-item_animate_right").removeClass("shop-work-item_first");
      if (this._drag.direction === "left") {
        $(".owl-item .shop-work-item").addClass("shop-work-item_animate_left");
      }
      if (this._drag.direction === "right") {
        return $(".owl-item .shop-work-item").addClass("shop-work-item_animate_right");
      }
    },
    onInitialized: function() {
      return $(".owl-item.active .shop-work-item").addClass("shop-work-item_first");
    }
  });
  $('.shop-work__arrow_prev').click(function() {
    shopworkCarousel.trigger('prev.owl.carousel');
    $(".shop-work-item").removeClass("shop-work-item_animate_left").removeClass("shop-work-item_animate_right").removeClass("shop-work-item_first");
    return $(".owl-item .shop-work-item").addClass("shop-work-item_animate_right");
  });
  $('.shop-work__arrow_next').click(function() {
    shopworkCarousel.trigger('next.owl.carousel');
    $(".shop-work-item").removeClass("shop-work-item_animate_left").removeClass("shop-work-item_animate_right").removeClass("shop-work-item_first");
    return $(".owl-item .shop-work-item").addClass("shop-work-item_animate_left");
  });
  $(window).on("load", function() {
    return $(".top-banner__typed").typed({
      strings: ['С любовью. ^800 Честно. ^800 Как для себя.'],
      typeSpeed: 80,
      loop: false,
      backDelay: 5000
    });
  });
  $(window).resize(function() {
    if ($("div").is("#piechart")) {
      return drawChart();
    }
  });
  $(".js-about-reviews-still").click(function() {
    $(".about-reviews__btn").addClass("about-reviews__btn_hide");
    $(".about-reviews__hidden").slideDown();
    return false;
  });
  vacancyBlockFixed = function() {
    var headerSize, scrollPosition, vacancyBlock;
    scrollPosition = $(window).scrollTop();
    vacancyBlock = $(".vacancy-block-container");
    headerSize = $(".header").height();
    vacancyBlock.removeClass("vacancy-block-container_fixed").removeClass("vacancy-block-container_absolute").css({
      top: "auto"
    });
    if (!mq950.matches && vacancyBlock.height() < $(".vacancy__accordion").height()) {
      if (scrollPosition + headerSize < $(".vacancy__body").offset().top - 10) {
        vacancyBlock.removeClass("vacancy-block-container_fixed").removeClass("vacancy-block-container_absolute").css({
          top: "auto"
        });
      }
      if (scrollPosition + headerSize > $(".vacancy__body").offset().top - 10) {
        vacancyBlock.removeClass("vacancy-block-container_absolute").addClass("vacancy-block-container_fixed").css({
          top: headerSize + 10
        });
      }
      if (scrollPosition + headerSize > $(".vacancy__body").offset().top + $(".vacancy__body").height() - vacancyBlock.outerHeight()) {
        return vacancyBlock.removeClass("vacancy-block-container_fixed").addClass("vacancy-block-container_absolute").css({
          top: "auto"
        });
      }
    }
  };
  vacancyBlockFixed();
  $(window).scroll(function() {
    return vacancyBlockFixed();
  });
  $(window).resize(function() {
    return vacancyBlockFixed();
  });
  $(".vacancy__accordion").on("accordionactivate accordioncreate", function(event, ui) {
    return vacancyBlockFixed();
  });
  $(".about-reviews-item__link").click(function() {
    $(this).closest(".about-reviews-item").closest(".about-reviews__item-wrap").css({
      height: $(this).closest(".about-reviews-item").outerHeight()
    });
    $(this).closest(".about-reviews-item").addClass("about-reviews-item_fixed");
    $(this).closest(".about-reviews-item").find(".about-reviews-item__hide").show();
    return $(this).hide();
  });
  $(window).mouseup(function() {
    $(".about-reviews__item-wrap").css({
      height: "auto"
    });
    $(".about-reviews-item").removeClass("about-reviews-item_fixed");
    $(".about-reviews-item").find(".about-reviews-item__hide").hide();
    return $(".about-reviews-item__link").show();
  });
  $(".employee-item").click(function() {
    if (!$(this).hasClass("employee-item_vacancy")) {
      $(".employee-full-item_active").removeClass("employee-full-item_active");
      $(".employee-item_active").removeClass("employee-item_active");
      $(this).addClass("employee-item_active");
      return $("#employee-full-item-" + $(this).data("id")).addClass("employee-full-item_active");
    }
  });
  $(".js-top-next").click(function() {
    var scrollTo;
    if (!mq550.matches) {
      scrollTo = $(".header").hasClass("header_fixed") ? $("#about-menu").offset().top - $(".header").height() : $("#about-menu").offset().top - $(".header").height() + 27;
    } else {
      scrollTo = $(".header").hasClass("header_fixed") ? $("#client-company").offset().top - $(".header").height() : $("#client-company").offset().top - $(".header").height() + 27;
    }
    return $('html, body').animate({
      scrollTop: scrollTo
    }, 1000);
  });
  $(".js-still-add-shop").click(function() {
    return $('html, body').animate({
      scrollTop: $("#shop-consist").offset().top - $(".header").height()
    }, 2000);
  });
  $(".js-cool-vacancy").click(function() {
    return $('html, body').animate({
      scrollTop: $("#vacancy").offset().top - $(".header").height()
    }, 2000);
  });
  aboutMenuFixed = function() {
    var aboutMenu, headerSize, scrollPosition;
    if ($("div").is("#about-menu")) {
      scrollPosition = $(window).scrollTop();
      aboutMenu = $("#about-menu");
      headerSize = $(".header").height();
      if (scrollPosition + headerSize >= $(".about-menu-wrap").offset().top) {
        if (!mq550.matches && !aboutMenu.hasClass("about-menu_header")) {
          return aboutMenu.addClass("about-menu_header").appendTo($(".header"));
        }
      } else {
        return aboutMenu.removeClass("about-menu_header").appendTo($(".about-menu-wrap"));
      }
    }
  };
  aboutMenuFixed();
  $(window).scroll(function() {
    return aboutMenuFixed();
  });
  $(".about-menu__link").mPageScroll2id({
    offset: $(".header"),
    highlightClass: "about-menu__link_active"
  });
  return $('.shop-layers').imagesLoaded(function() {
    return $(".shop-layers").addClass("shop-layers_animate");
  });
});
