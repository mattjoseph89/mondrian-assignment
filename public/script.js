window.addEventListener("load", function(){

	// current paint color
	current_color = "white"

	// choose the paint color
	palette = document.getElementById("color_palette").children
		for (i=0 ; i<palette.length ; i++){
			palette[i].addEventListener("click", function(){
				current_color = event.target.id
			});

		};

	// Paint the squares
	rows = document.getElementsByClassName("row")

	for (i=0 ; i<rows.length ; i++){
			rows[i].addEventListener("click", function(){
			event.target.style.backgroundColor = current_color
			});
		};
});




