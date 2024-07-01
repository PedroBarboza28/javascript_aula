let leia = require('readline-sync');

let vetor = [];
let imparI = [];
let parE = [];
let entra;
let soma;
let qnt;
let media;


for(let i = 0; i < 10; i++){

  entra = leia.questionFloat("Insina um numero: ")
    vetor.push(entra)

   if(i % 2 !== 0){
      imparI.push(entra)
   }
   if (entra % 2 === 0){
      parE.push(entra)
   }
   
   soma = vetor.reduce((soma, entra) => soma + entra, 0);
   
   qnt = vetor.length;

   media = soma / qnt;

}

console.log(`Elementos nos indices impares: ${imparI}`);
console.log(`Elementos impares: ${parE}`);
console.log(`Soma: ${soma}`);
console.log(`Media: ${media}`);