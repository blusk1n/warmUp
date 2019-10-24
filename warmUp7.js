// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
//1

"Hamza" + "Danden"
//2

13 % 3 === 0;

//3
var sum = 0 ;
var arr = [13,14,13,15,16,17,19,13,16,15];
for(var i = 0 ; i < arr.length ; i++){
	sum += arr[i];
}
var average = sum / arr.length

//4
var age = 20 ;
var ageOnSecond = age * 365 * 24 * 60 + 60 
