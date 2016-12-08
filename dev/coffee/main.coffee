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


	$(".call__tab-link").click ->
		if !$(@).parent().hasClass("call__tab-item_active")
			$(".call__tab-item").removeClass("call__tab-item_active")
			$(@).parent().addClass("call__tab-item_active")
			$(".call__phone-item").removeClass("call__phone-item_active")
			$(".call__phone-item").eq($(@).parent().index()).addClass("call__phone-item_active")
		false

	$(window).on "load", ->
		sidebarTop = $("#sidebar-top").offset().top + $("#sidebar-top").outerHeight()
		sidebarBottom = if $("div").is("#sidebar-bottom") then $("#sidebar-bottom").offset().top else $(".footer").offset().top

		sidebarFixed = (scrollPosition) ->
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

	$( ".accordion" ).on( "accordionbeforeactivate",( event, ui ) ->
		ui.oldHeader.removeClass("accordion__head_active")

		ui.newHeader.addClass("accordion__head_active")
	)

	$( ".technology__accordion" ).on( "accordionbeforeactivate",( event, ui ) ->
		$(".radial-item").removeClass("radial-item_active")
		$(".radial-item").eq(ui.newHeader.index()/2).addClass("radial-item_active")
	)




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

		else
			if slickInit
				$('.top10-price__row').slick("unslick")
				slickInit = false
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


	mq950 = window.matchMedia('only screen and (max-width : 950px)')
	mq950Handler = ->
		if mq950.matches
			$(".header__call").prependTo($("#nav"))
			$(".sidebar__links").appendTo($("#nav"))
		else
			$(".header__call").insertBefore($(".header__recall"))
			$(".sidebar__links").appendTo($(".sidebar__body"))
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

		else
			if priceSlickInit
				$('.price__list').slick("unslick")
				priceSlickInit = false
			if priceTechSlickInit
				$('.tech-table__row').slick("unslick")
				priceTechSlickInit = false
	mq600Handler()
	mq600.addListener(mq600Handler)





	$(".site-result__btn").click ->
		$(@).toggleClass("site-result__btn_active")
		$(@).next(".site-result__list-wrap").slideToggle()


	$('.radial-item__progress, .radial-item__progress-active').circleProgress
			startAngle: -Math.PI / 2
			emptyFill: "rgba(0,0,0,0)"
			thickness: 18



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
		startSlide: 1
		easing: "easeInOutCubic"
		translateX: "500px"



	$(".scheme-work").viewportChecker
		offset: 300
		callbackFunction: (elem, action)->
			elem.find(".line-scheme__line").removeClass("line-scheme__line_to-animated")
			elem.find(".line-scheme__line").addClass("line-scheme__line_animated")








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


