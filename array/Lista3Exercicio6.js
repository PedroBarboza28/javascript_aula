let leia = require('readline-sync');

let vetor = []

let num = 0;

let soma = 0;

let media = 0;

let qnt = 0;

do{
    
     num = leia.questionInt("Digite o numero: ")
      
     if(num % 3 === 0 && num !== 0){
        vetor.push(num);

     }
    
} while(num !== 0){
 
    if(vetor.length !== 0 ){
 soma = vetor.reduce((soma, num) => soma + num, 0 );
 media = soma / vetor.length;
    }
}

console.log(`A média de todos os números múltiplos
de 3 é: ${media}`)
