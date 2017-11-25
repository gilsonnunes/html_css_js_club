function valida_form (){
if(document.getElementById("nomeCadastro").value == ""){
alert('Por favor, preencha o campo nome');
document.getElementById("nomeCadastro").focus();
return false
}

if(document.getElementById("telefoneCadastro").value == ""){
alert('Por favor, preencha o campo telefone');
document.getElementById("telefoneCadastro").focus();
return false
}

if(document.getElementById("cpfCadastro").value == ""){
alert('Por favor, preencha o campo CPF');
document.getElementById("cpfCadastro").focus();
return false
}

if(document.getElementById("emailCadastro").value == ""){
alert('Por favor, preencha o campo E-mail');
document.getElementById("emailCadastro").focus();
return false
}

if(document.getElementById("senhaCadastro").value == ""){
alert('Por favor, preencha o campo Senha');
document.getElementById("senhaCadastro").focus();
return false
}


}
