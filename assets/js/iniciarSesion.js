if(localStorage.getItem("nuevoCoder")){
        var email = document.getElementById("correo");
        var password = document.getElementById("contraseña");
        

        var objetoCoder = JSON.parse(localStorage.getItem("nuevoCoder"));

        if(email.value == objetoCoder.correo && password.value == objetoCoder.contraseña){

            window.location = "bienvenida.html";


        }else{

            window.location = "intento.html";
        }
        
        
        
        
  }
