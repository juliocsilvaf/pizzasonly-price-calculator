function checkQuantity(){
	'use strict'
	// declare all the variables
	let triplets = 0, remainder = 0, quantity = 0, price = 0;
	let message = "";
	// read input
	quantity = parseInt(document.getElementById("quantity").value);
	// check input for number and more than zero
	
	if(quantity<=0 || isNaN(quantity)){
		message = "Invalid quantity! Must be more than zero."
	}else if(quantity==1){
		message = "Your best price is $6.45.";
	}else if(quantity==2){
		message = "Your best price is $12.00.";
	}else if(quantity==3){
		message = "Your best price is $14.00.";
	}else{
		triplets = Math.floor(quantity/3);// convert to whole number
		remainder = quantity%3;
		if(remainder==0){
			price = triplets*14.00+0;
			message = "Your best price is $"+price+".00";
		}else if (remainder==1){
			price = triplets*14.00+6.45;
			message = "Your best price is $"+price;
		}else{
			price = triplets*14.00+12.00;
			message = "Your best price is $"+price+".00";
		}
	}
	document.getElementById("message").innerHTML=message;
	return false;

}