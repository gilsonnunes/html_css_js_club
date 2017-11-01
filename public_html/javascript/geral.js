/**
function movimento(num,tipo){
			
	document.getElementById("trans"+num).src="../imagens/"+ tipo +".gif" ;

};



function recuperaSenha(visivel){

	if(visivel ==  true){
		document.getElementById("poup").style.display = "block";
	}else if(visivel == false){

		document.getElementById("poup").style.display = "none";
	}

};


function enviarEmail(){
 	var m1 = document.getElementById("n1").value;
	var m2 = document.getElementById("n1").value;


	var imprirmir = {
	entrada: m1,
	saida: m2,
	televisao: m2 + m1,
	radio: m1 + m1
	};
	
	for(var busca in imprirmir){
		alert(busca+": "+imprirmir[busca]);
	}

	

	
};


function criando(){
	alert(document.getElementById("n1").value);
		
	var novo = document.createElement("p");

	var novoText = document.createTextNode("agora sim meu vei, criei um novo item");
		      
	novo.appendChild(novoText);
	
	var local = document.getElementsByTagName("p")[0];
		    
	local.appendChild(novo);
};



function functions(){

	alert("por favor use numero maior que 5 caractere");
	alert("pi");
	var tamanho = document.getElementById("n1").value;
	alert(tamanho);
	if (tamanho.length < 5 ){
		alert("por favor use numero maior que 5 caractere");

	}else{
		alert("23");
	}
}



function confirmacaoSenha(valor){
	if( document.getElementById("senhaCadastro").value === valor ){
		alert("confirmado!");
	}
}

function mudarTexto(ide,elemento){
	if(elemento != ""){
		document.getElementById(ide).style.backgroundColor =  " rgba(215, 40, 40, 0.3)";
	}
}



function verificarNome(ide){
	var nome = document.getElementById(ide).value;
	nome = nome.replace(/\s/ig,'');
	if(!/^([a-z]+)$/ig.test(nome)){
		mudarTexto(ide,nome);
	}
}

function veririficarComentario(ide){
//	var naoPode = "&*%$#@.:;<>";
	var pode = /^([a-z0-9]+)$/ig;
	var comentario = document.getElementById(ide).value;
	comentario = comentario.replace(/\s/ig,'');

		if( !pode.test(comentario)) {
			mudarTexto(ide,comentario);
		};

}

function verificarNumero(ide){
	var nome = document.getElementById(ide).value;
	nome = nome.replace(/\s/ig,'');
	var conteudo = /^([0-9]+)$/ig ;

	if(!conteudo.test(nome)){
			mudarTexto(ide,nome);	
	}
}

function verificarEmail(ide){
	var texto = document.getElementById(ide).value;
	var editado = /^([a-z0-9]{2,}\@\w+\.\w{2,3})$/;
	var editadoBr = /^([a-z0-9]{2,}\@\w+\.\w{3}\.\w{2})$/;
	
	if(editado.test(texto) || editadoBr.test(texto)){
		
	}else{
		mudarTexto(ide,texto);
	}
}

window.onload = function(){
	document.getElementById("nomeCadastro").onblur = function(){
		verificarNome(this.id);	
	}
	document.getElementById("telefoneCadastro").onblur = function(){
		verificarNumero(this.id);
	}
	document.getElementById("cpfCadastro").onblur = function(){
		verificarNumero(this.id);
	}
	document.getElementById("cnpjCadastro").onblur = function(){
		verificarNumero(this.id);
	}
	document.getElementById("emailCadastro").onblur = function(){
		verificarEmail(this.id);
	}
	document.getElementById("icid").onblur = function(){
		verificarNome(this.id);
	}
	document.getElementById("enderecoCadastro").onblur = function(){
		veririficarComentario(this.id);
	}
	document.getElementById("complementoCadastro").onblur = function(){
		veririficarComentario(this.id);
	}
	
	document.getElementById("senhaCadastro").onblur = function(){
		veririficarComentario(this.id);
	}
	document.getElementById("confSenhaCadastro").onblur = function(){
		confirmacaoSenha(this.id);
	}
	
	document.getElementById("botaoConfirm").addEventListener("click", function(){
		salvarNovoCookie( document.getElementById("nomeCadastro").value)
	}, true);

	document.getElementById("botaoLimpar").onclick = function(){
		exibirNovoCookie("nomeCadastro");
	}
	
	setTimeout(exibirNovoCookie("nomeCadastro"), 2000);



}

function verificarCookie(valor){
		
	var expirar = new Date();
	expirar.setMinutes(expirar.getMinutes()+5);
	expirar = expirar.toGMTString();
	// periodo de expirar

	//verifica cookies
	if(lerCookie("nome") != ''){
			alert(lerCookie("nome")+" voce já estava cadastrado");
	}																													
	if(valor !="" && valor != null && valor != "null"){
		var tentando = document.cookie = "nome=" + valor + ";" + expirar + ";path=/" ? document.cookie = "nome=" + valor + "; expires=" + expirar + ";path=/" : document.cookie = "nome=" + valor + ";" + expirar + ";path=/" ;
		alert("funfou");
		
	}

}

function lerCookie(cname){
	var procuraNome = cname + "=";
	var cookies = document.cookie.split(';');

	
		for(var i = 0; i < cookies.length; i++){
				var c = cookies[i];
				while(c.charAt(0)== ' '){
					c = c.substring(1);
				}
				if(c.indexOf(procuraNome) == 0){
					return c.substring(procuraNome.length, c.length);
				}
		}
		return "";	
}



function salvarNovoCookie(nome){
	sessionStorage.setItem("user", nome);
	alert("salvando");
}

function exibirNovoCookie(ide){
	document.getElementById(ide).value = sessionStorage.getItem("user");
}

function recuperaSenha(visivel){

//	if(visivel ==  true){
		document.getElementById("poup").style.display = "block";
//	}else if(visivel == false){

//		document.getElementById("poup").style.display = "none";
//	}

};

*/

$(document).ready(function(){
	$("#formContato").children().on("keyup",validacao);
	$("#emailCadastro").on("blur",validarEmail);
	$(".central").children().on("click",opcional);
	$("#esqueceu").load(function(){
		alert("carregou");
	});

	$("#fechar").on("click",recuperaSenha);

});

function opcional(){
	$(".central").children().each(function(){
		this.src = this.src.replace("on","off");
	});
	this.src = this.src.replace("off","on");
}

function validacao() {
	var tipo = this.type;
	switch(tipo){
		case "text":
			validarTexto(this);
			break;
		case "number":
			validarNumuero(this);
			break;
		case "email":
			validarEmail(this);
			break;
		case "textarea":
			testArea(this);
			break;
	}
}

function validarTexto(variavel){
	var pode = /[^a-z]/ig;
	variavel.value = variavel.value.replace(pode,'');
};

function validarNumuero(variavel){
	var pode = /[^0-9]/ig;
	variavel.value = variavel.value.replace(pode,'');
};

function validarEmail(variavel){
	var testeEmail = /^[a-z0-9\_\.]{3,30}\@[a-z0-9]{2,15}\.[a-z0-9\.]{3,6}$/;
	if(testeEmail.test(variavel.value)){
		alert("certo");
	}else{
		alert("errado");
	};
};

function testArea(variavel){
	var pode = /[^a-z0-9_@]/ig;
	variavel.value = variavel.value.replace(pode,'');
};

function recuperaSenha(){
	alert("funfando");
	if(this.id === "esqueceu"){
		document.getElementById("poup").style.display = "block";
	}else{
		document.getElementById("poup").style.display = "none";
	};

};
