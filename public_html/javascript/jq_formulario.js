
$(document).ready(function(){
    $("#formContato").children().on("keyup",validacao);
    $("#emailCadastro").on("blur",validarEmail);
    $(".central").children().on("click",opcional);
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