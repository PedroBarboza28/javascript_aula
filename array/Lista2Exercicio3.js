const leia = require('readline-sync');

let idade;
let contadorMenores21 = 0;
let contadorMaiores50 = 0;

console.log("Digite as idades das pessoas. Para finalizar, digite um número negativo.");

while (true) {

    idade = leia.questionInt("Digite uma idade: ");

    if (idade < 0) {
        break;
    } else if (idade < 21) {
        contadorMenores21 += 1
        console.log(`Total de pessoas menores de 21 anos: ${contadorMenores21} \nTotal de pessoas maiores de 50 anos: ${contadorMaiores50}`);
    } else if (idade > 50) {
        contadorMaiores50 += 1
        console.log(`Total de pessoas menores de 21 anos: ${contadorMenores21} \nTotal de pessoas maiores de 50 anos: ${contadorMaiores50}`);

    }

    } 

