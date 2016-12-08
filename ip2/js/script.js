$(document).ready(function(){
	$("form#subscribe").submit(function  () {
		var input=$("#emailInput").val();
		$(".unsubscribed").hide();
		$(".subscribed").show();


		event.preventDefault();
		// body... 
	});
	$(".hamberger-menu").click(function(){
    document.getElementById("myNav").style.width = "100%";
	});
	

/* Close when someone clicks on the "x" symbol inside the overlay */
	$(".closebtn").click(function() {
    document.getElementById("myNav").style.width = "0%";
	});






});