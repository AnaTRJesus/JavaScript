var botao = document.querySelector("#botao_adicionar");

botao.addEventListener("click", function () {
    event.preventDefault();
    var formulario = document.querySelector("#formulario");
    var aluno = obterAluno(formulario);

    // * validar dados do aluno
    
    var erros = validarDados(aluno);
    if(erros.length > 0){

        exibirMensagemDeErro(erros);

        return;
    }

    // ** CRIACAO DA NOVA LINHA DA TABELA
    var alunoTr = criarTr(aluno);

    // * Criação das celulas 'td' que compoe a linha

    /// obter a tablea recebera a linha
    var table = document.querySelector("#tabela");
    table.appendChild(alunoTr);

    formulario.reset();
    limparListaDeErros(document.querySelector("#lista-erros"));

});

function obterAluno(form) {
    var aluno = {
        nome: form.nome.value,
        nota1: form.nota1.value,
        nota2: form.nota2.value,
        media: caclularMedia(form.nota1.value, form.nota2.value),
        situacao: definirSituacao(caclularMedia(form.nota1.value, form.nota2.value)),
        botao: btnExcluir()
    }
    return aluno;
}

function criarTd(dado) {
    var td = document.createElement("td");
    td.textContent = dado;
    return td;
}

function criarTr(aluno) {
    var alunoTr = document.createElement("tr");
    alunoTr.appendChild(criarTd(aluno.nome));
    alunoTr.appendChild(criarTd(aluno.nota1));
    alunoTr.appendChild(criarTd(aluno.nota2));
    alunoTr.appendChild(criarTd(aluno.media));
    alunoTr.appendChild(criarTd(aluno.situacao));
    alunoTr.appendChild((aluno.botao));

 
    //alunoTr.appendChild(botaoExcluir);
    return alunoTr;
}

function validarDados(aluno) {

    var erros = [];

    if(aluno.nome.length == 0){
        erros.push("O nome do aluno é obrigatório");
    }

    if (validarNota1(aluno.nota1) == false || aluno.nota1.length == 0){
        erros.push("A nota 1 deve estar entre 0 a 10");
    }

    if(validarNota2(aluno.nota2) == false || aluno.nota2.length == 0) {
        erros.push("A nota 2 deve estar ebntre 0 a 10");
    }

    return erros;
}

function exibirMensagemDeErro(erros){
        var ul = document.querySelector("#lista-erros");

        limparListaDeErros(ul);
        ul.classList.add("pt-2", "pb-2");

        erros.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
}

function limparListaDeErros(ul){
    ul.classList.remove("pt-2", "pb-2");
    ul.innerHTML = "";
}

function btnExcluir() {
    var td = document.createElement("td");
    var botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("btn", "btn-danger");
    botaoExcluir.textContent = "Excluir";
    td.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click", function(){
		
		
		var tabela = document.querySelector("#tabela");

        tabela.addEventListener("click", function(event){
        var alvo = event.target;
        var paiDoAlvo = alvo.parentNode.parentNode;
    
        setTimeout(function(){
            paiDoAlvo.remove();
        }, 1000);
    
    });
		

   })

    return td;
}

