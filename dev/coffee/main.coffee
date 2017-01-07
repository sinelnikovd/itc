$(document).ready ->
	$('input.js-inputmask').inputmask "+7 (999) 999-99-99",
		clearIncomplete: true


	clientCarousel = $('.client__slider').owlCarousel
		loop: true
		nav: false
		items: 1
		dots: true
		dotsContainer: ".client-slider-nav__dots"
		dotsData: true
		autoplay: true
		autoplayTimeout: 10000
	$('.client-slider-nav__arrow_prev').click ->
		clientCarousel.trigger('prev.owl.carousel')
	$('.client-slider-nav__arrow_next').click ->
		clientCarousel.trigger('next.owl.carousel')


	$(".call__select").change ->
		$(".call__phone-item").removeClass("call__phone-item_active")
		$(".call__phone-item").eq($(@).val()).addClass("call__phone-item_active")


	$(window).on "load", ->
		sidebarFixed = (scrollPosition) ->
			if $("div").is("#sidebar-top")
				sidebarTop = $("#sidebar-top").offset().top + $("#sidebar-top").outerHeight()
			sidebarBottom = if $("div").is("#sidebar-bottom") then $("#sidebar-bottom").offset().top else $(".footer").offset().top
			if scrollPosition > sidebarTop - 105
				$("#sidebar").addClass("sidebar_fixed")
			if scrollPosition <= sidebarTop - 105
				$("#sidebar").removeClass("sidebar_fixed")

			if scrollPosition > sidebarBottom - $("#sidebar .sidebar__body").outerHeight(true) - 105
				$("#sidebar").removeClass("sidebar_fixed")
				$("#sidebar").addClass("sidebar_absolute")
				$("#sidebar").css
					bottom: $(document).height() - sidebarBottom + $("#sidebar .sidebar__body").outerHeight(true)
			if scrollPosition <= sidebarBottom - $("#sidebar .sidebar__body").outerHeight(true) - 105
				$("#sidebar").removeClass("sidebar_absolute")
				$("#sidebar").css
					bottom: "auto"

		sidebarFixed($(window).scrollTop())

		$(window).scroll ->
			scrollPosition = $(@).scrollTop()
			sidebarFixed(scrollPosition)


	$( ".accordion" ).accordion
		collapsible:true
		heightStyle:"content"
	$( ".accordion" ).accordion( "option", "icons", null )

	$( ".vacancy__accordion" ).accordion( "option", "active", false )

	$( ".accordion" ).on( "accordionbeforeactivate",( event, ui ) ->
		ui.oldHeader.removeClass("accordion__head_active")

		ui.newHeader.addClass("accordion__head_active")
	)



	$( ".technology__item .technology__accordion" ).on "accordionbeforeactivate", ( event, ui ) ->
		$(".technology__item.active .radial-item").removeClass("radial-item_active")
		console.log(ui.newHeader.index())
		$(".technology__item.active .radial-item").eq(ui.newHeader.index()/2).addClass("radial-item_active")




	##
	# Select inline tab
	##

	$(".select-inline__txt").click ->
		list = $(@).next(".select-inline__list").toggleClass("select-inline__list_dropdown")
		if list.offset().left + list.width() > $(document).width()
			list.css
				right: "-30px"
		$(@).closest(".select-inline").find(".select-inline__overlay").toggleClass("select-inline__overlay_dropdown")

		self = $(@)

		$(@).closest(".select-inline").find(".select-inline__overlay").click ->
			self.next(".select-inline__list").removeClass("select-inline__list_dropdown")
			self.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown")

		$(@).next(".select-inline__list").find(".select-inline__item").click ->
			self.text($(@).text())
			$(".typesite__list.typesite__list_active").removeClass("typesite__list_active")
			$(".typesite__list").eq($(@).index()).addClass("typesite__list_active")
			self.next(".select-inline__list").removeClass("select-inline__list_dropdown")
			self.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown")




	$(".js-tab-top10").click ->
		$(".tab__item.active").removeClass("active")
		$(@).addClass("active")
		$(".top10-price__data").removeClass("top10-price__data_active")
		if $(@).attr("id") == "sub-month"
			$(".top10-price__data_month").addClass("top10-price__data_active")
		else
			$(".top10-price__data_year").addClass("top10-price__data_active")


	$(".top10-price__arrow_prev").click ->
		$('.top10-price__row').slick("slickPrev")
	$(".top10-price__arrow_next").click ->
		$('.top10-price__row').slick("slickNext")


	$('.popup-tech__arrow_prev').click ->
		$('.popup-tech__slider-items').trigger('prev.owl.carousel')
	$('.popup-tech__arrow_next').click ->
		$('.popup-tech__slider-items').trigger('next.owl.carousel')

	slickInit = false

	mq750 = window.matchMedia('only screen and (max-width : 750px)')
	mq750Handler = ->
		if mq750.matches
			$('.top10-price__row').slick
				slidesToShow: 1
				slidesToScroll: 1
				arrows: false
				slide: ".top10-price__cell_slide"
				asNavFor: '.top10-price__row'
			slickInit = true



			#$('.popup-tech__slider').slick
			#	slidesToShow: 2
			#	slidesToScroll: 1
			#	arrows: false
			#	slide: ".popup-tech__coll"

			$('.popup-tech__slider-items').addClass("owl-carousel")
			$('.popup-tech__slider-items').owlCarousel
				loop: true
				nav: false
				dots: false
				items: 2
				responsive:
					0:
						items: 1
					600:
						items: 2

		else
			if slickInit
				$('.top10-price__row').slick("unslick")
				slickInit = false
			if $('.popup-tech__slider-items').hasClass("owl-carousel")
				$('.popup-tech__slider-items').removeClass("owl-carousel").trigger('destroy.owl.carousel')
	mq750Handler()
	mq750.addListener(mq750Handler)



	headerFixed = (scrollPosition) ->
		if scrollPosition > 0
			if !$(".header").hasClass("header_fixed")
				$(".header").addClass("header_fixed")
	#			$(".top, .top-bg").css
	#				"padding-top": $(".header").height() + "px"
		if scrollPosition <= 0
			if $(".header").hasClass("header_fixed")
				$(".header").removeClass("header_fixed")
	#			$(".top, .top-bg").css
	#				"padding-top": 0 +"px"

	headerFixed($(window).scrollTop())

	$(window).scroll ->
		scrollPosition = $(@).scrollTop()
		headerFixed(scrollPosition)

	$(window).scroll ->
		if $(".sidebar").is(":visible")
			$(".sidebar__link").each () ->
				link = $(@)
				linkCenter = link.offset().top + link.outerHeight()/2
				$(".darkBlock").each (index, element) ->
					darkTop = $(@).offset().top
					darkBottom = darkTop + $(@).outerHeight()
					if linkCenter > darkTop && linkCenter <= darkBottom
						link.addClass("sidebar__link_white")
						false
					else
						link.removeClass("sidebar__link_white")


	slicEmployeekInit = false


	$(".employee__nav_prev").click ->
		$('.employee__slider').slick("slickPrev")
	$(".employee__nav_next").click ->
		$('.employee__slider').slick("slickNext")

	mq950 = window.matchMedia('only screen and (max-width : 950px)')
	mq950Handler = ->
		if mq950.matches
			$(".header__call").prependTo($("#nav"))
			$(".sidebar__links").appendTo($("#nav"))

			$('.employee__slider').slick
				slidesToShow: 1
				slidesToScroll: 1
				arrows: false
				responsive: [
					{
						breakpoint: 601,
						settings: {
							vertical: true
						}
					},
				]
			slicEmployeekInit = true

		else
			$(".header__call").insertBefore($(".header__recall"))
			$(".sidebar__links").appendTo($(".sidebar__body"))

			$(".nav__hover").stop()
			$(".nav__hover").width($(".nav__item_active").width())
			$(".nav__hover").animate
				left : $(".nav__item_active").offset().left-$('.nav').offset().left
			, 250

			if slicEmployeekInit
				$('.employee__slider').slick("unslick")
				slicEmployeekInit = false

	mq950Handler()
	mq950.addListener(mq950Handler)

	#mq550 = window.matchMedia('only screen and (max-width : 550px)')
	#window.slideout
	#mq550Handler = ->
	#	if mq550.matches
	#		slideout = new Slideout
	#			'panel': document.getElementById('panel'),
	#			'menu': document.getElementById('menu')
	#		$("#nav").appendTo($("#menu"))
			
	#	else
	#		if slideout
	#			slideout.close()
	#			$("#nav").appendTo($(".header .container"))
	#mq550Handler()
	#mq550.addListener(mq550Handler)

	$(".hamburger").click ->
		$(".header").toggleClass("header_nav750active")


	efficiencyCarousel = $('.efficiency__slider').owlCarousel
		loop: true
		nav: false
		items: 1
		dots: false
	$('.efficiency__arrow_prev').click ->
		efficiencyCarousel.trigger('prev.owl.carousel')
	$('.efficiency__arrow_next').click ->
		efficiencyCarousel.trigger('next.owl.carousel')



	reviewsCarousel = $('.reviews__items').owlCarousel
		loop: true
		nav: false
		items: 1
		dots: false
	$('.reviews__arrow_prev').click ->
		reviewsCarousel.trigger('prev.owl.carousel')
	$('.reviews__arrow_next').click ->
		reviewsCarousel.trigger('next.owl.carousel')






	$(".price__arrow_prev").click ->
		$('.price__list').slick("slickPrev")
	$(".price__arrow_next").click ->
		$('.price__list').slick("slickNext")

	$(".tech-price__arrow_prev").click ->
		$('.tech-table__row').slick("slickPrev")
	$(".tech-price__arrow_next").click ->
		$('.tech-table__row').slick("slickNext")
	priceSlickInit = false
	priceTechSlickInit = false
	mq600 = window.matchMedia('only screen and (max-width : 600px)')
	mq600Handler = ->
		if mq600.matches
			$('.price__list').slick
				slidesToShow: 1
				slidesToScroll: 1
				arrows: false
				slide: ".price-item"
			priceSlickInit = true

			$('.tech-table__row').slick
				slidesToShow: 1
				slidesToScroll: 1
				arrows: false
				slide: ".js-slide"
				asNavFor: '.tech-table__row'
			priceTechSlickInit = true

			$(".popup-tech__cell").css
				height: "auto"


		else
			if priceSlickInit
				$('.price__list').slick("unslick")
				priceSlickInit = false
			if priceTechSlickInit
				$('.tech-table__row').slick("unslick")
				priceTechSlickInit = false
	mq600Handler()
	mq600.addListener(mq600Handler)





	$('.popup-shop__arrow_prev').click ->
		$(@).closest('.popup-shop__table').find('.popup-shop__slider-items').trigger('prev.owl.carousel')
	$('.popup-shop__arrow_next').click ->
		$(@).closest('.popup-shop__table').find('.popup-shop__slider-items').trigger('next.owl.carousel')

	cardSlickInit = false

	mq550 = window.matchMedia('only screen and (max-width : 550px)')
	mq550Handler = ->
		if mq550.matches
			$('.card__items').slick
				slidesToShow: 1
				slidesToScroll: 1
				arrows: false
				adaptiveHeight: true
			cardSlickInit = true


			$('.popup-shop__slider-items').addClass("owl-carousel")
			$('.popup-shop__slider-items').owlCarousel
				loop: true
				nav: false
				dots: false
				items: 2
				responsive:
					0:
						items: 1
					600:
						items: 2

			$("#about-menu").removeClass("about-menu_header").appendTo($(".about-menu-wrap"))

		else
			if cardSlickInit
				$('.card__items').slick("unslick")
				cardSlickInit = false

			if $('.popup-shop__slider-items').hasClass("owl-carousel")
				$('.popup-shop__slider-items').removeClass("owl-carousel").trigger('destroy.owl.carousel')
	mq550Handler()
	mq550.addListener(mq550Handler)



	$(".site-result__btn").click ->
		$(@).toggleClass("site-result__btn_active")
		$(@).next(".site-result__list-wrap").slideToggle()


	#$('.radial-item__progress, .radial-item__progress-active').circleProgress
	#		startAngle: -Math.PI / 2
	#		emptyFill: "rgba(0,0,0,0)"
	#		thickness: 18



	$(".js-order-popup").magnificPopup
		items:
			src: '#popup-order',
			type: 'inline'
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'


	$(".js-call-popup").magnificPopup
		items:
			src: '#popup-call',
			type: 'inline'
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'

	$(".js-question-popup").magnificPopup
		items:
			src: '#popup-question',
			type: 'inline'
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i></i><span>Закрыть</span></button>'

	$(".js-tech-popup").magnificPopup
		items:
			src: '#popup-tech',
			type: 'inline'
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i></i></button>'
		callbacks:
			open: ->
				$(".popup-tech__header .popup-tech__cell").each ->

					indx = $(@).index()+1
					containers = $(@).add($(".popup-tech__coll .popup-tech__cell:nth-child("+indx+")"))
					maxH = 0
					i = 0
					

					containers.each ->
						$(@).height("auto");
						h = $(@).height()
						if(h > maxH)
							maxH = h;

						i += 1;
						if i == containers.length
							if typeof maxH == 'undefined' || typeof maxH == 'null'
								false
							containers.css
								height: maxH + 'px'

	$(".js-shop-popup").magnificPopup
		items:
			src: '#popup-shop',
			type: 'inline'
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i></i></button>'
		callbacks:
			open: ->
				$(".popup-shop__header .popup-shop__cell").each ->

					indx = $(@).index()+1
					containers = $(@).add($(@).closest(".popup-shop__table").find(".popup-shop__coll .popup-shop__cell:nth-child("+indx+")"))
					maxH = 0
					i = 0

					console.log(containers)
					

					containers.each ->
						$(@).height("auto");
						h = $(@).height()
						if(h > maxH)
							maxH = h;

						i += 1;
						if i == containers.length
							if typeof maxH == 'undefined' || typeof maxH == 'null'
								false
							containers.css
								height: maxH + 'px'




	$( '.file-upload__input' ).each ->
		$input	 = $(@)
		$label	 = $input.next( 'label' )
		labelVal = $label.find( '.file-upload__txt' ).html()

		$input.on 'change', ( e ) ->
			fileName = '';

			if @.files && @.files.length > 1
				fileName = ( @.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', @.files.length )
			else if e.target.value
				fileName = e.target.value.split( '\\' ).pop()

			if fileName
				$label.find( '.file-upload__txt' ).html( fileName )
				$input.parent().addClass("file-upload_load")
			else
				$label.find( '.file-upload__txt' ).html( labelVal )
				$input.parent().removeClass("file-upload_load")


		$input
		.on 'focus', -> $input.addClass( 'has-focus' )
		.on 'blur', -> $input.removeClass( 'has-focus' )

		$label.next( '.file-upload__kill' ).on 'click', ->
			$label.find( '.file-upload__txt' ).text("")
			$input.val("")
			$input.parent().removeClass("file-upload_load")






	addAnim = (collection, elem, elInitIndex) ->
		collection.eq(elem).addClass("anim")
			.on "webkitAnimationEnd oanimationend msAnimationEnd animationend",->
				if elem != elInitIndex
					addAnim(collection, elem+1, elInitIndex)
				collection.eq(elem).addClass("anim-stop")
				$(".js-button").eq(elem+1).addClass("lines-point_orange")

	recur = (collection, elem, elInitIndex) ->
		if elem == 0 || collection.eq(elem-1).hasClass("anim-stop")
			addAnim(collection, elem, elInitIndex)
			return
		recur(collection, elem-1 , elInitIndex);

	$(".js-button").click ->
		$(".js-button").first().addClass("lines-point_orange")
		if $(@).hasClass("js-button_finish")
			elem = $(".js-button").last().index()
		else
			elem = $(@).index()

		if !$(@).closest(".js-lines").find(".js-line").eq(elem).hasClass("anim-stop")
			recur($(@).closest(".js-lines").find(".js-line"), elem ,elem)
			recur($(@).closest(".js-lines").find(".js-btn-line"), elem , elem)


	$(".js-button").click (e)->
		$(@).addClass("tooltip_active")
		$(@).css
			"z-index": 50
		$(".fade").show()
	$(".fade").click ->
		$(".js-button.tooltip_active").css
			"z-index": 1
		$(".js-button.tooltip_active").removeClass("tooltip_active")
		$(".fade").hide()


	$(window).scroll ->
		# top parallax
		yPos = -($(window).scrollTop() / 2)
		coords = 'center '+ yPos + 'px'
		$(".top-bg").css
			backgroundPosition: coords

		# order parallax
		if $("div").is(".order")
			yPos = ($(window).scrollTop() - $(".order").offset().top) / 2
			coords = 'center '+ yPos + 'px'
			$(".order").css
				backgroundPosition: coords

		# paralax arm
		if $("div").is(".rsya")
			yPos = -($(window).scrollTop() - $(".rsya").offset().top) / 10
			coords = yPos + 'px'
			$(".rsya__arm").css
				transform: "translateY("+coords+")"

		# paralax cloud
		if $("div").is(".mission")
			yPos = -($(window).scrollTop() - $(".mission").offset().top) / 10
			coords = 'center '+ yPos + 'px'
			$(".mission").css
				backgroundPosition: coords


	$(".js-interaction").click ->
		$(@).addClass("interaction-item_active-tooltip")
		$(".fade").show()
	$(".fade").click ->
		$(".js-interaction.interaction-item_active-tooltip").removeClass("interaction-item_active-tooltip")
		$(".fade").hide()


	$(".rate__tab-container").tabtab
		tabMenu: '.rate__tab'
		tabContent: '.rate-content'
		startSlide: 1
		easing: "easeInOutCubic"
		translateX: "500px"

	$(".technology__tab-container").tabtab
		tabMenu: '.technology__tab'
		tabContent: '.technology__body'
		startSlide: 1
		easing: "easeInOutCubic"
		translateX: "500px"

	$(".evaluation__tab-container").tabtab
		tabMenu: '.evaluation__tab'
		tabContent: '.evaluation__body'
		fixedHeight: false
		dynamicHeight: true
		startSlide: 1
		easing: "easeInOutCubic"
		translateX: "500px"

	$(".solutions__tab-container").tabtab
		tabMenu: '.solutions__tab'
		tabContent: '.solutions__body'
		fixedHeight: true
		startSlide: 1
		easing: "easeInOutCubic"
		translateX: "500px"


	$(".shop-price__tab-container").tabtab
		tabMenu: '.shop-price__tab'
		tabContent: '.shop-price__body'
		startSlide: 1
		fixedHeight: true
		easing: "easeInOutCubic"
		translateX: "500px"

	$(".instrument__tab-container").tabtab
		tabMenu: '.instrument__tab'
		tabContent: '.instrument__body'
		startSlide: 1
		fixedHeight: false
		dynamicHeight: true
		easing: "easeInOutCubic"
		translateX: "500px"



	$(".scheme-work").viewportChecker
		offset: 300
		callbackFunction: (elem, action)->
			elem.find(".line-scheme__line").removeClass("line-scheme__line_to-animated")
			elem.find(".line-scheme__line").addClass("line-scheme__line_animated")


	addAnimTech = (collection, elem, elInitIndex) ->
		collection.eq(elem).addClass("anim")
			.on "webkitAnimationEnd oanimationend msAnimationEnd animationend",->
				if elem != elInitIndex
					addAnimTech(collection, elem+1, elInitIndex)
				collection.eq(elem).addClass("anim-stop")
				$(".js-tech-button").eq(elem+1).addClass("tech-point_orange")

	recurTech = (collection, elem, elInitIndex) ->
		if elem == 0 || collection.eq(elem-1).hasClass("anim-stop")
			addAnimTech(collection, elem, elInitIndex)
			return
		recurTech(collection, elem-1 , elInitIndex);


	$(".tech-shem").viewportChecker
		offset: 300
		callbackFunction: (elem, action)->
			console.log("ASdasdd")
			$(".js-tech-button").first().addClass("tech-point_orange")
			el = $(".js-tech-button").last().index()
			recurTech($(".js-tech-line"), el ,el)
			recurTech($(".js-tech-btn-line"), el , el)








	##
	# main menu hover animation
	##

	toActiveMainMenuHover = ->
		$(".nav__hover").stop()
		$(".nav__hover").width($(".nav__item_active").width())
		$(".nav__hover").animate
			left : $(".nav__item_active").offset().left-$('.nav').offset().left
		, 250

	toActiveMainMenuHover();

	$(".nav__item").mouseover ->
		$(".nav__hover").stop()
		$(".nav__hover").width($(@).width())
		$(".nav__hover").animate
			left : $(@).offset().left-$('.nav').offset().left
		, 250

	$(".nav__item").mouseout ->
		toActiveMainMenuHover();


	$(".js-tab-tech-price").click ->
		$(".tab__item.active").removeClass("active")
		$(@).addClass("active")
		$(".tech-table__data").removeClass("tech-table__data_active")
		if $(@).attr("id") == "month"
			$(".tech-table__data_month").addClass("tech-table__data_active")
		else
			$(".tech-table__data_year").addClass("tech-table__data_active")



	##
	# CANVAS 
	##
	$(".technology").viewportChecker
		offset: 300
		callbackFunction: (elem, action)->
			$(".radial-item__progress, .radial-item__progress-active").each ->
				p = $(@).data("value")*100;
				cfrom = $(@).data("color-from")
				cto = $(@).data("color-to")
				x = 0;
				html = $(@).html();
				$(@).html('');
				example = $('<canvas width="'+$(@).data("size")+'" height="'+$(@).data("size")+'">'+html+'</canvas>').appendTo($(@))[0];
				ctx = example.getContext('2d');

				t = 27;
				t1 = 16;

				staticDraw = ()->

					ctx.clearRect(0, 0, example.width, example.height);

					ctx.beginPath();
					ctx.arc(example.width/2, example.height/2, example.height/2 -t/2 , 0, Math.PI*2, false);
					ctx.strokeStyle = "#f5f5f5"
					ctx.lineWidth = t-3;
					ctx.stroke();

					ctx.beginPath();
					ctx.arc(example.width/2, example.height/2, example.height/2-1, 0, Math.PI*2, false);
					ctx.strokeStyle = "#e5e5e5"
					ctx.lineWidth = 1;
					ctx.stroke();

					ctx.beginPath();
					ctx.arc(example.width/2, example.height/2, example.height/2 -t+1 , 0, Math.PI*2, false);
					ctx.strokeStyle = "#e5e5e5"
					ctx.lineWidth = 1;
					ctx.stroke();


					ctx.beginPath();
					ctx.arc(example.width/2, example.height/2, example.height/2-t/2 , Math.PI * 1.5, 180 * Math.PI/180, true);
					ctx.strokeStyle = "#fff"
					ctx.lineWidth = 30;
					ctx.stroke();

					ctx.save();
					ctx.translate(example.width/2, example.height/2);
					ctx.rotate(180 * Math.PI / 180 + Math.PI/2);
					ctx.beginPath();
					ctx.moveTo(0, -example.height/2+t);
					ctx.lineTo(0, -example.height/2);
					ctx.strokeStyle = "#e5e5e5"
					ctx.lineWidth = 1
					ctx.stroke();
					ctx.restore();

				draw = ()->

					staticDraw()

					grd = ctx.createLinearGradient(0,0,example.width, example.height);

					grd.addColorStop(0,cfrom);
					grd.addColorStop(1,cto);

					ctx.beginPath();
					ctx.arc(example.width/2, example.height/2, example.height/2-t/2 , Math.PI * 1.5, 36 * (x+1) / 10 * Math.PI/180 + Math.PI * 1.5, false);
					ctx.strokeStyle = "#fff"
					ctx.lineWidth = 27;
					ctx.stroke();

					ctx.beginPath();
					ctx.arc(example.width/2, example.height/2, example.height/2 - t/2 , Math.PI * 1.5, 36 * x / 10  * Math.PI/180 + Math.PI * 1.5, false);
					ctx.strokeStyle = grd
					ctx.lineWidth = t1;
					ctx.stroke();

					ctx.save();
					ctx.translate(example.width/2, example.height/2);
					ctx.rotate(36 * (x+1) / 10 * Math.PI / 180 - Math.PI * 2);
					ctx.beginPath();
					ctx.moveTo(0, -example.height/2+t);
					ctx.lineTo(0, -example.height/2);
					ctx.strokeStyle = "#e5e5e5"
					ctx.lineWidth = 1
					ctx.stroke();
					ctx.restore();


					if x < p
						window.requestAnimationFrame(draw);
					x += 1;

				draw()




	$(window).resize ->

		if !mq600.matches

			$(".popup-tech__header .popup-tech__cell").each ->

				indx = $(@).index()+1
				containers = $(@).add($(".popup-tech__coll .popup-tech__cell:nth-child("+indx+")"))
				maxH = 0
				i = 0
				


				containers.each ->
					$(@).height("auto");
					h = $(@).height()
					if(h > maxH)
						maxH = h;

					i += 1;
					if i == containers.length
						if typeof maxH == 'undefined' || typeof maxH == 'null'
							false
						containers.css
							height: maxH + 'px'


	$(window).resize ->

		if !mq550.matches

			$(".popup-shop__header .popup-shop__cell").each ->

				indx = $(@).index()+1
				containers = $(@).add($(@).closest(".popup-shop__table").find(".popup-shop__coll .popup-shop__cell:nth-child("+indx+")"))
				maxH = 0
				i = 0
				


				containers.each ->
					$(@).height("auto");
					h = $(@).height()
					if(h > maxH)
						maxH = h;

					i += 1;
					if i == containers.length
						if typeof maxH == 'undefined' || typeof maxH == 'null'
							false
						containers.css
							height: maxH + 'px'


	#$(".popup-tech__header .popup-tech__cell").each ->
	#	console.log($(@).add($(".popup-tech__slider .popup-tech__coll").first().find(".popup-tech__cell").eq($(@).index())))
	#	$(@).add($(".popup-tech__slider .popup-tech__coll").first().find(".popup-tech__cell").eq($(@).index())).equalHeightResponsive();



	resizeBgPortfolio = ->
		$(".portfolio-item-inline").each ->
			cnt = $(@).find(".portfolio-item-inline__content")
			bg = $(@).find(".portfolio-item-inline__bg")


			bgLeft = $(@).offset().left - cnt.offset().left
			
			bgRight = cnt.offset().left + cnt.outerWidth() - $(@).width()

			bg.css
				left: bgLeft
				right: bgRight


	resizeBgPortfolio()

	$(window).resize ->
		resizeBgPortfolio()


	resizeBgAbout = ->
		$(".top-banner").each ->
			cnt = $(@).find(".top-banner__block")
			bg = $(@).find(".top-banner__bg")


			bgLeft = $(@).offset().left - cnt.offset().left
			bgRight = cnt.offset().left + cnt.outerWidth() - $(@).width()

			bgTop = $(@).offset().top - cnt.offset().top
			bgBottom = cnt.offset().top + cnt.outerHeight() - $(@).outerHeight()



			bg.css
				top: bgTop
				bottom: bgBottom
				left: bgLeft
				right: bgRight


	resizeBgAbout()

	$(window).resize ->
		resizeBgAbout()



	mq480 = window.matchMedia('only screen and (max-width : 480px)')
	mq480Handler = ->
		if mq480.matches

			$('.shop-price__slider').addClass("owl-carousel")
			$('.shop-price__slider').owlCarousel
				loop: true
				nav: false
				dots: false
				items: 1
				onInitialized: (e) ->
					cont = $(e.target).closest(".js-tabs-height")
					console.log(cont)
					cont.height($(e.target).outerHeight())

		else
			if $('.shop-price__slider').hasClass("owl-carousel")
				$('.shop-price__slider').removeClass("owl-carousel").trigger('destroy.owl.carousel')
	mq480Handler()
	mq480.addListener(mq480Handler)



	$(".shop-price__header .shop-price__cell").each ->
		if !mq480.matches

			indx = $(@).index()+1
			containers = $(@).add($(".shop-price__col .shop-price__cell:nth-child("+indx+")"))
			maxH = 0
			i = 0
			


			containers.each ->
				$(@).height("auto");
				h = $(@).height()
				if(h > maxH)
					maxH = h;

				i += 1;
				if i == containers.length
					if typeof maxH == 'undefined' || typeof maxH == 'null'
						false
					containers.css
						height: maxH + 'px'



	
	$('.call__select').niceSelect();


	consistCarousel = $('.shop-consist__slider').owlCarousel
		loop: true
		nav: false
		items: 1
		dots: true
		dotsContainer: ".shop-consist__slider-dots"
	$('.shop-consist__arrow_prev').click ->
		consistCarousel.trigger('prev.owl.carousel')
	$('.shop-consist__arrow_next').click ->
		consistCarousel.trigger('next.owl.carousel')



	shopworkCarousel = $('.shop-work__slider').owlCarousel
		loop: true
		nav: false
		items: 1
		dots: false
		smartSpeed: 1000
		onDragged: (e)->
			$(".shop-work-item").removeClass("shop-work-item_animate_left").removeClass("shop-work-item_animate_right").removeClass("shop-work-item_first")
			if this._drag.direction == "left"
				$(".owl-item .shop-work-item").addClass("shop-work-item_animate_left")
			if this._drag.direction == "right"
				$(".owl-item .shop-work-item").addClass("shop-work-item_animate_right")
		onInitialized: ->
			$(".owl-item.active .shop-work-item").addClass("shop-work-item_first")


		#animateIn: "fadeInLeft"
		#animateOut: "fadeOutRight"
	$('.shop-work__arrow_prev').click ->
		shopworkCarousel.trigger('prev.owl.carousel')
	$('.shop-work__arrow_next').click ->
		shopworkCarousel.trigger('next.owl.carousel')


	$(window).on "load", ->
		$(".top-banner__typed").typed
			strings: ['С любовью. ^1500 Честно. ^1500 Как для себя.']
			typeSpeed: 150
			loop: false
			backDelay: 5000


	#$("#chart").each ->
	#	data = $(@).data("datas");
	#	html = $(@).html();
	#	$(@).html('');
	#	example = $('<canvas width="'+$(@).width()+'" height="'+$(@).width()+'">'+html+'</canvas>').appendTo($(@))[0];
	#	ctx = example.getContext('2d');

	#	ctx.clearRect(0, 0, example.width, example.height);

	#	prevAngle = 0

	#	for item in data
	#		console.log(item)
	#		angle = item.val*2*Math.PI/100 + prevAngle

	#		ctx.beginPath();
	#		ctx.arc(example.width/2, example.width/2, example.width/2 , prevAngle, angle, false);
	#		ctx.lineTo(example.width/2, example.width/2)
	#		ctx.fillStyle = item.color
	#		ctx.fill()

	#		prevAngle = angle

	$(window).resize ->
		if $("div").is("#piechart")
			drawChart();

	$(".js-about-reviews-still").click ->
		$(".about-reviews__btn").addClass("about-reviews__btn_hide")
		$(".about-reviews__hidden").slideDown();
		false


	vacancyBlockFixed = ->
		scrollPosition = $(window).scrollTop()
		vacancyBlock = $(".vacancy-block-container")
		headerSize = $(".header").height()


		vacancyBlock.removeClass("vacancy-block-container_fixed").removeClass("vacancy-block-container_absolute").css
				top: "auto"

		if !mq950.matches && vacancyBlock.height() < $(".vacancy__accordion").height()

			if scrollPosition + headerSize < $(".vacancy__body").offset().top - 10
				vacancyBlock.removeClass("vacancy-block-container_fixed").removeClass("vacancy-block-container_absolute").css
					top: "auto"

			if scrollPosition + headerSize > $(".vacancy__body").offset().top - 10
				vacancyBlock.removeClass("vacancy-block-container_absolute").addClass("vacancy-block-container_fixed").css
					top: headerSize + 10

			if scrollPosition + headerSize > $(".vacancy__body").offset().top + $(".vacancy__body").height() - vacancyBlock.outerHeight()
				vacancyBlock.removeClass("vacancy-block-container_fixed").addClass("vacancy-block-container_absolute").css
					top: "auto"





		#if $(window).width() > 950
		#	if vacancyBlock.height() < $(".vacancy__accordion").height()

		#		if scrollPosition + headerSize  < $(".vacancy__body").offset().top + $(".vacancy__body").height() - vacancyBlock.outerHeight()

		#			if scrollPosition + headerSize >= $(".vacancy__body").offset().top
		#				posTop = scrollPosition + headerSize - $(".vacancy__body").offset().top
		#				vacancyBlock.css
		#					transform: "translateY("+posTop+"px)"




	vacancyBlockFixed()

	$(window).scroll ->
		vacancyBlockFixed()

	$(window).resize ->
		vacancyBlockFixed()

	$( ".vacancy__accordion" ).on( "accordionactivate accordioncreate",( event, ui ) ->
		vacancyBlockFixed()

	)


	$(".about-reviews-item__link").click ->
		$(@).closest(".about-reviews-item").closest(".about-reviews__item-wrap").css
			height: $(@).closest(".about-reviews-item").outerHeight()
		$(@).closest(".about-reviews-item").addClass("about-reviews-item_fixed")
		$(@).closest(".about-reviews-item").find(".about-reviews-item__hide").show()

		$(@).hide()


	$(window).mouseup ->
		$(".about-reviews__item-wrap").css
			height: "auto"
		$(".about-reviews-item").removeClass("about-reviews-item_fixed")
		$(".about-reviews-item").find(".about-reviews-item__hide").hide()

		$(".about-reviews-item__link").show()


	$(".employee-item").click ->
		if !$(@).hasClass("employee-item_vacancy")
			$(".employee-full-item_active").removeClass("employee-full-item_active")

			$(".employee-item_active").removeClass("employee-item_active")

			$(@).addClass("employee-item_active")

			$("#employee-full-item-"+$(@).data("id")).addClass("employee-full-item_active")


	$(".js-top-next").click ->
		scrollTo = if $(".header").hasClass("header_fixed") then $("#about-menu").offset().top - $(".header").height() else $("#about-menu").offset().top - $(".header").height() + 27
		$('html, body').animate({
			scrollTop: scrollTo
		}, 1000);


	$(".js-still-add-shop").click ->
		$('html, body').animate({
			scrollTop: $("#shop-consist").offset().top - $(".header").height()
		}, 2000);

	$(".js-cool-vacancy").click ->
		$('html, body').animate({
			scrollTop: $("#vacancy").offset().top - $(".header").height()
		}, 2000);




	aboutMenuFixed = ->
		if $("div").is("#about-menu")
			scrollPosition = $(window).scrollTop()
			aboutMenu = $("#about-menu")
			headerSize = $(".header").height()


			if scrollPosition + headerSize >= $(".about-menu-wrap").offset().top
				if !mq550.matches && !aboutMenu.hasClass("about-menu_header")
					aboutMenu.addClass("about-menu_header").appendTo($(".header"))

			else
				aboutMenu.removeClass("about-menu_header").appendTo($(".about-menu-wrap"))




	aboutMenuFixed()

	$(window).scroll ->
		aboutMenuFixed()


	$(".about-menu__link").mPageScroll2id
		offset: $(".header")
		highlightClass: "about-menu__link_active"


	$('.shop-layers').imagesLoaded ->
		$(".shop-layers").addClass("shop-layers_animate")
