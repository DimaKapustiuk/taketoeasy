;(function() {

	// show/hide menu

	var menuBtn = document.querySelector('.menu-btn'),
		nav = document.querySelector('.nav'),
		closeBtn = document.querySelector('.close-menu');

		menuBtn.addEventListener('click', function() {
			nav.classList.add('show-menu');
		});

		closeBtn.addEventListener('click', function() {
			nav.classList.remove('show-menu');
		});

	

	// toggle focused class to filter btns

	if (document.body.classList.contains('js-main-page')) {
		
		var filterBtns = document.querySelectorAll('.filters__btn'),
		allFilter = document.querySelector('.filter-all');
		
		allFilter.classList.add('focused');

		for (var i = 0; i < filterBtns.length; i++) {
			filterBtns[i].onclick = function(){

				for (var j = 0; j < filterBtns.length; j++) {
					filterBtns[j].classList.remove('focused');
				}

				this.classList.add('focused');
		}
	}
}

	
			

			



})();

$(function(){
	// mixitup plugin
	$('#filters__images').mixItUp();

	//smooth scrolling to anchors

	$("a[href^='#']").click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top+1;
		jQuery("html, body").animate({
			scrollTop: destination
		}, 1000);
		return false;
	 });

});
