$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$(".header").sticky({
	getWidthFrom: ".container",
	responsiveWidth: true
});

$(".header").on("sticky-start", function() {
	$(".description").html("We build <strong>great</strong> apps");
});

$(".header").on("sticky-end", function() {
	$(".description").html("We build apps");
});


$(".subHeader").sticky;

$(".subHeader").sticky({
	topSpacing: 63,
	getWidthFrom: ".container",
	responsiveWidth: true
});

$(".subHeader").on("sticky-start", function() {
	$(this).append('  <a href="mailto:email@website.com" class="email-text">Email us!</a>');
});

$(".subHeader").on("sticky-end", function() {
	$(".email-text").remove();
});