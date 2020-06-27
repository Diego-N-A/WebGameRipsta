class Personagem extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
        this.yIninicial = height - this.altura - this.variacaoY;
        this.y = this.yIninicial;
        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
        this.alturaDoPulo = -30;
        this.jumps = 0;
        this.invencivel = false;
    }
    pula() {
        if (this.jumps < 2) {
            this.velocidadeDoPulo = this.alturaDoPulo;
            this.jumps++;
        }
    }
    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
        if (this.y > this.yIninicial) {
            this.y = this.yIninicial
            this.jumps = 0;
        }
    }
    tornarInvencivel() {
        this.invencivel = true
        setTimeout(() => {
            this.invencivel = false
        }, 1000)
    }
    estaColidindo(inimigo){
        if(this.invencivel) {
            return false
        }
        const precisao = .7
        const colisao = collideRectRect(
            this.x,
            this.y,
            this.largura * precisao,
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao
        );
        return colisao;
    }
}
