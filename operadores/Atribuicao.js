const leia = require('readline-sync');

let quantidade;
let altura;

/* Exemplo de leitura de número inteiro
quantidade = leia.questionInt("Digite um numero inteiro: ");
console.log("O valor inteiro digitado foi: " + quantidade);
*/

// Exemplo de leitura de número flutuante com limite de mensagem
altura = leia.questionFloat("\nDigite um valor flutuante: ", { limitMessage: 'Por favor, digite um número flutuante válido.' });

console.log("O valor flutuante é: " + altura);
