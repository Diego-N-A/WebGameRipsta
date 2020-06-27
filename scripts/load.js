function preload() {
    imagemGameOver = loadImage('assets/imagens/assets/game-over.png');
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
    imagemTelaInicial = loadImage('assets/imagens/assets/telaInicial.png');
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
    imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png');
    imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png');
    imagemInimigoGrande = loadImage('assets/imagens/inimigos/troll.png');
    fonteTelaInicial = loadFont('assets/imagens/assets/fonteTelaInicial.otf');
    imagemVida = loadImage('assets/imagens/assets/coracao.png');
    fita = loadJSON('fita/fita.json')

    somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
    somDoPulo = loadSound('assets/sons/somPulo.mp3');
}
