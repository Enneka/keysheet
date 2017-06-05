$( document ).ready(function() {
	$(document).keydown(registerKeyDown);
	$(document).keyup(registerKeyUp);
});

function registerKeyDown(event) {
	//event.preventDefault();
	console.log(event.which);
}

function registerKeyUp(event) {
	//event.preventDefault();
	console.log(event.which);
}