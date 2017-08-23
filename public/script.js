window.addEventListener("load", function(){

	// save a painting

	var button = document.getElementById("save_button");

	button.addEventListener("click",function(){
			event.preventDefault();
			save_painting();
			
	});

	var save_painting = function(){ 

			row1_box1_input = document.getElementById("painting").childNodes[1].childNodes[1].style.backgroundColor.charAt(0); 
			row1_box2_input = document.getElementById("painting").childNodes[1].childNodes[3].style.backgroundColor.charAt(0);
			row1_box3_input = document.getElementById("painting").childNodes[1].childNodes[5].style.backgroundColor.charAt(0);
			row1_box4_input = document.getElementById("painting").childNodes[1].childNodes[7].style.backgroundColor.charAt(0);
		row1_input = row1_box1_input + row1_box2_input + row1_box3_input + row1_box4_input;
			row2_box1_input = document.getElementById("painting").childNodes[3].childNodes[1].style.backgroundColor.charAt(0); 
			row2_box2_input = document.getElementById("painting").childNodes[3].childNodes[3].style.backgroundColor.charAt(0);
			row2_box3_input = document.getElementById("painting").childNodes[3].childNodes[5].style.backgroundColor.charAt(0);
			row2_box4_input = document.getElementById("painting").childNodes[3].childNodes[7].style.backgroundColor.charAt(0);  
		row2_input = row2_box1_input + row2_box2_input + row2_box3_input + row2_box4_input;
			row3_box1_input = document.getElementById("painting").childNodes[5].childNodes[1].style.backgroundColor.charAt(0); 
			row3_box2_input = document.getElementById("painting").childNodes[5].childNodes[3].style.backgroundColor.charAt(0);
			row3_box3_input = document.getElementById("painting").childNodes[5].childNodes[5].style.backgroundColor.charAt(0);
			row3_box4_input = document.getElementById("painting").childNodes[5].childNodes[7].style.backgroundColor.charAt(0); 
		row3_input = row3_box1_input + row3_box2_input + row3_box3_input + row3_box4_input;
			row4_box1_input = document.getElementById("painting").childNodes[7].childNodes[1].style.backgroundColor.charAt(0); 
			row4_box2_input = document.getElementById("painting").childNodes[7].childNodes[3].style.backgroundColor.charAt(0);
			row4_box3_input = document.getElementById("painting").childNodes[7].childNodes[5].style.backgroundColor.charAt(0);
			row4_box4_input = document.getElementById("painting").childNodes[7].childNodes[7].style.backgroundColor.charAt(0);
		row4_input = row4_box1_input + row4_box2_input + row4_box3_input + row4_box4_input;
			
		var canvas = "?row1="+row1_input+"&row2="+row2_input+"&row3="+row3_input+"&row4="+row4_input;

		var httpRequest = new XMLHttpRequest();

		httpRequest.open("GET","/store_painting"+canvas);

		httpRequest.send();
		
		httpRequest.addEventListener("load",function(){
			alert:("hell yeah!")
		});
	};	

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




