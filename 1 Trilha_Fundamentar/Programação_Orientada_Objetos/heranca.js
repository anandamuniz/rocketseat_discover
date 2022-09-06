//classe pai
class Veiculo {
    rodas = 4;

    mover(direcao) {}       //funcionalidade
    virar(direcao) {}       //funcionalidade
}

//classe filho
class Moto extends Veiculo {            //extends: herda propriedades da classe pai
    constructor() {
        super()             //super(): significa puxar todos os atritutos e métodos do pai
        this.rodas = 2
    }                       //as funcionalidades mover e virar já existem na mota pois foram herdadas
}