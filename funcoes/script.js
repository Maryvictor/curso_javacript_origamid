function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado);

var cor = "Amarelo";

switch (cor) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Verde":
    console.log("Olhe para a floresta");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  default:
    console.log("Feche os olhos");
    break;
}

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(53, 1.6));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}

corFavorita();

addEventListener("click", function () {
  console.log("Oi, gata!");
  document.write("Oi, Maria!");
});

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor coloque um numero";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("oi"));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

var profissao = "Developer";

function dados() {
  var nome = "Maria";
  var idade = 28;
  function outrosDados() {
    var endereco = "São Paulo";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());

function verificarTruthy(dado) {
    return !!dado;
}

function perimetroQuadrado(lado) {
  return lado * 4;
}

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

addEventListener("scroll", function () {
  this.document.write("Maria Victor");
});

function numeroPar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

 function verificarTipo(dado) {
  if (typeof dado === "number") {
    return "Esse dado é um número";
  } else {
    return "Esse dado é uma string";
  }
}

 