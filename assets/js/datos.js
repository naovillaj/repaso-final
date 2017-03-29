//var coders = [];
      
function Coder (nombre, apellido, correo, contreseña){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.contraseña = contraseña;
}

window.addEventListener('load', function(){
	

	entrar.addEventListener('click', function(){

		var name = document.getElementById("nombre").value; 
        var lastName = document.getElementById("apellido").value; 
        var email = document.getElementById("correo").value;
        var password = document.getElementById("contraseña").value;

		if(name == "" || lastName == "" || email == "" || password == ""){

			error.innerText = "Todos los campos deben ser ingresados";

		} else{

			localStorage.setItem("nuevoCoder", JSON.stringify(new Coder(name, lastName, email, password)));
			window.location = "bienvenida.html"

		}

	})

});

	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var correo = document.getElementById("correo");
	var contraseña = document.getElementById("contraseña");
	var error = document.getElementById("error");
	var boton = document.getElementById("entrar");


		var soloLetras = function(e){
		var codigoTecla = e.keyCode;  
        if((codigoTecla>=97 && codigoTecla<=122) || codigoTecla == 241 || (codigoTecla>=65 && codigoTecla<=90) || codigoTecla == 209 
            || codigoTecla == 42 || codigoTecla == 250 || codigoTecla == 225 || codigoTecla == 233 || codigoTecla == 237 
            || codigoTecla == 243 || codigoTecla == 32){
          return true;
        }else{
          return false;
        }
    }

    nombre.onkeypress = soloLetras;
	apellido.onkeypress = soloLetras;

    var letrasMayusculas = document.getElementsByClassName("mayuscula");

    var textoMasyuscula = function(){

    	if(this.getAttribute("type") == "text"){

          var arrDato = this.value.split(" ");
          var datoConMayusculas = "";
          for(var i = 0; i<arrDato.length; i++){
            datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
          }
          this.value=datoConMayusculas;
          
        }
    }

    for(var i = 0; i< letrasMayusculas.length; i++){
        letrasMayusculas[i].onblur = textoMasyuscula;
      }
	

	function validarEmail( email ) {
	    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    if ( !expr.test(email) )
	        error.innerText = "El correo debe tener un @ y .";
	}

	validarEmail( correo.value );



	/*var validarCorreo = function (){

		if ( /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/.test(correo) == false){

			error.innerText = "El correo debe tener un @ y .";
		}else{
			error.innerText = "";
		}

	}

	correo.onblur = validarCorreo;*/
	


	var validarContraseña = function(){

		if(contraseña.length<6 || contraseña.length>20){

		console.log(contraseña.value);
		error.innerText = "La contraseña debe tener entre 6 y 20 caracteres";

		}else{
			error.innerText = "";
		}

	}

	contraseña.onblur = validarContraseña;


	