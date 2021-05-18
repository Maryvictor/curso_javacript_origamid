
// var ultimoItem = videoGames.pop();



// videoGames.push("3DS");


for(var numero = 0; numero <= 10; numero++){
    console.log(numero);
}

var i = 0;
while (i < 10){
    console.log(i);
    i++;
}

var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for(var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item]);
    if(videoGames[item]==="PS4"){
        break;
    }
}

var frutas = ['Banana','Maça', 'Pera', 'Uva', 'Melancia'];

frutas.forEach(function(fruta){
    console.log(fruta);
    if (frutas === "Pera");
    
})


frutas.forEach(function(fruta, index, array) {
    console.log(fruta, index, array)
    // frutas.pop();
});

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];
for(var i = 0; i <brasilCampeao.length; i++){
    console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`)
}

var ultimaFruta = frutas[frutas.length - 1]; //quando queremos o último elemento