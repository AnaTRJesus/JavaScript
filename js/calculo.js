var alunos = document.querySelectorAll("#aluno");

for (var i = 0; i < alunos.length; i++) {
    var trAluno = alunos[i];

    var tdNota1 = trAluno.querySelector("#nota1");
    var tdNota2 = trAluno.querySelector("#nota2");

    var nota1 = tdNota1.textContent;
    var nota2 = tdNota2.textContent;

    var media = caclularMedia(nota1, nota2);
    
    var tdMedia = trAluno.querySelector("#media");
    tdMedia.textContent = media;

    //definir situacao
    var tdSituacao = trAluno.querySelector("#situacao");
    //tdSituacao.textContent = definirSituacao(media);
 
}

function caclularMedia(nota1, nota2) {
    var media = (parseInt(nota1) + parseInt(nota2)) / 2;
    return media.toFixed(2);

}

function definirSituacao(media) {
    if (media >= 5) {
        return "APROVADO";
    } else {
        return "REPROVADO";
    }
}