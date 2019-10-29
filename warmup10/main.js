$(function(){

	$('button').click(function(){
		var value = $('input').val();
		$('ul').append('<li>'+value+'</li>')
		$('li:even').attr('class','class1')
		$('li:odd').attr('class','class2')


	})

})