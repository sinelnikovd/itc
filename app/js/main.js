$(document).ready(function(){var e,t,i,o,s,a,n,r,l,c,_,h,d,p,u,f,m,v,w,b,g,k,C,y,x,P,T,j,S,M;return $("input.js-inputmask").inputmask("+7 (999) 999-99-99",{clearIncomplete:!0}),s=$(".client__slider").owlCarousel({loop:!0,nav:!1,items:1,dots:!0,dotsContainer:".client-slider-nav__dots",dotsData:!0,autoplay:!0,autoplayTimeout:1e4}),$(".client-slider-nav__arrow_prev").click(function(){return s.trigger("prev.owl.carousel")}),$(".client-slider-nav__arrow_next").click(function(){return s.trigger("next.owl.carousel")}),$(".call__select").change(function(){return $(".call__phone-item").removeClass("call__phone-item_active"),$(".call__phone-item").eq($(this).val()).addClass("call__phone-item_active")}),$(window).on("load",function(){var e;return e=function(e){var t,i;if($("div").is("#sidebar-top")&&(i=$("#sidebar-top").offset().top+$("#sidebar-top").outerHeight()),t=$("div").is("#sidebar-bottom")?$("#sidebar-bottom").offset().top:$(".footer").offset().top,e>i-105&&$("#sidebar").addClass("sidebar_fixed"),e<=i-105&&$("#sidebar").removeClass("sidebar_fixed"),e>t-$("#sidebar .sidebar__body").outerHeight(!0)-105&&($("#sidebar").removeClass("sidebar_fixed"),$("#sidebar").addClass("sidebar_absolute"),$("#sidebar").css({bottom:$(document).height()-t+$("#sidebar .sidebar__body").outerHeight(!0)})),e<=t-$("#sidebar .sidebar__body").outerHeight(!0)-105)return $("#sidebar").removeClass("sidebar_absolute"),$("#sidebar").css({bottom:"auto"})},e($(window).scrollTop()),$(window).scroll(function(){var t;return t=$(this).scrollTop(),e(t)})}),$(".accordion").accordion({collapsible:!0,heightStyle:"content"}),$(".accordion").accordion("option","icons",null),$(".vacancy__accordion").accordion("option","active",!1),$(".accordion").on("accordionbeforeactivate",function(e,t){return t.oldHeader.removeClass("accordion__head_active"),t.newHeader.addClass("accordion__head_active")}),$(".technology__item .technology__accordion").on("accordionbeforeactivate",function(e,t){return $(".technology__item.active .radial-item").removeClass("radial-item_active"),console.log(t.newHeader.index()),$(".technology__item.active .radial-item").eq(t.newHeader.index()/2).addClass("radial-item_active")}),$(".select-inline__txt").click(function(){var e,t;return e=$(this).next(".select-inline__list").toggleClass("select-inline__list_dropdown"),e.offset().left+e.width()>$(document).width()&&e.css({right:"-30px"}),$(this).closest(".select-inline").find(".select-inline__overlay").toggleClass("select-inline__overlay_dropdown"),t=$(this),$(this).closest(".select-inline").find(".select-inline__overlay").click(function(){return t.next(".select-inline__list").removeClass("select-inline__list_dropdown"),t.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown")}),$(this).next(".select-inline__list").find(".select-inline__item").click(function(){return t.text($(this).text()),$(".typesite__list.typesite__list_active").removeClass("typesite__list_active"),$(".typesite__list").eq($(this).index()).addClass("typesite__list_active"),t.next(".select-inline__list").removeClass("select-inline__list_dropdown"),t.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown")})}),$(".js-tab-top10").click(function(){return $(".tab__item.active").removeClass("active"),$(this).addClass("active"),$(".top10-price__data").removeClass("top10-price__data_active"),"sub-month"===$(this).attr("id")?$(".top10-price__data_month").addClass("top10-price__data_active"):$(".top10-price__data_year").addClass("top10-price__data_active")}),$(".top10-price__arrow_prev").click(function(){return $(".top10-price__row").slick("slickPrev")}),$(".top10-price__arrow_next").click(function(){return $(".top10-price__row").slick("slickNext")}),$(".popup-tech__arrow_prev").click(function(){return $(".popup-tech__slider-items").trigger("prev.owl.carousel")}),$(".popup-tech__arrow_next").click(function(){return $(".popup-tech__slider-items").trigger("next.owl.carousel")}),j=!1,u=window.matchMedia("only screen and (max-width : 750px)"),f=function(){return u.matches?($(".top10-price__row").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,slide:".top10-price__cell_slide",asNavFor:".top10-price__row"}),j=!0,$(".popup-tech__slider-items").addClass("owl-carousel"),$(".popup-tech__slider-items").owlCarousel({loop:!0,nav:!1,dots:!1,items:2,responsive:{0:{items:1},600:{items:2}}})):(j&&($(".top10-price__row").slick("unslick"),j=!1),$(".popup-tech__slider-items").hasClass("owl-carousel")?$(".popup-tech__slider-items").removeClass("owl-carousel").trigger("destroy.owl.carousel"):void 0)},f(),u.addListener(f),r=function(e){if(e>0&&($(".header").hasClass("header_fixed")||$(".header").addClass("header_fixed")),e<=0&&$(".header").hasClass("header_fixed"))return $(".header").removeClass("header_fixed")},r($(window).scrollTop()),$(window).scroll(function(){var e;return e=$(this).scrollTop(),r(e)}),$(window).scroll(function(){if($(".sidebar").is(":visible"))return $(".sidebar__link").each(function(){var e,t;return e=$(this),t=e.offset().top+e.outerHeight()/2,$(".darkBlock").each(function(i,o){var s,a;return a=$(this).offset().top,s=a+$(this).outerHeight(),t>a&&t<=s?(e.addClass("sidebar__link_white"),!1):e.removeClass("sidebar__link_white")})})}),T=!1,$(".employee__nav_prev").click(function(){return $(".employee__slider").slick("slickPrev")}),$(".employee__nav_next").click(function(){return $(".employee__slider").slick("slickNext")}),m=window.matchMedia("only screen and (max-width : 950px)"),v=function(){return m.matches?($(".header__call").prependTo($("#nav")),$(".sidebar__links").appendTo($("#nav")),$(".employee__slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:601,settings:{vertical:!0}}]}),T=!0):($(".header__call").insertBefore($(".header__recall")),$(".sidebar__links").appendTo($(".sidebar__body")),$(".nav__hover").stop(),$(".nav__hover").width($(".nav__item_active").width()),$(".nav__hover").animate({left:$(".nav__item_active").offset().left-$(".nav").offset().left},250),T?($(".employee__slider").slick("unslick"),T=!1):void 0)},v(),m.addListener(v),$(".hamburger").click(function(){return $(".header").toggleClass("header_nav750active")}),n=$(".efficiency__slider").owlCarousel({loop:!0,nav:!1,items:1,dots:!1}),$(".efficiency__arrow_prev").click(function(){return n.trigger("prev.owl.carousel")}),$(".efficiency__arrow_next").click(function(){return n.trigger("next.owl.carousel")}),x=$(".reviews__items").owlCarousel({loop:!0,nav:!1,items:1,dots:!1}),$(".reviews__arrow_prev").click(function(){return x.trigger("prev.owl.carousel")}),$(".reviews__arrow_next").click(function(){return x.trigger("next.owl.carousel")}),$(".price__arrow_prev").click(function(){return $(".price__list").slick("slickPrev")}),$(".price__arrow_next").click(function(){return $(".price__list").slick("slickNext")}),$(".tech-price__arrow_prev").click(function(){return $(".tech-table__row").slick("slickPrev")}),$(".tech-price__arrow_next").click(function(){return $(".tech-table__row").slick("slickNext")}),w=!1,b=!1,d=window.matchMedia("only screen and (max-width : 600px)"),p=function(){return d.matches?($(".price__list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,slide:".price-item"}),w=!0,$(".tech-table__row").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,slide:".js-slide",asNavFor:".tech-table__row"}),b=!0,$(".popup-tech__cell").css({height:"auto"})):(w&&($(".price__list").slick("unslick"),w=!1),b?($(".tech-table__row").slick("unslick"),b=!1):void 0)},p(),d.addListener(p),$(".popup-shop__arrow_prev").click(function(){return $(this).closest(".popup-shop__table").find(".popup-shop__slider-items").trigger("prev.owl.carousel")}),$(".popup-shop__arrow_next").click(function(){return $(this).closest(".popup-shop__table").find(".popup-shop__slider-items").trigger("next.owl.carousel")}),o=!1,_=window.matchMedia("only screen and (max-width : 550px)"),h=function(){return _.matches?($(".card__items").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,adaptiveHeight:!0}),o=!0,$(".popup-shop__slider-items").addClass("owl-carousel"),$(".popup-shop__slider-items").owlCarousel({loop:!0,nav:!1,dots:!1,items:2,responsive:{0:{items:1},600:{items:2}}}),$("#about-menu").removeClass("about-menu_header").appendTo($(".about-menu-wrap"))):(o&&($(".card__items").slick("unslick"),o=!1),$(".popup-shop__slider-items").hasClass("owl-carousel")?$(".popup-shop__slider-items").removeClass("owl-carousel").trigger("destroy.owl.carousel"):void 0)},h(),_.addListener(h),$(".site-result__btn").click(function(){return $(this).toggleClass("site-result__btn_active"),$(this).next(".site-result__list-wrap").slideToggle()}),$(".js-order-popup").magnificPopup({items:{src:"#popup-order",type:"inline"},closeMarkup:'<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'}),$(".js-call-popup").magnificPopup({items:{src:"#popup-call",type:"inline"},closeMarkup:'<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'}),$(".js-question-popup").magnificPopup({items:{src:"#popup-question",type:"inline"},closeMarkup:'<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'}),$(".js-tech-popup").magnificPopup({items:{src:"#popup-tech",type:"inline"},closeMarkup:'<button title="%title%" type="button" class="mfp-close"><i></i></button>',callbacks:{open:function(){return $(".popup-tech__header .popup-tech__cell").each(function(){var e,t,i,o;return i=$(this).index()+1,e=$(this).add($(".popup-tech__coll .popup-tech__cell:nth-child("+i+")")),o=0,t=0,e.each(function(){var i;if($(this).height("auto"),i=$(this).height(),i>o&&(o=i),t+=1,t===e.length)return e.css({height:o+"px"})})})}}}),$(".js-shop-popup").magnificPopup({items:{src:"#popup-shop",type:"inline"},closeMarkup:'<button title="%title%" type="button" class="mfp-close"><i></i></button>',callbacks:{open:function(){return $(".popup-shop__header .popup-shop__cell").each(function(){var e,t,i,o;return i=$(this).index()+1,e=$(this).add($(this).closest(".popup-shop__table").find(".popup-shop__coll .popup-shop__cell:nth-child("+i+")")),o=0,t=0,console.log(e),e.each(function(){var i;if($(this).height("auto"),i=$(this).height(),i>o&&(o=i),t+=1,t===e.length)return e.css({height:o+"px"})})})}}}),$(".file-upload__input").each(function(){var e,t,i;return e=$(this),t=e.next("label"),i=t.find(".file-upload__txt").html(),e.on("change",function(o){var s;return s="",this.files&&this.files.length>1?s=(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):o.target.value&&(s=o.target.value.split("\\").pop()),s?(t.find(".file-upload__txt").html(s),e.parent().addClass("file-upload_load")):(t.find(".file-upload__txt").html(i),e.parent().removeClass("file-upload_load"))}),e.on("focus",function(){return e.addClass("has-focus")}).on("blur",function(){return e.removeClass("has-focus")}),t.next(".file-upload__kill").on("click",function(){return t.find(".file-upload__txt").text(""),e.val(""),e.parent().removeClass("file-upload_load")})}),t=function(e,i,o){return e.eq(i).addClass("anim").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){return i!==o&&t(e,i+1,o),e.eq(i).addClass("anim-stop"),$(".js-button").eq(i+1).addClass("lines-point_orange")})},g=function(e,i,o){return 0===i||e.eq(i-1).hasClass("anim-stop")?void t(e,i,o):g(e,i-1,o)},$(".js-button").click(function(){var e;if($(".js-button").first().addClass("lines-point_orange"),e=$(this).hasClass("js-button_finish")?$(".js-button").last().index():$(this).index(),!$(this).closest(".js-lines").find(".js-line").eq(e).hasClass("anim-stop"))return g($(this).closest(".js-lines").find(".js-line"),e,e),g($(this).closest(".js-lines").find(".js-btn-line"),e,e)}),$(".js-button").click(function(e){return $(this).addClass("tooltip_active"),$(this).css({"z-index":50}),$(".fade").show()}),$(".fade").click(function(){return $(".js-button.tooltip_active").css({"z-index":1}),$(".js-button.tooltip_active").removeClass("tooltip_active"),$(".fade").hide()}),$(window).scroll(function(){var e,t;if(t=-($(window).scrollTop()/2),e="center "+t+"px",$(".top-bg").css({backgroundPosition:e}),$("div").is(".order")&&(t=($(window).scrollTop()-$(".order").offset().top)/2,e="center "+t+"px",$(".order").css({backgroundPosition:e})),$("div").is(".rsya")&&(t=-($(window).scrollTop()-$(".rsya").offset().top)/10,e=t+"px",$(".rsya__arm").css({transform:"translateY("+e+")"})),$("div").is(".mission"))return t=-($(window).scrollTop()-$(".mission").offset().top)/10,e="center "+t+"px",$(".mission").css({backgroundPosition:e})}),$(".js-interaction").click(function(){return $(this).addClass("interaction-item_active-tooltip"),$(".fade").show()}),$(".fade").click(function(){return $(".js-interaction.interaction-item_active-tooltip").removeClass("interaction-item_active-tooltip"),$(".fade").hide()}),$(".rate__tab-container").tabtab({tabMenu:".rate__tab",tabContent:".rate-content",startSlide:1,easing:"easeInOutCubic",translateX:"500px"}),$(".technology__tab-container").tabtab({tabMenu:".technology__tab",tabContent:".technology__body",startSlide:1,easing:"easeInOutCubic",translateX:"500px"}),$(".evaluation__tab-container").tabtab({tabMenu:".evaluation__tab",tabContent:".evaluation__body",fixedHeight:!1,dynamicHeight:!0,startSlide:1,easing:"easeInOutCubic",translateX:"500px"}),$(".solutions__tab-container").tabtab({tabMenu:".solutions__tab",tabContent:".solutions__body",fixedHeight:!0,startSlide:1,easing:"easeInOutCubic",translateX:"500px"}),$(".shop-price__tab-container").tabtab({tabMenu:".shop-price__tab",tabContent:".shop-price__body",startSlide:1,fixedHeight:!0,easing:"easeInOutCubic",translateX:"500px"}),$(".instrument__tab-container").tabtab({tabMenu:".instrument__tab",tabContent:".instrument__body",startSlide:1,fixedHeight:!1,dynamicHeight:!0,easing:"easeInOutCubic",translateX:"500px"}),$(".scheme-work").viewportChecker({offset:300,callbackFunction:function(e,t){return e.find(".line-scheme__line").removeClass("line-scheme__line_to-animated"),e.find(".line-scheme__line").addClass("line-scheme__line_animated")}}),i=function(e,t,o){return e.eq(t).addClass("anim").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){return t!==o&&i(e,t+1,o),e.eq(t).addClass("anim-stop"),$(".js-tech-button").eq(t+1).addClass("tech-point_orange")})},k=function(e,t,o){return 0===t||e.eq(t-1).hasClass("anim-stop")?void i(e,t,o):k(e,t-1,o)},$(".tech-shem").viewportChecker({offset:300,callbackFunction:function(e,t){var i;return console.log("ASdasdd"),$(".js-tech-button").first().addClass("tech-point_orange"),i=$(".js-tech-button").last().index(),k($(".js-tech-line"),i,i),k($(".js-tech-btn-line"),i,i)}}),S=function(){return $(".nav__hover").stop(),$(".nav__hover").width($(".nav__item_active").width()),$(".nav__hover").animate({left:$(".nav__item_active").offset().left-$(".nav").offset().left},250)},S(),$(".nav__item").mouseover(function(){return $(".nav__hover").stop(),$(".nav__hover").width($(this).width()),$(".nav__hover").animate({left:$(this).offset().left-$(".nav").offset().left},250)}),$(".nav__item").mouseout(function(){return S()}),$(".js-tab-tech-price").click(function(){return $(".tab__item.active").removeClass("active"),$(this).addClass("active"),$(".tech-table__data").removeClass("tech-table__data_active"),"month"===$(this).attr("id")?$(".tech-table__data_month").addClass("tech-table__data_active"):$(".tech-table__data_year").addClass("tech-table__data_active")}),$(".technology").viewportChecker({offset:300,callbackFunction:function(e,t){return $(".radial-item__progress, .radial-item__progress-active").each(function(){var e,t,i,o,s,a,n,r,l,c,_;return n=100*$(this).data("value"),e=$(this).data("color-from"),t=$(this).data("color-to"),_=0,a=$(this).html(),$(this).html(""),s=$('<canvas width="'+$(this).data("size")+'" height="'+$(this).data("size")+'">'+a+"</canvas>").appendTo($(this))[0],i=s.getContext("2d"),l=27,c=16,r=function(){return i.clearRect(0,0,s.width,s.height),i.beginPath(),i.arc(s.width/2,s.height/2,s.height/2-l/2,0,2*Math.PI,!1),i.strokeStyle="#f5f5f5",i.lineWidth=l-3,i.stroke(),i.beginPath(),i.arc(s.width/2,s.height/2,s.height/2-1,0,2*Math.PI,!1),i.strokeStyle="#e5e5e5",i.lineWidth=1,i.stroke(),i.beginPath(),i.arc(s.width/2,s.height/2,s.height/2-l+1,0,2*Math.PI,!1),i.strokeStyle="#e5e5e5",i.lineWidth=1,i.stroke(),i.beginPath(),i.arc(s.width/2,s.height/2,s.height/2-l/2,1.5*Math.PI,180*Math.PI/180,!0),i.strokeStyle="#fff",i.lineWidth=30,i.stroke(),i.save(),i.translate(s.width/2,s.height/2),i.rotate(180*Math.PI/180+Math.PI/2),i.beginPath(),i.moveTo(0,-s.height/2+l),i.lineTo(0,-s.height/2),i.strokeStyle="#e5e5e5",i.lineWidth=1,i.stroke(),i.restore()},(o=function(){var a;return r(),a=i.createLinearGradient(0,0,s.width,s.height),a.addColorStop(0,e),a.addColorStop(1,t),i.beginPath(),i.arc(s.width/2,s.height/2,s.height/2-l/2,1.5*Math.PI,36*(_+1)/10*Math.PI/180+1.5*Math.PI,!1),i.strokeStyle="#fff",i.lineWidth=27,i.stroke(),i.beginPath(),i.arc(s.width/2,s.height/2,s.height/2-l/2,1.5*Math.PI,36*_/10*Math.PI/180+1.5*Math.PI,!1),i.strokeStyle=a,i.lineWidth=c,i.stroke(),i.save(),i.translate(s.width/2,s.height/2),i.rotate(36*(_+1)/10*Math.PI/180-2*Math.PI),i.beginPath(),i.moveTo(0,-s.height/2+l),i.lineTo(0,-s.height/2),i.strokeStyle="#e5e5e5",i.lineWidth=1,i.stroke(),i.restore(),_<n&&window.requestAnimationFrame(o),_+=1})()})}}),$(window).resize(function(){if(!d.matches)return $(".popup-tech__header .popup-tech__cell").each(function(){var e,t,i,o;return i=$(this).index()+1,e=$(this).add($(".popup-tech__coll .popup-tech__cell:nth-child("+i+")")),o=0,t=0,e.each(function(){var i;if($(this).height("auto"),i=$(this).height(),i>o&&(o=i),t+=1,t===e.length)return e.css({height:o+"px"})})})}),$(window).resize(function(){if(!_.matches)return $(".popup-shop__header .popup-shop__cell").each(function(){var e,t,i,o;return i=$(this).index()+1,e=$(this).add($(this).closest(".popup-shop__table").find(".popup-shop__coll .popup-shop__cell:nth-child("+i+")")),o=0,t=0,e.each(function(){var i;if($(this).height("auto"),i=$(this).height(),i>o&&(o=i),t+=1,t===e.length)return e.css({height:o+"px"})})})}),y=function(){return $(".portfolio-item-inline").each(function(){var e,t,i,o;return o=$(this).find(".portfolio-item-inline__content"),e=$(this).find(".portfolio-item-inline__bg"),t=$(this).offset().left-o.offset().left,i=o.offset().left+o.outerWidth()-$(this).width(),e.css({left:t,right:i})})},y(),$(window).resize(function(){return y()}),C=function(){return $(".top-banner").each(function(){var e,t,i,o,s,a;return a=$(this).find(".top-banner__block"),e=$(this).find(".top-banner__bg"),i=$(this).offset().left-a.offset().left,o=a.offset().left+a.outerWidth()-$(this).width(),s=$(this).offset().top-a.offset().top,t=a.offset().top+a.outerHeight()-$(this).outerHeight(),e.css({top:s,bottom:t,left:i,right:o})})},C(),$(window).resize(function(){return C()}),l=window.matchMedia("only screen and (max-width : 480px)"),c=function(){return l.matches?($(".shop-price__slider").addClass("owl-carousel"),$(".shop-price__slider").owlCarousel({loop:!0,nav:!1,dots:!1,items:1,onInitialized:function(e){var t;return t=$(e.target).closest(".js-tabs-height"),console.log(t),t.height($(e.target).outerHeight())}})):$(".shop-price__slider").hasClass("owl-carousel")?$(".shop-price__slider").removeClass("owl-carousel").trigger("destroy.owl.carousel"):void 0},c(),l.addListener(c),$(".shop-price__header .shop-price__cell").each(function(){var e,t,i,o;if(!l.matches)return i=$(this).index()+1,e=$(this).add($(".shop-price__col .shop-price__cell:nth-child("+i+")")),o=0,t=0,e.each(function(){var i;if($(this).height("auto"),i=$(this).height(),i>o&&(o=i),t+=1,t===e.length)return e.css({height:o+"px"})})}),$(".call__select").niceSelect(),a=$(".shop-consist__slider").owlCarousel({loop:!0,nav:!1,items:1,dots:!0,dotsContainer:".shop-consist__slider-dots"}),$(".shop-consist__arrow_prev").click(function(){return a.trigger("prev.owl.carousel")}),$(".shop-consist__arrow_next").click(function(){return a.trigger("next.owl.carousel")}),P=$(".shop-work__slider").owlCarousel({loop:!0,nav:!1,items:1,dots:!1,smartSpeed:1e3,onDragged:function(e){if($(".shop-work-item").removeClass("shop-work-item_animate_left").removeClass("shop-work-item_animate_right").removeClass("shop-work-item_first"),"left"===this._drag.direction&&$(".owl-item .shop-work-item").addClass("shop-work-item_animate_left"),"right"===this._drag.direction)return $(".owl-item .shop-work-item").addClass("shop-work-item_animate_right")},onInitialized:function(){return $(".owl-item.active .shop-work-item").addClass("shop-work-item_first")}}),$(".shop-work__arrow_prev").click(function(){return P.trigger("prev.owl.carousel"),$(".shop-work-item").removeClass("shop-work-item_animate_left").removeClass("shop-work-item_animate_right").removeClass("shop-work-item_first"),$(".owl-item .shop-work-item").addClass("shop-work-item_animate_right")}),$(".shop-work__arrow_next").click(function(){return P.trigger("next.owl.carousel"),$(".shop-work-item").removeClass("shop-work-item_animate_left").removeClass("shop-work-item_animate_right").removeClass("shop-work-item_first"),$(".owl-item .shop-work-item").addClass("shop-work-item_animate_left")}),$(window).on("load",function(){return $(".top-banner__typed").typed({strings:["С любовью. ^800 Честно. ^800 Как для себя."],typeSpeed:80,loop:!1,backDelay:5e3})}),$(window).resize(function(){if($("div").is("#piechart"))return drawChart()}),$(".js-about-reviews-still").click(function(){return $(".about-reviews__btn").addClass("about-reviews__btn_hide"),$(".about-reviews__hidden").slideDown(),!1}),M=function(){var e,t,i;if(t=$(window).scrollTop(),i=$(".vacancy-block-container"),e=$(".header").height(),i.removeClass("vacancy-block-container_fixed").removeClass("vacancy-block-container_absolute").css({top:"auto"}),!m.matches&&i.height()<$(".vacancy__accordion").height()&&(t+e<$(".vacancy__body").offset().top-10&&i.removeClass("vacancy-block-container_fixed").removeClass("vacancy-block-container_absolute").css({top:"auto"}),t+e>$(".vacancy__body").offset().top-10&&i.removeClass("vacancy-block-container_absolute").addClass("vacancy-block-container_fixed").css({top:e+10}),t+e>$(".vacancy__body").offset().top+$(".vacancy__body").height()-i.outerHeight()))return i.removeClass("vacancy-block-container_fixed").addClass("vacancy-block-container_absolute").css({top:"auto"})},M(),$(window).scroll(function(){return M()}),$(window).resize(function(){return M()}),$(".vacancy__accordion").on("accordionactivate accordioncreate",function(e,t){return M()}),$(".about-reviews-item__link").click(function(){return $(this).closest(".about-reviews-item").closest(".about-reviews__item-wrap").css({height:$(this).closest(".about-reviews-item").outerHeight()}),$(this).closest(".about-reviews-item").addClass("about-reviews-item_fixed"),$(this).closest(".about-reviews-item").find(".about-reviews-item__hide").show(),$(this).hide()}),$(window).mouseup(function(){return $(".about-reviews__item-wrap").css({height:"auto"}),$(".about-reviews-item").removeClass("about-reviews-item_fixed"),$(".about-reviews-item").find(".about-reviews-item__hide").hide(),$(".about-reviews-item__link").show()}),$(".employee-item").click(function(){if(!$(this).hasClass("employee-item_vacancy"))return $(".employee-full-item_active").removeClass("employee-full-item_active"),$(".employee-item_active").removeClass("employee-item_active"),$(this).addClass("employee-item_active"),$("#employee-full-item-"+$(this).data("id")).addClass("employee-full-item_active")}),$(".js-top-next").click(function(){var e;return e=_.matches?$(".header").hasClass("header_fixed")?$("#client-company").offset().top-$(".header").height():$("#client-company").offset().top-$(".header").height()+27:$(".header").hasClass("header_fixed")?$("#about-menu").offset().top-$(".header").height():$("#about-menu").offset().top-$(".header").height()+27,$("html, body").animate({scrollTop:e},1e3)}),$(".js-still-add-shop").click(function(){return $("html, body").animate({scrollTop:$("#shop-consist").offset().top-$(".header").height()},2e3)}),$(".js-cool-vacancy").click(function(){return $("html, body").animate({scrollTop:$("#vacancy").offset().top-$(".header").height()},2e3)}),e=function(){var e,t,i;if($("div").is("#about-menu")){if(i=$(window).scrollTop(),e=$("#about-menu"),t=$(".header").height(),!(i+t>=$(".about-menu-wrap").offset().top))return e.removeClass("about-menu_header").appendTo($(".about-menu-wrap"));if(!_.matches&&!e.hasClass("about-menu_header"))return e.addClass("about-menu_header").appendTo($(".header"))}},e(),$(window).scroll(function(){return e()}),$(".about-menu__link").mPageScroll2id({offset:$(".header"),highlightClass:"about-menu__link_active"}),$(".shop-layers").imagesLoaded(function(){return $(".shop-layers").addClass("shop-layers_animate")})});