$(document).ready(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100)
		{
			$(".menu-nav").addClass("scrollFix")
		}
		else
		{
			$(".menu-nav").removeClass("scrollFix")
		}
	})
	$(".navBarIcon").click(function(){
		$(".menu-ul").toggleClass("d-none text-left")
		$(".nav-skills").toggleClass("d-block text-left")
		$(".nav-projects").toggleClass("d-block text-left")
		$(".nav-my-blogs").toggleClass("d-block text-left")
		$(".nav-contact-info").toggleClass("d-block text-left")
		$(".mainNightMode").toggleClass("d-none")
	})
	$(".nightMode").click(function()
	{
		$('.modes').toggleClass('fa-adjust')
		$('.modes').toggleClass('fa-sun')
		$("body").toggleClass("night-mode")
		$('.star-1').toggleClass('star1')
		$('.star-2').toggleClass('star2')
		$('.star-3').toggleClass('star3')
		$('.star-4').toggleClass('star4')
		$('.moon').toggleClass('full-moon')
		$('.night-view').toggleClass('night-mode')
	})
	$(".nav-projects").click(function(){
		$('.body').addClass('background-project-color')
	})
	$(".nav-skills, .nav-my-blogs, .nav-contact-info").click(function(){
		$('.body').removeClass('background-project-color')
	})
	$(".nav-my-blogs").click(function(){
		$('.body').addClass('background-my-blogs-color')
	})
	$(".nav-skills, .nav-projects, .nav-contact-info").click(function(){
		$('.body').removeClass('background-my-blogs-color')
	})
	$(".nav-contact-info").click(function(){
		$('.body').addClass('background-contact-info-color')
	})
	$(".nav-skills, .nav-projects, .nav-my-blogs").click(function(){
		$('.body').removeClass('background-contact-info-color')
	})
	
})


