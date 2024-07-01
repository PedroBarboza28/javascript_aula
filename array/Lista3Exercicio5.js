let leia = require('readline-sync');

let vetor = []

let positivo = 0;

let soma = 0;

do{

   positivo = leia.questionInt("Digite um numero: ")

   if(positivo > 0){
   vetor.push(positivo)
}

} while(positivo !== 0 ) {

    soma = vetor.reduce((soma, i) => soma + i, 0)

}

console.log(`A soma dos numeros positivos é: ${soma}`)