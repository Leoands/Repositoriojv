/*let pessoa ={
    nome:'nicolly',
    sobreNome: 'jesus',
    idade: 19,
    endereco: 'cachorinha'
}
console.log(typeof pessoa)
console.log(`a ${pessoa.nome} tem ${pessoa.idade}`)*/


class PessoaFisica {
    constructor (Nome,sobrenome,Idade,endereco) {
        this.Nome = Nome;
        this.Sobrenome = sobrenome;
        this.Idade = Idade;
        this.Endereco = endereco;
    }
}
let Nicolly = new PessoaFisica('Nicolly','Jesus', 19 ,'Cachoerinha')
console.log (typeof Nicolly)
    
console.log(`Olá,${Nicolly.Nome} vc tem ${Nicolly.Idade} anos de idade`);

class Classe01 {
    constructor(Nome,Quantoanos,Cor,Raca,Hobbien){
        this.Nome = Nome;
        this.Quantoanos = Quantoanos;
        this.Cor = Cor;
        this.Raca = Raca;
        this.Hobbien = Hobbien;
    }
}

class Classe02 {
    constructor(Marca,Anos,Cor,Modelo,Estilo){
        this.Marca = Marca;
        this.Anos = Anos;
        this.Cor = Cor;
        this.Modelo = Modelo;
        this.Estilo = Estilo;
    }
}

let cachorro1 = new Classe01('Dudu',12, 'cinza','SRD','Matar gatos quando manda')
let cachorro2 = new Classe01('Spicou',3, 'marrom','SRD','Gosta de brinca e correr')
let cachorro3 = new Classe01('Dudu',12, 'cinza','SRD','Matar gatos quando manda')


let carro1 = new Classe02('Toyota',2002,'vrmelho','Supra mk4', 'espotivo')