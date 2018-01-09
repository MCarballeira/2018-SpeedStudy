

	

/* COUNTDOWN */
// Set the date we're counting down to
var goalDate = new Date("Jan 1, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

	// Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = goalDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element
    document.getElementById("days").innerHTML = "<h2>"+days+"</h2>" + " days "        
    document.getElementById("hours").innerHTML = "<h2>"+hours+"</h2>" + " hours "
    document.getElementById("minutes").innerHTML = "<h2>"+minutes+"</h2>" + " minutes "
    document.getElementById("seconds").innerHTML = "<h2>"+seconds+"</h2>" + " seconds "


    // If the count down is finished, write some text
    if (distance < 0) {
	   document.getElementById("countdown").innerHTML = "Countdown date expired. <br> Please, send me a message to remember me to change it. <br> Thank you!";
    }

}, 1000);

