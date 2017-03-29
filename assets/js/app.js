window.addEventListener('load', function(){
	var registrarse = document.getElementById("registrarse");
	var iniciarSesion = document.getElementById("inicioSesion");

	registrarse.addEventListener('click', function(e){
		e.preventDefault();
		window.location = "registrate.html";
	});

	iniciarSesion.addEventListener('click', function(e){
		e.preventDefault();
		window.location = "inicia-sesion.html";
	})
})