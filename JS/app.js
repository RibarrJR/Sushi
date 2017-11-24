// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//Scroll

$(window).scroll(function(){
				 var windowTop = $(this).scrollTop();
	$('.anime').each(function(){ 
		if(windowTop > $(this).offset().top-450){ 
		   $(this).addClass('init-anime');
		}
		else{
			$(this).removeClass('init-anime');
		}	
	});
	
});

$(window).scroll(function(){
				 var windowTop = $(this).scrollTop();
	$('.animation').each(function(){ 
		if(windowTop > $(this).offset().top-450){ 
		   $(this).addClass('init-anime');
		}
		else{
			$(this).removeClass('init-anime');
		}	
	});
	
});




//botao mobile

$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});

// Slider
(function(){
function slider(sliderName, velocidade) {
	var sliderClass = '.' + sliderName,
			activeClass = 'active',
			rotate = setInterval(rotateSlide, velocidade);
	
	$(sliderClass + ' > :first').addClass(activeClass);

	$(sliderClass).hover(function(){
		clearInterval(rotate);
	}, function() {
		rotate = setInterval(rotateSlide, velocidade);
	});
	
	function rotateSlide() {
		var activeSlide = $(sliderClass + ' > .' + activeClass),
				nextSlide = activeSlide.next();

		if(nextSlide.length == 0) {
			nextSlide = $(sliderClass + ' > :first');
		}
		activeSlide.removeClass(activeClass);
		nextSlide.addClass(activeClass);
	} 
}
	
slider('principal', 2400);
})();



