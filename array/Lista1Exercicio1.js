let leia = require('readline-sync');

console.log("Atenção! Para processar os dados, é preciso que o usuário entre com o primeiro número menor que o segundo.");

let entrada1 = leia.questionInt("Entre com o primeiro numero: ");
let entrada2 = leia.questionInt("Entre com o segundo numero: ");


if (entrada1 >= entrada2) {
    console.log("Erro: o primeiro número deve ser menor que o segundo número.");
} else {
    console.log(`Números divisíveis por 3 e 5 entre ${entrada1} e ${entrada2}:`);
    for (let i = entrada1; i < entrada2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}
