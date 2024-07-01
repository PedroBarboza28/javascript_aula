let leia = require('readline-sync');

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let valor = leia.questionInt("Escolha um valor de 1 a 10: ");

for(let i = 0; i < 10; i++){

  (vetor[i] === valor) 
  ? (console.log(`O número ${vetor[i]} está localizado na posição ${i+1}!`))
  : null;
  
}

!valor && console.log("Não foi encontrado!")