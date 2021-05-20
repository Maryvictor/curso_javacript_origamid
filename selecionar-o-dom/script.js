const animais = document.getElementById('animais');
console.log(animais.innerText);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkinterno = document.querySelector('[href^="#"]');
console.log(linkinterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[3]);


const gridSectionHTML = document.getElementsByClassName('grid-section'); //atualiza ao vivo, classname usa o nome exato
const gridSectionNode = document.querySelectorAll('.grid-section'); //estatico

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

//primeiraUl.classList.add('grid-section'); //cria uma classe

gridSectionNode.forEach(function (item, index){
    console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
    console.log(item);
})

//Exercicios

// Retorne no console todas as imagens do site
const todasImg = document.querySelectorAll('img');
console.log(todasImg);

todasImg.forEach(function(item){
    console.log(item);
});


// Selecione todos os links internos (onde o href começa com #)
const link = document.querySelectorAll('[href^="#"]');
console.log(link);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2');
console.log(primeiroh2);

const cachorros = document.querySelector('.animais-descricao');
const h2Cachorros = cachorros.querySelector('h2');
console.log(h2Cachorros);

// Selecione o último p do site
const todosP = document.querySelectorAll('p');
console.log(todosP[todosP.length - 1]);
console.log(todosP[--todosP.length]);


