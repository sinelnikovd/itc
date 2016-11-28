$(document).ready ->
	$('input.js-inputmask').inputmask("+7 (999) 999-99-99",{ "clearIncomplete": true })

	clientCarousel = $('.client__slider').owlCarousel
		loop: true
		nav: false
		items: 1
		dotsContainer: ".slider-nav__dots"
		dotsData: true
		autoplay: true
		autoplayTimeout: 10000
	$('.slider-nav__prev').click ->
		clientCarousel.trigger('prev.owl.carousel')
	$('.slider-nav__next').click ->
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


	$(".select-inline__txt").click ->
		$(@).next(".select-inline__list").toggleClass("select-inline__list_dropdown")
		$(@).closest(".select-inline").find(".select-inline__overlay").toggleClass("select-inline__overlay_dropdown")

		self = $(@)

		$(@).closest(".select-inline").find(".select-inline__overlay").click ->
			self.next(".select-inline__list").removeClass("select-inline__list_dropdown")
			self.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown")

		$(@).next(".select-inline__list").find(".select-inline__item").click ->
			self.text($(@).text())
			self.next(".select-inline__list").removeClass("select-inline__list_dropdown")
			self.closest(".select-inline").find(".select-inline__overlay").removeClass("select-inline__overlay_dropdown")


	#top10PriceCellSize = []
	#$(".top10-price__col").each (i)->
	#	if(i == 0)
	#		$(@).height()

	$(".top10-price__slide-nav_prev").click ->
		$('.top10-price__row').slick("slickPrev")
	$(".top10-price__slide-nav_next").click ->
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
				$(".top").css
					"padding-top": $(".header").height() + "px"
		if scrollPosition <= 0
			if $(".header").hasClass("header_fixed")
				$(".header").removeClass("header_fixed")
				$(".top").css
					"padding-top": 0 +"px"

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




