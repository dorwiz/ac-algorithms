//Write a function that takes in a string and return that srting with all the  character in //reverse order
//Method allowed to use is .split
//Input: a string, one parameter


function reverseString(str){
    var newString = ""
    var array1 = str.split("");

     for  ( var i =  array1.length - 1; i >= 0; i--){
        newString = newString +array1[i]; 
    }   
    
    return newString;
}

//reverseString("hello"); 
var test =  reverseString("hello");
console.log(test);
