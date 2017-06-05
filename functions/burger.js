$(document).ready(function () {
	$("#burger").click(function () {
		if ($("#burger").hasClass("isOpen")) {
			$(this).removeClass("isOpen");
			$("#mobileNav").removeClass("isOpen");
		} else {
			$(this).addClass("isOpen");
			$("#mobileNav").addClass("isOpen");
		}
	});
});
