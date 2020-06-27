class TelaInicial{
    constructor() {
        this.x = width / 2;
        this.y = height;
    }
    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }
    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }
    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        textSize(100);
        text('As Aventuras De', width/2, height/2);
        text('HIPSTA', width/2, height/2 + 100);
    }
    _botao() {
        botaoGerenciador.y = height/7 * 5;
        botaoGerenciador.draw();
    }
}
