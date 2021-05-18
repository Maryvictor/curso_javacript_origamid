 var pessoa1 = {
     nome: "Maria",
     idade: 28,
     faculdade: "Fatec",
     comida: "Esfiha"

}

console.log(pessoa1.nome);
console.log(pessoa1.faculdade);
console.log(pessoa1.idade);


var pessoa = {
    nome: "Maria",
    idade: 28,
    profissao: "Developer",
    possuiFaculdade: true,

}

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    },
}

var dados = {
    nome: 'Maria',
    sobrenome: 'Victor',
    idade: 28,
    cidade: 'Rio de Janeiro',
}

dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;

}

dados.dadosCompletos = function(){
    return `Nome:${this.nome}
            Sobrenome:${this.sobrenome}
            idade:${this.idade}
            cidade:${this.cidade} `
}

var carro ={
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}


carro.preco = 3000;
// carro.PrecoModificado = function(){
//     return this.preco * 3;
// }


var cachorro ={
    raca: "labrador",
    cor: "preto",
    idade: 10,
    latir(pessoa) {
        if(pessoa === "homem"){
            return "Latir";
        }else {
            return "Nada";
        }
    }
}