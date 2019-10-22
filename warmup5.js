// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.


function creatClassMate(name, age, height, techProblems , gender){
	var student = {};
	 
		student.name = name;
		student.age = age;
		student.height = height;
		student.techProblems = techProblems
		student.gender = gender

	return student
}

var taha= creatClassMate("taha",20,1.85,"some recusrion","male");
var hamza= creatClassMate("hamza",19,1.83,"data modeling","male");
var amin= creatClassMate("amin",22,1.84,"object","male");
var adnen= creatClassMate("adnen",27,1.80,"high order functions","male");


var arrayOfStudents = [taha,amin,hamza,adnen];

function displayFriend(student){
	return student.name +" is "+student.age +" years old and he have probelms with " +student.techProblems; 
}

function addFriend(student){
	arrayOfStudents.push(student);
}

function isMale(student){
	var s = 0;
	for(var i = 0 ; i < student.length ; i++ ){
		if(student[i].gender==="male"){
			s+=1
		}
	}
	return s
}

function search(array,name){
	var str="INVALID NAME";
	for(var i = 0 ; i < array.length ; i++ ){
		if(array[i] === name){
			str = displayFriend(name);				
		}
	}
	return str
}
