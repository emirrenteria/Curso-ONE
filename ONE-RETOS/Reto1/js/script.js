
var fraseDividida;

function encriptar(elemento){

	var frase = document.getElementsByTagName("input")[0].value;

	fraseDividida = frase.split('');

    for(var i=0; i<fraseDividida.length; i++){

		if( fraseDividida[i]  == "a"){ 
			fraseDividida[i] = "ai"; 
		}
		if( fraseDividida[i]  == "e"){ 
			fraseDividida[i] = "enter";
			 }
		if( fraseDividida[i]  == "i"){ 
			fraseDividida[i] = "imes";
			 }
		if( fraseDividida[i]  == "o"){ 
			fraseDividida[i] = "ober";
			 }
		if( fraseDividida[i]  == "u"){ 
			fraseDividida[i] = "ufat"; }

	}  

	var fraseEncriptada = fraseDividida.join("");

	document.getElementById("resultado").innerHTML = fraseEncriptada;

}


function desencriptar(elemento){

	var frase = document.getElementsByTagName("input")[0].value;

	
    for(var i=0; i<fraseDividida.length; i++){

		if( fraseDividida[i]  == "ai"){ 
			fraseDividida[i] = "a"; 
		}
		if( fraseDividida[i]  == "enter"){ 
			fraseDividida[i] = "e";
			 }
		if( fraseDividida[i]  == "imes"){ 
			fraseDividida[i] = "i";
			 }
		if( fraseDividida[i]  == "ober"){ 
			fraseDividida[i] = "o";
			 }
		if( fraseDividida[i]  == "ufat"){ 
			fraseDividida[i] = "u"; }

	}  

	
	var fraseDecodificada = fraseDividida.join("");

	
	document.getElementById("resultado").innerHTML = fraseDecodificada;

}

function copiar(elemento){

		var enlace = document.getElementById("resultado");
		var inputFalso = document.createElement('p');
		inputFalso.setAtribute("value", resultado.innerHTML);

		inputFalso.select();

		document.execComand('copy');

}