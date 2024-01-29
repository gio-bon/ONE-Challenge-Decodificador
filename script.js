

// ao carregar dá o foco no txtarea para começar a digitar
document.addEventListener("DOMContentLoaded", function() {
    let texto = document.getElementById("entrada-txt");
    texto.focus();
    texto.setSelectionRange(texto.value.length, texto.value.length);
});


function criptografar() {
  let texto = document.getElementById("entrada-txt").value;

  const substituicao = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat",
  };

  // substituindo cada vogal pelas sequências definidas no objeto replacements. O resultado final é armazenado na variável resultadoFinal.
  const resultadoFinal = texto.toLowerCase().replace(/[aeiou]/g, match => substituicao[match]);

  insereResposta(resultadoFinal);
  insereBotaoCopiar();
}

function descriptografar() {
  let textoCriptografado = document.getElementById("entrada-txt").value;

  const substituicao = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u",
  };

  const resultadoFinal = textoCriptografado.replace(/ai|enter|imes|ober|ufat/g, match => substituicao[match]);

  insereResposta(resultadoFinal);
  insereBotaoCopiar();
}

// insere resposta e altera imagem
function insereResposta(txtResposta){
    const imagem = document.getElementById("ilustracao");
    let campoResposta = document.getElementById('resposta');

    campoResposta.textContent = txtResposta;
    imagem.setAttribute("src", "assets/undraw_result.svg");
}

function insereBotaoCopiar(){
    const botaoExists = document.getElementById("botaoCopyResp");
    if(botaoExists != null){
        botaoExists.remove();
    }

    const botao = document.createElement("button");
    botao.textContent = "Copiar";
    botao.setAttribute("id", "botaoCopyResp");
    botao.onclick = function(){
        let campoResposta = document.getElementById('resposta');
        navigator.clipboard.writeText(campoResposta.innerHTML);
    };
    const campoInserir = document.getElementById("campo-resp");
    campoInserir.appendChild(botao);
}

// verifica se há algum caractere no campo input, se zero altera a imagem
document.addEventListener("keyup", function(event) {

  if (event.key === "Backspace") {
    let campoTexto = document.getElementById("entrada-txt").value;
    if(campoTexto.length == 0){
      const imagem = document.getElementById("ilustracao");
      imagem.setAttribute("src", "assets/undraw_image.svg");
    }
  }
});