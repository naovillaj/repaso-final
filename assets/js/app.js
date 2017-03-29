window.addEventListener('load', function(){
	var registrarse = document.getElementById("registrarse");
	var iniciarSesion = document.getElementById("inicioSesion");

	registrarse.addEventListener('click', function(){
		window.location = "registrate.html";
	});

	iniciarSesion.addEventListener('click', function(){
		window.location = "inicia-sesion.html";
	})
})