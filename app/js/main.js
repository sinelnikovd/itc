$(document).ready(function(){var e,t,i,a,n,s,o,r,l,c,_,d,u,p,f,h;return $("input.js-inputmask").inputmask("+7 (999) 999-99-99",{clearIncomplete:!0}),t=$(".client__slider").owlCarousel({loop:!0,nav:!1,items:1,dots:!0,dotsContainer:".client-slider-nav__dots",dotsData:!0,autoplay:!0,autoplayTimeout:1e4}),$(".client-slider-nav__arrow_prev").click(function(){return t.trigger("prev.owl.carousel")}),$(".client-slider-nav__arrow_next").click(function(){return t.trigger("next.owl.carousel")}),$(".call__tab-link").click(function(){return $(this).parent().hasClass("call__tab-item_active")||($(".call__tab-item").removeClass("call__tab-item_active"),$(this).parent().addClass("call__tab-item_active"),$(".call__phone-item").removeClass("call__phone-item_active"),$(".call__phone-item").eq($(this).parent().index()).addClass("call__phone-item_active")),!1}),$(window).on("load",function(){var e,t,i;return i=$("#sidebar-top").offset().top+$("#sidebar-top").outerHeight(),e=$("div").is("#sidebar-bottom")?$("#sidebar-bottom").offset().top:$(".footer").offset().top,t=function(t){if(t>i-105&&$("#sidebar").addClass("sidebar_fixed"),t<=i-105&&$("#sidebar").removeClass("sidebar_fixed"),t>e-$("#sidebar .sidebar__body").outerHeight(!0)-105&&($("#sidebar").removeClass("sidebar_fixed"),$("#sidebar").addClass("sidebar_absolute"),$("#sidebar").css({bottom:$(document).height()-e+$("#sidebar .sidebar__body").outerHeight(!0)})),t<=e-$("#sidebar .sidebar__body").outerHeight(!0)-105)return $("#sidebar").removeClass("sidebar_absolute"),$("#sidebar").css({bottom:"auto"})},t($(window).scrollTop()),$(window).scroll(function(){var e;return e=$(this).scrollTop(),t(e)})}),$(".accordion").accordion({collapsible:!0,heightStyle:"content"}),$(".accordion").accordion("option","icons",null),$(".accordion").on("accordionbeforeactivate",function(e,t){return t.oldHeader.removeClass("accordion__head_active"),t.newHeader.addClass("accordion__head_active")}),$(".technology__accordion").on("accordionbeforeactivate",function(e,t){return $(".radial-item").removeClass("radial-item_active"),$(".radial-item").eq(t.newHeader.index()/2).addClass("radial-item_active")}),$(".select-inline__txt").click(function(){var e,t;return e=$(this).next(".select-inline__list").toggleClass("select-inline__list_dropdown"),e.offset().left+e.width()>$(document).width()&&e.css({right:"-30px"}),$(this).closest(".select-inline").find(".select-inline__overlay").toggleClass("select-inline__overlay_dropdown"),t=$(this),$(this).closest(".select-inline").find(".select-inline__overlay").click(function(){return t.next(".select-inline__list").removeClass("select-inline__list_dropdown"),t.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown")}),$(this).next(".select-inline__list").find(".select-inline__item").click(function(){return t.text($(this).text()),$(".typesite__list.typesite__list_active").removeClass("typesite__list_active"),$(".typesite__list").eq($(this).index()).addClass("typesite__list_active"),t.next(".select-inline__list").removeClass("select-inline__list_dropdown"),t.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown")})}),$(".js-tab-top10").click(function(){return $(".tab__item.active").removeClass("active"),$(this).addClass("active"),$(".top10-price__data").removeClass("top10-price__data_active"),"sub-month"===$(this).attr("id")?$(".top10-price__data_month").addClass("top10-price__data_active"):$(".top10-price__data_year").addClass("top10-price__data_active")}),$(".top10-price__arrow_prev").click(function(){return $(".top10-price__row").slick("slickPrev")}),$(".top10-price__arrow_next").click(function(){return $(".top10-price__row").slick("slickNext")}),f=!1,o=window.matchMedia("only screen and (max-width : 750px)"),r=function(){return o.matches?($(".top10-price__row").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,slide:".top10-price__cell_slide",asNavFor:".top10-price__row"}),f=!0):f?($(".top10-price__row").slick("unslick"),f=!1):void 0},r(),o.addListener(r),a=function(e){if(e>0&&($(".header").hasClass("header_fixed")||$(".header").addClass("header_fixed")),e<=0&&$(".header").hasClass("header_fixed"))return $(".header").removeClass("header_fixed")},a($(window).scrollTop()),$(window).scroll(function(){var e;return e=$(this).scrollTop(),a(e)}),$(window).scroll(function(){if($(".sidebar").is(":visible"))return $(".sidebar__link").each(function(){var e,t;return e=$(this),t=e.offset().top+e.outerHeight()/2,$(".darkBlock").each(function(i,a){var n,s;return s=$(this).offset().top,n=s+$(this).outerHeight(),t>s&&t<=n?(e.addClass("sidebar__link_white"),!1):e.removeClass("sidebar__link_white")})})}),l=window.matchMedia("only screen and (max-width : 950px)"),c=function(){return l.matches?($(".header__call").prependTo($("#nav")),$(".sidebar__links").appendTo($("#nav"))):($(".header__call").insertBefore($(".header__recall")),$(".sidebar__links").appendTo($(".sidebar__body")))},c(),l.addListener(c),$(".hamburger").click(function(){return $(".header").toggleClass("header_nav750active")}),i=$(".efficiency__slider").owlCarousel({loop:!0,nav:!1,items:1,dots:!1}),$(".efficiency__arrow_prev").click(function(){return i.trigger("prev.owl.carousel")}),$(".efficiency__arrow_next").click(function(){return i.trigger("next.owl.carousel")}),p=$(".reviews__items").owlCarousel({loop:!0,nav:!1,items:1,dots:!1}),$(".reviews__arrow_prev").click(function(){return p.trigger("prev.owl.carousel")}),$(".reviews__arrow_next").click(function(){return p.trigger("next.owl.carousel")}),$(".price__arrow_prev").click(function(){return $(".price__list").slick("slickPrev")}),$(".price__arrow_next").click(function(){return $(".price__list").slick("slickNext")}),$(".tech-price__arrow_prev").click(function(){return $(".tech-table__row").slick("slickPrev")}),$(".tech-price__arrow_next").click(function(){return $(".tech-table__row").slick("slickNext")}),_=!1,d=!1,n=window.matchMedia("only screen and (max-width : 600px)"),s=function(){return n.matches?($(".price__list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,slide:".price-item"}),_=!0,$(".tech-table__row").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,slide:".js-slide",asNavFor:".tech-table__row"}),d=!0):(_&&($(".price__list").slick("unslick"),_=!1),d?($(".tech-table__row").slick("unslick"),d=!1):void 0)},s(),n.addListener(s),$(".site-result__btn").click(function(){return $(this).toggleClass("site-result__btn_active"),$(this).next(".site-result__list-wrap").slideToggle()}),$(".radial-item__progress, .radial-item__progress-active").circleProgress({startAngle:-Math.PI/2,emptyFill:"rgba(0,0,0,0)",thickness:18}),$(".js-order-popup").magnificPopup({items:{src:"#popup-order",type:"inline"},closeMarkup:'<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'}),$(".js-call-popup").magnificPopup({items:{src:"#popup-call",type:"inline"},closeMarkup:'<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'}),$(".js-question-popup").magnificPopup({items:{src:"#popup-question",type:"inline"},closeMarkup:'<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'}),$(".file-upload__input").each(function(){var e,t,i;return e=$(this),t=e.next("label"),i=t.find(".file-upload__txt").html(),e.on("change",function(a){var n;return n="",this.files&&this.files.length>1?n=(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):a.target.value&&(n=a.target.value.split("\\").pop()),n?(t.find(".file-upload__txt").html(n),e.parent().addClass("file-upload_load")):(t.find(".file-upload__txt").html(i),e.parent().removeClass("file-upload_load"))}),e.on("focus",function(){return e.addClass("has-focus")}).on("blur",function(){return e.removeClass("has-focus")}),t.next(".file-upload__kill").on("click",function(){return t.find(".file-upload__txt").text(""),e.val(""),e.parent().removeClass("file-upload_load")})}),e=function(t,i,a){return t.eq(i).addClass("anim").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){return i!==a&&e(t,i+1,a),t.eq(i).addClass("anim-stop"),$(".js-button").eq(i+1).addClass("lines-point_orange")})},u=function(t,i,a){return 0===i||t.eq(i-1).hasClass("anim-stop")?void e(t,i,a):u(t,i-1,a)},$(".js-button").click(function(){var e;if($(".js-button").first().addClass("lines-point_orange"),e=$(this).hasClass("js-button_finish")?$(".js-button").last().index():$(this).index(),!$(this).closest(".js-lines").find(".js-line").eq(e).hasClass("anim-stop"))return u($(this).closest(".js-lines").find(".js-line"),e,e),u($(this).closest(".js-lines").find(".js-btn-line"),e,e)}),$(".js-button").click(function(e){return $(this).addClass("tooltip_active"),$(this).css({"z-index":50}),$(".fade").show()}),$(".fade").click(function(){return $(".js-button.tooltip_active").css({"z-index":1}),$(".js-button.tooltip_active").removeClass("tooltip_active"),$(".fade").hide()}),$(window).scroll(function(){var e,t;if(t=-($(window).scrollTop()/2),e="center "+t+"px",$(".top-bg").css({backgroundPosition:e}),t=($(window).scrollTop()-$(".order").offset().top)/2,e="center "+t+"px",$(".order").css({backgroundPosition:e}),$("div").is(".rsya"))return t=-($(window).scrollTop()-$(".rsya").offset().top)/10,e=t+"px",$(".rsya__arm").css({transform:"translateY("+e+")"})}),$(".js-interaction").click(function(){return $(this).addClass("interaction-item_active-tooltip"),$(".fade").show()}),$(".fade").click(function(){return $(".js-interaction.interaction-item_active-tooltip").removeClass("interaction-item_active-tooltip"),$(".fade").hide()}),$(".rate__tab-container").tabtab({tabMenu:".rate__tab",tabContent:".rate-content",startSlide:1,easing:"easeInOutCubic",translateX:"500px"}),$(".technology__tab-container").tabtab({tabMenu:".technology__tab",tabContent:".technology__body",startSlide:1,easing:"easeInOutCubic",translateX:"500px"}),$(".evaluation__tab-container").tabtab({tabMenu:".evaluation__tab",tabContent:".evaluation__body",fixedHeight:!1,startSlide:1,easing:"easeInOutCubic",translateX:"500px"}),$(".scheme-work").viewportChecker({offset:300,callbackFunction:function(e,t){return e.find(".line-scheme__line").removeClass("line-scheme__line_to-animated"),e.find(".line-scheme__line").addClass("line-scheme__line_animated")}}),h=function(){return $(".nav__hover").stop(),$(".nav__hover").width($(".nav__item_active").width()),$(".nav__hover").animate({left:$(".nav__item_active").offset().left-$(".nav").offset().left},250)},h(),$(".nav__item").mouseover(function(){return $(".nav__hover").stop(),$(".nav__hover").width($(this).width()),$(".nav__hover").animate({left:$(this).offset().left-$(".nav").offset().left},250)}),$(".nav__item").mouseout(function(){return h()}),$(".js-tab-tech-price").click(function(){return $(".tab__item.active").removeClass("active"),$(this).addClass("active"),$(".tech-table__data").removeClass("tech-table__data_active"),"month"===$(this).attr("id")?$(".tech-table__data_month").addClass("tech-table__data_active"):$(".tech-table__data_year").addClass("tech-table__data_active")})});