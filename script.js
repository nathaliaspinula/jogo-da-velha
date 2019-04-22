let comecar = document.querySelector("button");

function comecaJogo() {
    let jogo = document.getElementById("#jogo");
    var jogador1 = prompt("Digite o nome do jogador 1:");
    var jogador2 = prompt("Digite o nome do jogador 2:");
    if (jogador1 == "") {
        jogador1 = "Jogador 1";
    }
    if (jogador2 == "") {
        jogador2 = "Jogador 2";
    }
    mostraJogo(jogo);
}

function mostraJogo() {
    jogo.style.display = "flex";
}

comecar.onclick = comecaJogo;