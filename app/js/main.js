$(document).ready(function(){var e,i,t,r,l,o,s,n,a,c,_,d,u;return $("input.js-inputmask").inputmask("+7 (999) 999-99-99",{clearIncomplete:!0}),e=$(".client__slider").owlCarousel({loop:!0,nav:!1,items:1,dots:!0,dotsContainer:".client-slider-nav__dots",dotsData:!0,autoplay:!0,autoplayTimeout:1e4}),$(".client-slider-nav__arrow_prev").click(function(){return e.trigger("prev.owl.carousel")}),$(".client-slider-nav__arrow_next").click(function(){return e.trigger("next.owl.carousel")}),$(".call__tab-link").click(function(){return $(this).parent().hasClass("call__tab-item_active")||($(".call__tab-item").removeClass("call__tab-item_active"),$(this).parent().addClass("call__tab-item_active"),$(".call__phone-item").removeClass("call__phone-item_active"),$(".call__phone-item").eq($(this).parent().index()).addClass("call__phone-item_active")),!1}),$(window).on("load",function(){var e,i,t;return t=$("#sidebar-top").offset().top+$("#sidebar-top").outerHeight(),e=$("div").is("#sidebar-bottom")?$("#sidebar-bottom").offset().top:$(".footer").offset().top,i=function(i){if(i>t-105&&$("#sidebar").addClass("sidebar_fixed"),i<=t-105&&$("#sidebar").removeClass("sidebar_fixed"),i>e-$("#sidebar .sidebar__body").outerHeight(!0)-105&&($("#sidebar").removeClass("sidebar_fixed"),$("#sidebar").addClass("sidebar_absolute"),$("#sidebar").css({bottom:$(document).height()-e+$("#sidebar .sidebar__body").outerHeight(!0)})),i<=e-$("#sidebar .sidebar__body").outerHeight(!0)-105)return $("#sidebar").removeClass("sidebar_absolute"),$("#sidebar").css({bottom:"auto"})},i($(window).scrollTop()),$(window).scroll(function(){var e;return e=$(this).scrollTop(),i(e)})}),$(".accordion").accordion({collapsible:!0,heightStyle:"content"}),$(".accordion").accordion("option","icons",null),$(".accordion").on("accordionbeforeactivate",function(e,i){return i.oldHeader.removeClass("accordion__head_active"),i.newHeader.addClass("accordion__head_active")}),$(".technology__accordion").on("accordionbeforeactivate",function(e,i){return $(".radial-item").removeClass("radial-item_active"),$(".radial-item").eq(i.newHeader.index()/2).addClass("radial-item_active")}),$(".select-inline__txt").click(function(){var e,i;return e=$(this).next(".select-inline__list").toggleClass("select-inline__list_dropdown"),e.offset().left+e.width()>$(document).width()&&e.css({right:"-30px"}),$(this).closest(".select-inline").find(".select-inline__overlay").toggleClass("select-inline__overlay_dropdown"),i=$(this),$(this).closest(".select-inline").find(".select-inline__overlay").click(function(){return i.next(".select-inline__list").removeClass("select-inline__list_dropdown"),i.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown")}),$(this).next(".select-inline__list").find(".select-inline__item").click(function(){return i.text($(this).text()),i.next(".select-inline__list").removeClass("select-inline__list_dropdown"),i.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown")})}),$(".top10-price__arrow_prev").click(function(){return $(".top10-price__row").slick("slickPrev")}),$(".top10-price__arrow_next").click(function(){return $(".top10-price__row").slick("slickNext")}),u=!1,o=window.matchMedia("only screen and (max-width : 750px)"),s=function(){return o.matches?($(".top10-price__row").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,slide:".top10-price__cell_slide",asNavFor:".top10-price__row"}),u=!0):u?($(".top10-price__row").slick("unslick"),u=!1):void 0},s(),o.addListener(s),t=function(e){if(e>0&&($(".header").hasClass("header_fixed")||$(".header").addClass("header_fixed")),e<=0&&$(".header").hasClass("header_fixed"))return $(".header").removeClass("header_fixed")},t($(window).scrollTop()),$(window).scroll(function(){var e;return e=$(this).scrollTop(),t(e)}),$(window).scroll(function(){if($(".sidebar").is(":visible"))return $(".sidebar__link").each(function(){var e,i;return e=$(this),i=e.offset().top+e.outerHeight()/2,$(".darkBlock").each(function(t,r){var l,o;return o=$(this).offset().top,l=o+$(this).outerHeight(),i>o&&i<=l?(e.addClass("sidebar__link_white"),!1):e.removeClass("sidebar__link_white")})})}),n=window.matchMedia("only screen and (max-width : 950px)"),a=function(){return n.matches?($(".header__call").prependTo($("#nav")),$(".sidebar__links").appendTo($("#nav"))):($(".header__call").insertBefore($(".header__recall")),$(".sidebar__links").appendTo($(".sidebar__body")))},a(),n.addListener(a),$(".hamburger").click(function(){return $(".header").toggleClass("header_nav750active")}),i=$(".efficiency__slider").owlCarousel({loop:!0,nav:!1,items:1,dots:!1}),$(".efficiency__arrow_prev").click(function(){return i.trigger("prev.owl.carousel")}),$(".efficiency__arrow_next").click(function(){return i.trigger("next.owl.carousel")}),d=$(".reviews__items").owlCarousel({loop:!0,nav:!1,items:1,dots:!1}),$(".reviews__arrow_prev").click(function(){return d.trigger("prev.owl.carousel")}),$(".reviews__arrow_next").click(function(){return d.trigger("next.owl.carousel")}),$(".price__arrow_prev").click(function(){return $(".price__list").slick("slickPrev")}),$(".price__arrow_next").click(function(){return $(".price__list").slick("slickNext")}),$(".tech-price__arrow_prev").click(function(){return $(".tech-table__row").slick("slickPrev")}),$(".tech-price__arrow_next").click(function(){return $(".tech-table__row").slick("slickNext")}),c=!1,_=!1,r=window.matchMedia("only screen and (max-width : 600px)"),l=function(){return r.matches?($(".price__list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,slide:".price-item"}),c=!0,$(".tech-table__row").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,slide:".js-slide",asNavFor:".tech-table__row"}),_=!0):(c&&($(".price__list").slick("unslick"),c=!1),_?($(".tech-table__row").slick("unslick"),_=!1):void 0)},l(),r.addListener(l),$(".site-result__btn").click(function(){return $(this).toggleClass("site-result__btn_active"),$(this).next(".site-result__list-wrap").slideToggle()}),$(".radial-item__progress, .radial-item__progress-active").circleProgress({startAngle:-Math.PI/2,emptyFill:"rgba(0,0,0,0)",thickness:18}),$(".js-order-popup").magnificPopup({items:{src:"#popup-order",type:"inline"},closeMarkup:'<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'}),$(".file-upload__input").each(function(){var e,i,t;return e=$(this),i=e.next("label"),t=i.find(".file-upload__txt").html(),e.on("change",function(r){var l;return l="",this.files&&this.files.length>1?l=(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):r.target.value&&(l=r.target.value.split("\\").pop()),l?(i.find(".file-upload__txt").html(l),e.parent().addClass("file-upload_load")):(i.find(".file-upload__txt").html(t),e.parent().removeClass("file-upload_load"))}),e.on("focus",function(){return e.addClass("has-focus")}).on("blur",function(){return e.removeClass("has-focus")}),i.next(".file-upload__kill").on("click",function(){return i.find(".file-upload__txt").text(""),e.val(""),e.parent().removeClass("file-upload_load")})})});