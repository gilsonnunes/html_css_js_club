function valida_form (){
if(document.getElementById("nomeLogin").value.length < 3){
alert('Por favor, preencha o campo nome');
document.getElementById("nomeLogin").focus();
return false
}

if(document.getElementById("telefoneLogin").value.length < 3){
alert('Por favor, preencha o campo Telefone');
document.getElementById("telefoneLogin").focus();
return false
}

if(document.getElementById("emailCadastro").value.length < 3){
alert('Por favor, preencha o campo E-mail');
document.getElementById("emailCadastro").focus();
return false
}



}
