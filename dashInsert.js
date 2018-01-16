/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

function dashInsert(number) {
	// Change the parameter to a string.
	var array = number.toString().split("");
	// Change a the string into an array usin .split()
	// Create a variables to store final output.
	var output = "";
	// Use modulus to test to see if the numbers are even or odd.
	// Use a for loop to go through the array of numbers and test to see if they odd
	 for ( var i = 0; i < myArray.length; i++ ){

	  
	// && opeatorto test two conditon:1) if the number if odd, 2( if the
	//number after that odd as well.
	if ( myArray[i] % 2 === 1 && myArray[ i + 1] % 2 === 1){
			output = output + myArray[i] + "-";
		} else {
			output = output + myArray[i];
		}
	// If both conditon are met, we want to insert the dash
	// If conditons are false , we just want to add the number to the final output
	console.log(output);
	
	}		

}