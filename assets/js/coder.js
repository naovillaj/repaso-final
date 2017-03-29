var imprimir = document.getElementById("imprimir");
var editar = document.getElementById("editar-datos");

window.addEventListener('load', function(){
	var nombre = document.getElementById("nombre-coder");
	var apellido = document.getElementById("apellido-coder");
	var correo = document.getElementById("correo-coder");
	var contraseña = document.getElementById("contraseña-coder");
	


	var objetoCoder = JSON.parse(localStorage.getItem("nuevoCoder"));


	
	nombre.innerText = objetoCoder.nombre;
	apellido.innerText = objetoCoder.apellido;
	correo.innerText = objetoCoder.correo;
	contraseña.innerText = objetoCoder.contraseña;
	
	});


editar.addEventListener('click', function(e){
	e.preventDefault();
	window.location = "editar.html";
})
