// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
// function formStr(str){
// 	var arr = str.split("");
// 	var finalArr = [];
// 	for(var i = 0 ; i < arr.length ; i++){
// 	var string = "";		
// 	string += arr[Math.floor(Math.random() * Math.floor(arr.length-1))]
// 	finalArr.push(string)
// 	}
	
// 	return finalArr.join("")
// }
function makeStr(str){
	var count = 0;
	var arr1 = "balloon".split("");
	var arr2 = str.split("");
	var lastArr = [];
	for(var i=0 ; i < arr2.length ; i++){
		for(var j = 0 ; j < arr1.length ; j++){
			if(arr2[i] === arr2[j]){
				lastArr.push(arr2[i])
			}
		}
	}

	for(var i = 0 ; i < lastArr.length ; i++){
		if(lastArr[i]===lastArr[i+1]){	
			lastArr.splice(i,1)
		}
	}
	console.log(lastArr)
	
}