$(document).ready(function(){
	$("#login").click(function(event){
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();
		$("#contact-right").html(name + "<br>" + email + "<br>" + password);
	});
});



