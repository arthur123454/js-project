// fantasia, drama, romace,comedia 


// divertida mente, Livre, Drama, Aventura, fantasia
// carros,Livre, Aventura, comedia, Animação
// homem aranha Livre, Ação, super-heroi 
// a viagem de chihiro Livre, fantasia,Aventura

// your name 12, Drama, animação, romace
// velozes e furiosos,14, Ação, suspense, policial
// bad boys, 16 Ação, comedia, drama, policial
//todo mundo em panico, 16, comdeia, terror

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "todo mundo em panico";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "your name";          
        } else{
         return "velozes e furiosos";
        }
      } else {
        if (gostaDeFantasia) {
          return "homem aranha";
        } else {
          return "bad boys";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "divertida mente";
    } else {
      return "carros ";
    }
  }
}
