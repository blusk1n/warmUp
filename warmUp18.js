// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1',
// else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
function symbols(string){
	var result="";
	for(var i =0 ;i<string.length;i++){
		var count = 0;
		for(var j = i ; j>=0 ;j--){
			if(string[i]===string[j]){
				count ++
			}
		}
	result += count
	}
	return result
}