$(function(){
	$("#left").click(function(){
		$("div #left").addClass('clicked1')
		$('#right').removeClass("clicked2")

	})
	$("#right").click(function(){
		$('div #right').addClass('clicked2')
		$('#left').removeClass("clicked1")

	})
	$("#creat").click(function(){
		if($('#right').hasClass('clicked2')){
			$('#righted').append("<li>hello from right</li>")

		}
		if($('#left').hasClass('clicked1')){
			$('#lefted').append("<li>hello from left </li>")
		}




	})




})