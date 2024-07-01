let leia = require('readline-sync');

let alunos = [];

let media = [];

let nota;

let soma;

for(let l = 0; l < 2; l++){

alunos[l]=[]
soma = 0; 

for(let b = 0; b < 4; b++){

  nota = leia.questionFloat("Entre com as notas: ");
  alunos[l][b] = nota;
  soma += nota;

}

media[l] = soma / 4;

}

console.log(` Media: ${media}`)