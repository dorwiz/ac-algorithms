//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 
// Inupt: radius of the circle
// Output: area and perimeter of circle

function circleCalculation (radius) {
	//your code here
	var area = Math.PI (radius * radius);
	var perimeter = 2 * Math.PI * radius;
	document.write (" The area  of the circle is " + area + " and the perimeter of the circle is " +  perimeter ")
}


circleCalculation(10);