function checkNumDocumento(valor, tipo){
	var numdoc, tipo;
	tipo = document.getElementById("tipo-de-documento");
	numdoc = document.getElementById("numero-de-documento");
	
	if (numdoc == ""){
		alert("Campo requerido!");
		return false;
	}else if(isNaN(numdoc)){
		alert("No es un número de documento válido");
		return false; 
	}else if (tipo == "value2"){		//tarjeta identidad
		if (numdoc.length != 10) {
		alert("La tarjeta de identidad no tiene 10 digitos");
		return false;
	   }else{
	   	alert("Número de documento válido!");
			return true;
	   }
	}else if (tipo == " value3"){		//cedula
		if (numdoc.length <8 || numdoc.length > 10) {
		alert("El numero de documento va entre 8 a 10 digitos");
		return false;
	   }
		else{
	   	alert("Número de documento válido!");
	   }return true;
	}else if (tipo == "value4"){		//cedula de extranjeria
		if (numdoc.length <6 || numdoc.length >7) {
		alert("El numero de documento va entre 6 a 7 digitos");
		return false;
	   }else{
	   	alert("Número de documento válido!");
		return true;
	   }
	}
	else{
		return true; 
	}
}
 function checkCorreo(valor) {
 	var correo, expresion;
	correo = document.getElementById("correo").value;
	expresion = /\w+@\w+\.+[a-z]/;
	
	if (correo == ""){
		alert("Campo requerido!");
		return false;
	}else if (!expresion.test(correo)){ 
		alert("Correo no válido!");
		return false;
	}else{
		alert("Correo válido!");
		return true;
	}
 }

 function checkContrasena(valor) {
 	var contrasena, myregex;
 	contrasena = document.getElementById("contrasena").value;
 	myregex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/;
	
	if (contrasena == ""){
		alert("Campo requerido!");
		return false;
	}else if (myregex.test(valor) && valor.length >= 8){
       		alert("Contraseña válida!");
       		return true;        
   }else{
      	alert("Contraseña no válida!");
       	return false;  
   	}     
}

module.exports.checkNumDocumento = checkNumDocumento;
module.exports.checkCorreo = checkCorreo;
module.exports.checkContrasena = checkContrasena;