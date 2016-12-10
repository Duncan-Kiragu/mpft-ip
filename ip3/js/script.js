	//Business Logic
	//var inNumber=Number(prompt("Enter a Number"));
	//ui logic
	$(document).ready(function () {
	    //name submission
	    $("#inName").submit(function () {
	        var name = $("#nameIn").val();
	        $(".outName").text(name);
	        $(".displayName").show();
	        $("#inName").hide();
	        event.preventDefault();
	    });
	    $("#numberInput").submit(function () {
	        /* body... */
	        // number checked if= valid less than 100 
	        var inNumber = $("#numberIn").val();
	        if (!isNaN(inNumber) && inNumber > 100) {
	            $(".lists").text("Enter a valid number from 1-100");
	        }
	        else {
	            $(".lists").text("");
	            for (var i = 1; i <= inNumber; i++) {
	                if (i == 15 || i % 15 === 0) {
	                    //console.log("Ping Pong");	
	                    $(".lists").append("<li>" + "ping pong" + "</li>");
	                }
	                else if (i % 5 === 0) {
	                    $(".lists").append("<li>" + " pong" + "</li>");
	                }
	                else if (i % 3 == 0) {
	                    $(".lists").append("<li>" + "ping" + "</li>");
	                    //console.log("Ping")
	                }
	                else {
	                    $(".lists").append("<li>" + i + "</li>");
	                    //console.log(i);
	                }
	                $(".lists").show();
	            }
	        };
	        event.preventDefault();
	    })
	});