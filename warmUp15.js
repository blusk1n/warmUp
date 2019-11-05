// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reversed(str){
	var arr=[];
	var lastArr=[];
	var newStr="";
	var tab = []
	var i = 0 ;
	while(i < str.length){
		arr[i]=str[i]
		i++
	}
	console.log(arr);
	var j = 0 ;
	var k = 0 ;
	for (var j = 0; j < arr.length; j++) {
		if(arr[j] === " " ||arr[j] === undefined ){
			lastArr[k]=newStr
			newStr = "";
			k++
		}
		newStr += arr[j];
		console.log(newStr)
	}
	

}