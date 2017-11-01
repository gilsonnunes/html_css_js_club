$(document).ready(function(){
 //   $("#formContato").children().on("keyup",validacao);
    $("#emailCadastro").on("blur",validarEmail);
    $(".central").children().on("click",opcional);
    $("#esqueceu").on("click",esqueceuSenha);
    $("#fechar").on("click",esqueceuSenha);
});

function opcional(){
    $(".central").children().each(function(){
          this.src = this.src.replace("on","off");
    });
    this.src = this.src.replace("off","on");
}

function teclando(local) {
    var tipo = local.type;
    switch(tipo){
        case "text":
            validarTexto(local);
        break;
        case "number":
            validarNumuero(local);
        break;
        case "email":
            validarEmail(local);
        break;
        case "textarea":
            testArea(local);
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

function esqueceuSenha() {
    if (this.id === "esqueceu") {
        document.getElementById("poup").style.display = "block";
    //document.getElementById("poup").style.display = "block";
    }else{
        document.getElementById("poup").style.display = "none";
    }
};