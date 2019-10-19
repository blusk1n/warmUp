// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseIt(str){
	var arr = str.split(""); 
	var reversed = "";
	var i = arr.length-1;
	while(arr.length > 0){
			reversed+=arr[arr.length-1] ;
			arr.pop()
		i--
	}
	var newArr = reversed.split("")
	var newStr="";	
	var j = 0;
	while(j < newArr.length){
		 newStr+= newArr[j]+j;
	 j++
	}
		return newStr
	}
	reverseIt("taha znazen")

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLengthStrings(arr){
	var uniqArr=[];
	for( i = 0 ; i < arr.length ; i++ ){
		if(arr[i]!==uniqArr[0]){
			uniqArr.push(arr[i])
		}
	}
	for( j= 0 ; j < uniqArr.length ; j++){
		if( uniqArr[0].length !== uniqArr[j].length){
			uniqArr.splice(j,1)
		}
	}
	return uniqArr
}
sameLengthStrings(["taha","ahmed","taha","play","ahmed"])