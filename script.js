const Crypto = window.Crypto;

// ao carregar dá o foco no txtarea para começar a digitar
document.addEventListener("DOMContentLoaded", function() {
    let texto = document.getElementById("entrada-txt");
    texto.focus();
    texto.setSelectionRange(texto.value.length, texto.value.length);
});

// ao carregar dá o foco no txtarea para começar a digitar

function criptografar(){
    let texto = document.getElementById("entrada-txt").value;
    let chave = document.getElementById("chave-txt").value;
    console.log(`Conteúdo: ${texto}`);
    console.log(`Chave: ${chave}`);

    const textoCriptografado = CryptoJS.AES.encrypt(texto, chave).toString();
    insereResposta(textoCriptografado);
    insereBotaoCopiar();
    console.log(`Texto Criptografado: ${textoCriptografado}`);
}

function descriptografar(){
    let texto = document.getElementById("entrada-txt").value;
    let chave = document.getElementById("chave-txt").value;
    console.log(`Conteúdo: ${texto}`);
    console.log(`Chave: ${chave}`);

    const bytesDescriptografados = CryptoJS.AES.decrypt(texto, chave);
    const textoDescriptografado = bytesDescriptografados.toString(CryptoJS.enc.Utf8);
    if(textoDescriptografado != ""){
        insereResposta(textoDescriptografado);
        insereBotaoCopiar();
    console.log("Texto Descriptografado:", textoDescriptografado);
    }else{
        insereResposta("Chave incorreta, não foi possível descriptografar");
        const imagem = document.getElementById("ilustracao");
        imagem.setAttribute("src", "assets/undraw_error.svg");
    }
}

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