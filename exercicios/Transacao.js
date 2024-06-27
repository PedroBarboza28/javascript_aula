let leia = require('readline-sync')

console.log("Operacoes: ")
console.log("\nCodigo de Operação: 1. Operação: Saldo.");
console.log("Codigo de Operação: 2. Operação: Saque");
console.log("Codigo de Operação: 3. Operação: Deposito");

let saldo =1000;

let operacao = leia.questionInt("\nEscolha uma operacao bancaria inserindo o codigo: ");

let saque;

let deposito;


switch(operacao){

 case 1:
    console.log(`Seu saldo é: R$${saldo.toFixed(2)}`);
   break;
 
 case 2: 
   saque = leia.questionFloat("\nValor de saque: ");
   saldo -= saque;
   console.log(`\nVocê sacou o valor de ${saque.toFixed(2)}\nO saldo atualizado é ${saldo.toFixed(2)}`)
   break;

 case 3:
   deposito = leia.questionFloat("\nvalor a ser depositado: ");
   saldo += deposito;
   console.log(`\nVocê depositou o valor de ${deposito.toFixed(2)} \n O saldo atualizado é ${saldo.toFixed(2)}`)
   break;

   default:
    console.log("Opção inválida");
    break;
}
