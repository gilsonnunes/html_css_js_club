$(document).ready(function(){
    desativaMenu();
    $("#principal").children("li").on({mouseenter: ativaMenu, mouseleave: desativaMenu});
    $("#somos").click(conteudoInicial);
    $("#aplicativo").on("click",conteudoInicial);
    $("#home").on("click",conteudoInicial);

    $("#usuarioMenu").on("click",conteudoInicial);
    $("#contact").on("click",conteudoInicial);
});


function ativaMenu(evento){
    $(this).find(".submenu").fadeIn(200);
}

function desativaMenu(){
    $(".submenu").hide();
}

function conteudoInicial() {
    var botao = this.text; // texto do botao para excluir outros que vao ser carregados
    botao = "#" + botao;

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {

        if (xhttp.status == 200){
            var selecao = xhttp.responseText;
            $('#mudar').html(selecao);
            apagaConteudoIndesejado(botao);
        };
    };
    xhttp.open("GET", "http://clubvip.esy.es/pesquisa.html", true);
    xhttp.send(null);

};

function apagaConteudoIndesejado(botao){
    $("#mudar").children("div:not("+botao+")").each(function(){
        this.remove();
    });
    ativandoFormulario();
};

function ajaxAplicativo(){
    alert("f");
};

function esqueceuSenha(){
    alert("trica");
};

/**
 $(document).ready(function(){
    desativaMenu();
    $("#principal").children("li").on({mouseenter: ativaMenu, mouseleave: desativaMenu});
    $("#somos").click(aSomos);
    $("#aplicativo").on("click",ajaxAplicativo);
    $("#home").on("click",ajaxAplicativo);
});

 function ativaMenu(evento){
    $(this).find(".submenu").fadeIn(200);
}

 function desativaMenu(){
    $(".submenu").hide();
}



 function aSomos(){
    var botao = this.text; // texto do botao para excluir outros que vao ser carregados
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {

        if (xhttp.status == 200){
            var selecao = xhttp.responseText;
            $('#mudar').html(selecao);
            apagaConteudoIndesejado(botao);
        };
    };

    xhttp.open("GET", "http://clubvip.esy.es/pesquisa.html", true);
    xhttp.send(null);
};

 function apagaConteudoIndesejado(botao){
    alert(botao);
    $("#mudar").children(":not("+botao+")").each(function(){
        this.remove();

    });


};


 function ajaxAplicativo(){
    apagaConteudoIndesejado("piru");
};
 */