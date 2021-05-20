const imgs = document.querySelectorAll('img');

imgs.forEach(function (item, index, array) {
    console.log(item, index);
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
    console.log(item);
});

imgs.forEach(item => {
    console.log(item);
});

titulosArray.forEach((item, index) => {
    console.log(item, index);
});

imgs.forEach(() => {
    console.log();
});

imgs.forEach(item => console.log(item));
imgs.forEach(() => console.log());

// Exercicios

// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll('p');


// Mostre o texto dos parágrafos no console
paragrafo.forEach((item) => {
    console.log(item.innerText);
});
// Como corrigir os erros abaixo:
const imagens = document.querySelectorAll('img');
imagens.forEach((item, index) => {
 console.log(item, index);
});
let i = 0;
imgs.forEach(() => {
 console.log(i++);
});
imgs.forEach(() => i++)