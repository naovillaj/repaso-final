var intento = document.getElementById("intento");
var iniciar = document.getElementById("iniciar");

if(localStorage.getItem("nuevoCoder")){
        var email = document.getElementById("correo");
        var password = document.getElementById("contraseña");
        

        var objetoCoder = JSON.parse(localStorage.getItem("nuevoCoder"));

        /*email.innerText = objetoCoder.correo;
		password.innerText = objetoCoder.contraseña;*/

        email.disabled = true;
 		password.disabled = true;

}

 intento.addEventListener('click', function(e){
 	e.preventDefault();
 	window.location = "inicia-sesion.html"
 })

 iniciar.addEventListener('click', function(e){
 	e.preventDefault();
 	window.location = "registrate.html";
 })
            
  




 