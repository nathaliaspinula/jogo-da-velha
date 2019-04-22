let comecar = document.querySelector("button");
var jogador1, jogador2, jogadorAtual;
var formas = ['X','O'];
var tabuleiro = [];

function comecaJogo() {
    let jogo = document.getElementById("#jogo");
    let nomeJogador1 = prompt("Digite o nome do jogador 1:");
    let nomeJogador2 = prompt("Digite o nome do jogador 2:");
    if (jogador1 == "") {
        jogador1 = "Jogador 1";
    }
    else if (jogador2 == "") {
        jogador2 = "Jogador 2";
    }
    else {
        jogador1 = new Jogador(nomeJogador1,0);
        jogador2 = new Jogador(nomeJogador2,1);
    }

    jogadorAtual = jogador1;
    jogadorDaRodada();
    mostraJogo(jogo);
}

function Jogador(nome, forma) {
    this.nome = nome;
    this.forma = forma;
}

function mostraJogo() {
    jogo.style.display = "flex";
}

function jogadorDaRodada() {
    let p = document.querySelector('p');
    p.innerHTML = 'Jogador atual:  ' + jogadorAtual.nome;
}

function fazJogada(cel,pos) {
    if(tabuleiro[pos] == undefined) {
        cel.innerHTML = formas[jogadorAtual.forma];
        tabuleiro[pos] = formas[jogadorAtual.forma];

        //define o jogador da rodada
        (jogadorAtual.forma == 0) ? jogadorAtual = jogador2 : jogadorAtual = jogador1;
        jogadorDaRodada();
    } 
    else { 
       alert("Escolha um quadrado vazio!"); 
    }
    verificaLinha();
    verificaDiagonal();
    verificaColuna();
    if ( tabuleiroIsFilled() ) {
        alert ('Nobody wins! :(. Try Again');
        reset();
    }
}

tabuleiroIsFilled = function() {
    var preenchidos = 0;
        for(var i = 0; i < tabuleiro.length; i++)
            if(tabuleiro[i]	!= undefined) 
                preenchidos++;
        return preenchidos == tabuleiro.length;
}

function verificaLinha() {
    for( var i = 0; i < 7; i += 3) {
        if ( tabuleiro[i] == 'X' && tabuleiro[i + 1] == 'X' && tabuleiro[i + 2] == 'X' ) { 
            alert (jogador1.nome + ' é o ganhador!');
        }
        if ( tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' && tabuleiro[i + 2] == 'O' ) {
            alert (jogador2.nome + ' é o ganhador!');
        }
    }
}

function verificaDiagonal(){
    // 0,4,8
    if ((tabuleiro[0] == 'X' && tabuleiro[4] == 'X' && tabuleiro[8] == 'X') || 
        (tabuleiro[2] == 'X' && tabuleiro[4] == 'X' && tabuleiro[6] == 'X')) { 
        alert (jogador1.nome + ' é o ganhador!');
    }
    if ((tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' && tabuleiro[i + 2] == 'O') || 
        (tabuleiro[2] == 'O' && tabuleiro[4] == 'O' && tabuleiro[6] == 'O')) {
        alert (jogador2.nome + ' é o ganhador!');
    }
}

function verificaColuna() {
    for( var i = 0; i < 3; i++) {
        if ( tabuleiro[i] == 'X' && tabuleiro[i + 3] == 'X' && tabuleiro[i + 6] == 'X' ) { 
            alert (jogador1.nome + ' é o ganhador!');
        }
        if ( tabuleiro[i] == 'O' && tabuleiro[i + 3] == 'O' && tabuleiro[i + 6] == 'O' ) {
            alert (jogador2.nome + ' é o ganhador');
        }
    }
}


comecar.onclick = comecaJogo;