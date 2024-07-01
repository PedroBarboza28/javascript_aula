let leia = require('readline-sync');

let vetor = [10];

let Impar = 0;

let totalp = 0;

let totali = 0;

let Par = 0;
let i;


for(i = 0; i < 10; i++){

    vetor[i] = leia.questionInt(`Digite o ${i+1} numero: `); 

    if(vetor[i] % 2 === 0){       
       Par++
    }
    else {
       Impar++
     }
}


 console.log("\nTotal de numeros pares: " + Par++ )
 console.log("\nTotal de numeros impares: " + Impar++ )