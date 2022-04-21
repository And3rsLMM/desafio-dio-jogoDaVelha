var jogador, vencedor = null;
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X'
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        selecionarvencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        selecionarvencedor(quadrado4);
        return;
    }
    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        selecionarvencedor(quadrado7);
        return;
    }
    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        selecionarvencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        selecionarvencedor(quadrado3);
        return;
    }
    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        selecionarvencedor(quadrado4);
        return;
    }
    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        selecionarvencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        selecionarvencedor(quadrado2);
        return;
    }
    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        selecionarvencedor(quadrado3);
        return;

    }
}

function selecionarvencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.color = '#0f0';
    quadrado2.style.color = '#0f0';
    quadrado3.style.color = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var iguais = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        iguais = true;
    }
    return iguais;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');

}