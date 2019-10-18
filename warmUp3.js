// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.

var arrayOfMales = ["taha","ahmed","hamza","amin","firas","adnen"] ;
var arrayOfFemales = ["ons","haniya","fouz"] ;
var arrayOfInstructors = ["youssef" , "seif" ,"matt","omar","raghda"] ;


function middleOne (arr){
	var element = "";
	for( var i = 0 ; i < arr.length ; i++ ){
		if( arr.length % 2 === 0 ){
			element =  arr[arr.length/2]
		}
		else{
			element = arr[Math.ceil(arr.length/2)-1]
		}
	}
	return element
}

function multiByTwo (arr){
		for( var i = 0 ; i < arr.length ; i++ ){
			if( i % 2 === 0 ){
				arr[i] *= 2
			}
		}
		return arr
}