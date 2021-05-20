const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.toggle('azul');
menu.classList.remove('azul');

if(menu.classList.contains("azul")){
    menu.classList.add('possui-azul');
}else {
    menu.classList.add('possui-verde');
}

console.log(menu.className);

console.log(menu.attributes);

const img = document.querySelector('img');

console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));

img.setAttribute('frase', 'e o catchorro');

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);