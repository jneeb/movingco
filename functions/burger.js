$(document).ready(function () {
	$(".burger").click(function () {
		if ($(".burger").hasClass("open")) {
			$(this).removeClass("open");
			$(".mobileNav").removeClass("open");
			$(".logo:eq(0)").removeClass("open");
		} else {
			$(this).addClass("open");
			$(".mobileNav").addClass("open");
			$(".logo:eq(0)").addClass("open");
		}
	});
});
var navToggle = document.getElementsByClassName("navToggle");
var mNav = document.getElementsByClassName("mNav");
var logo = document.getElementsByClassName("logo");
for (var i = mNav.length - 1; i >= 0; i--) {
	mNav[i].onclick = function() {
		navToggle[0].classList.toggle("open");
		navToggle[1].classList.toggle("open");
		logo[0].classList.toggle("open");
	}
}
var scroll = document.getElementsByClassName("scroll");
var docHeight = $(document).height();
var vH = window.innerHeight;
window.onscroll = function scrollY() {
	var pageY = window.pageYOffset;
	for (var i = scroll.length - 1; i >= 0; i--) {
		if (pageY > 0 && pageY < (docHeight - vH)) {
			scroll[0].classList.remove("scrolled");
			scroll[1].classList.add("scrolled");
			scroll[2].classList.add("scrolled");
		}
		else {
			scroll[0].classList.add("scrolled");
			scroll[1].classList.remove("scrolled");
			scroll[2].classList.remove("scrolled");
		}
	}
};