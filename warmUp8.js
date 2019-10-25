//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false


function isSubset(array1 , array2){
	var trueArr=true;
	var arr = [];
	for ( i = 0 ; i < array1.length ; i++){
		for ( j = 0 ; j < array2.length ; j++ ){
			if (array1[i]===array2[j]){
					arr.push(array2[j])
				}
		}
	}
		for ( i = 0 ; i < array1.length ; i++){
		for ( k = 0 ; k < arr.length ; k++ ){
			if (array1[i]===arr[k]){
					trueArr = true
				} 
			else { trueArr =false}
		}
	}
	return trueArr
}