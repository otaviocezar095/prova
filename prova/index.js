function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
  }
  
  function verificarSituacao(media) {
    return media >= 5 ? 'Aprovado' : 'Reprovado';
  }
  
  function enviarFormulario() {
    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
  
    var media = calcularMedia(nota1, nota2);
    var situacao = verificarSituacao(media);
  
    var tabela = document.getElementById('tbody');
    var novaLinha = tabela.insertRow();
  
    var colunaNome = novaLinha.insertCell(0);
    var colunaMatricula = novaLinha.insertCell(1);
    var colunaNota1 = novaLinha.insertCell(2);
    var colunaNota2 = novaLinha.insertCell(3);
    var colunaMedia = novaLinha.insertCell(4);
    var colunaSituacao = novaLinha.insertCell(5);
  
    colunaNome.innerHTML = nome;
    colunaMatricula.innerHTML = matricula;
    colunaNota1.innerHTML = nota1.toFixed(2);
    colunaNota2.innerHTML = nota2.toFixed(2);
    colunaMedia.innerHTML = media.toFixed(2);
    colunaSituacao.innerHTML = situacao;
  
    document.getElementById('formulario').reset();
  }
  