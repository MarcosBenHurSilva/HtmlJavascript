class Pessoa1 {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p1 = new Pessoa1('João')
p1.falar()

//resposta

function Pessoa(nome) {
        this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}.`)
    }
}
const p2 = new Pessoa('João')
p2.falar()
