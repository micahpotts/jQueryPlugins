$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$(".header").sticky();
$(".subHeader").sticky;

$(".header").on("sticky-start", function() {
	$(".description").html("We build <strong>great</strong> apps");
});

$(".header").on("sticky-end", function() {
	$(".description").html("We build apps");
});

$(".subHeader").sticky({
	topSpacing: 63
});

$(".subHeader").on("sticky-start", function() {
	$(".subHeader").append("  <a href=\"#\">Email us!</a>");
});

$(".subHeader").on("sticky-end", function() {
	$(".subHeader").html("Want us to work on your project?");
});