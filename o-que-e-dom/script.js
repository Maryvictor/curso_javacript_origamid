window.alert("Hi, Mary!")

const href = window.location.href;

console.log(href);

if (href === "http://127.0.0.1:5500/o-que-e-dom/")
    console.log("Ok");




 const selecionado = document.querySelector('h1')

 selecionado.addEventListener('click', function(){
     console.log('Clicou', selecionado.innerText);
 })