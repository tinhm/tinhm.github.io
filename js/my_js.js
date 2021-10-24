const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 10, 20).getTime();
const fourthOfJulyNextYear = new Date(year + 1, 10, 20).getTime();
const month = new Date().getMonth();
const countDownDate = new Date("Oct 24, 2021 10:36:00").getTime();
const countDownDateNextY = new Date("Nov 7, 2022 00:00:00").getTime();
// countdown	1637254800000
let timer = setInterval(function() {

	// get today's date
	const today = new Date().getTime();

	// get the difference
	let diff;
	/*
	if(month > 10) {
	diff = fourthOfJulyNextYear - today;
	} else {
	diff = fourthOfJuly - today;
	}
	*/
	//diff = fourthOfJuly - today;
	diff = countDownDate - today; 
	
	if(diff < 0){
		diff = countDownDateNextY - today;
		Play_action();
	}else if(diff == 0){
		Play_action();
	}
	 
	// math
	let days = Math.floor(diff / (1000 * 60 * 60 * 24));
	let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((diff % (1000 * 60)) / 1000);

	// display
	
	if(Math.floor(diff / (1000 * 60 * 60 * 24)) < 60){
		document.getElementById("timer").innerHTML =
		"<div class=\"days\"> \
		<div class=\"numbers\">" + days + "</div>days</div> \
		<div class=\"hours\"> \
		<div class=\"numbers\">" + hours + "</div>hours</div> \
		<div class=\"minutes\"> \
		<div class=\"numbers\">" + minutes + "</div>minutes</div> \
		<div class=\"seconds\"> \
		<div class=\"numbers\">" + seconds + "</div>seconds</div> \
		</div>";
	}else{
		document.getElementById("timer").innerHTML =
		"<div class=\"days\"> \
		<div class=\"numbers\">" + 00 + "</div>days</div> \
		<div class=\"hours\"> \
		<div class=\"numbers\">" + 00 + "</div>hours</div> \
		<div class=\"minutes\"> \
		<div class=\"numbers\">" + 00 + "</div>minutes</div> \
		<div class=\"seconds\"> \
		<div class=\"numbers\">" + 00 + "</div>seconds</div> \
		</div>";
	}
	

}, 1000);


function Play_action(){
	//alert('accccccccccccccccccccc');
	$(".muiten").show();
	$(".hopqua1").show();
}

function hopqua1_cl(){
	//$(".hopqua1").hide();
	//var modal = document.getElementById("myModal1");
	//modal.style.display = "block";
	
	$('#myModal1').modal('show');
	document.getElementById("beep").pause();
	document.getElementById('beep').muted = false;
	document.getElementById("beep").play();
	 
}

