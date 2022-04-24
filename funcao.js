function encriptar(elemento) {
	var palavra = document.getElementsByTagName("textarea")[0].value;
	var palavra_codificar = btoa(palavra);
	document.getElementById("mostra").innerHTML = palavra_codificar;
}


function descriptar(elemento) {
	var palavra = document.getElementsByTagName("textarea")[0].value;
	var palavra_descodificar = atob(palavra);
	document.getElementById("mostra").innerHTML = palavra_descodificar;
}

function copiar() {
    
	//let palavras = document.querySelector("mostra");
    var palavras = document.getElementById("mostra");
    palavras.select();
    palavras.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Texto Copiado!");
}