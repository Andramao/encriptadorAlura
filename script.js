function ocultar_contenedores_sect_2() {
	document.getElementById("contenedores_sect_2").style.visibility = "hidden";   
}

function mostrar_contenedores_sect_2() {
	document.getElementById("contenedores_sect_2").style.visibility = "visible";    
}

function encriptarTexto() {
	if (text_Encriptado.value == "") {
		mostrar_contenedores_sect_2();
	}
	else{
		ocultar_contenedores_sect_2();

		var frase = document.getElementById("text_Encriptado").value.toLowerCase();
		var textEncriptado = frase.replace(/e/img, "enter");
		var textEncriptado = textEncriptado.replace(/o/img, "ober");
		var textEncriptado = textEncriptado.replace(/i/img, "imes");
		var textEncriptado = textEncriptado.replace(/a/img, "ai");
		var textEncriptado = textEncriptado.replace(/u/img, "ufat");
	

		

		document.getElementById("text_Desencriptado").innerHTML = textEncriptado;
		document.getElementById("boton_copiar").style.display = "show";
		document.getElementById("boton_copiar").style.display = "inherit";
		//document.getElementById("text_Encriptado").value = "";//   //opcion para borrar frace luego de encriptarla//
		
	}
	
	

}

function desencriptarTexto() {

	if (text_Encriptado.value == "") {
		mostrar_contenedores_sect_2();
	}
	else{
		ocultar_contenedores_sect_2();
		
		var frase = document.getElementById("text_Encriptado").value.toLowerCase();
		var textEncriptado = frase.replace(/enter/img, "e");
		var textEncriptado = textEncriptado.replace(/ober/img, "o");
		var textEncriptado = textEncriptado.replace(/imes/img, "i");
		var textEncriptado = textEncriptado.replace(/ai/img, "a");
		var textEncriptado = textEncriptado.replace(/ufat/img, "u");

		document.getElementById("text_Desencriptado").innerHTML = textEncriptado;
		document.getElementById("boton_copiar").style.display = "show";
		document.getElementById("boton_copiar").style.display = "inherit";
		document.getElementById("text_Encriptado").value = "";
	}
	
}

function copiarTexto() {
	
	var contenido = document.querySelector("#text_Desencriptado");
	contenido.select();
	document.execCommand("copy");
}
 
