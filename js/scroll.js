
// fixing phone template on scroll
$(document).scroll(function() {

  var scrollPosition = $("body, html").scrollTop() || document.body.scrollTop;

  console.log(scrollPosition);

  if(scrollPosition > 350) {
    $("#template").addClass("position-fixed").css("top", "1"+"rem");
  } else {

    $("#template").removeClass("position-fixed").css("top", "20" + "rem");
  }

  
// scroll progress bar
$(document).scroll(function() {
	var scrollPosition = $("body, html").scrollTop() || document.body.scrollTop;

	var screenTop = scrollPosition;
	var screenHeight = window.innerHeight;
	var body = document.body;
	var html = document.documentElement;

	var pageHeight = Math.max(body.scrollHeight, 
								body.offsetHeight, 
								html.clientHeight, 
								html.scrollHeight, 
								html.offsetHeight);

	var percentViewed = Math.ceil(((screenTop + screenHeight)/pageHeight) * 100);

	$("#scrollProgress").css({"width": percentViewed + "%"});

	// if hit bottom, change message - slows down the site a lot ???
	
});

if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
	$("#scrollToLearn p").html("That's it!");
	// $("#scrollToLearn").fadeOut();
} else {
	$("#scrollToLearn p").html("Keep Scrolling");
	// $("#scrollToLearn").fadeIn();
}

});
