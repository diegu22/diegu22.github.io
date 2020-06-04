function showLanguages () {
	$("#languages").toggleClass("active");
	$("#language-dropdown-triangle").toggleClass("active");
}
function openMenu () {
	$("#line-1").toggleClass("active");
	$("#line-2").toggleClass("active");
	$("#line-3").toggleClass("active");

	$(".phone-nav").animate({height: 'toggle'}, 400);
}

