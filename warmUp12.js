/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */
 function smallestLargestInteger(str,n){
    var arr = str.split("");
    var newArr = [];
    for(var i = 0 ; i < arr.length ; i+=2){
      if(arr.length % 2 === 0){
        if(arr[i] + arr[i+1] < 20 ){
            newArr.push(arr[i] + arr[i+1])
        }//condition if
        else if(arr[i] + arr[i+1] > 20){
          newArr.push(arr[i])
          newArr.push(arr[i+1])
        } 
      }//even if 
  ////////////////////////////////////////////////       
      if(arr.length % 2 === 1){
        if(arr[i] + arr[i+1] < 20 ){
            newArr.push(arr[i] + arr[i+1])
        }//condition
        else if(arr[i] + arr[i+1] > 20){
          newArr.push(arr[i])
          newArr.push(arr[i+1])
          newArr.push(arr[i+2])
        }  
      }//odd condition 

    }//for  
    newArr.length=n
    console.log(newArr)
    var minMax = [];
    var min =parseInt(newArr[0]);
    var max=parseInt(newArr[0]);
    for(var j = 0 ; j < newArr.length ; j++){
      if(parseInt(newArr[j]) < min){
        min = parseInt(newArr[j]);
      }
      if( max < parseInt(newArr[j])){
        max = parseInt(newArr[j])
      }
    }
    minMax.push(min);
    minMax.push(max);
    return minMax
 }//function
