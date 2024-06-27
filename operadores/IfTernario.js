const leia = require('readline-sync');

let nome = leia.question("Digite seu nome: ");

let idade = leia.questionInt("Digite sua idade: ");

console.log((idade >= 18 && idade <= 65) ? `${nome}! Você tem idade para votar` : `${nome}! Você não tem idade para votar`);