const leia = require('readline-sync');

let nome;

let codigo;

nome = leia.question("\nDigite seu nome: ");

console.log("\n 1 -- De 0 a 10 anos ");
console.log("\n 2 -- De 11 a 29 anos ");
console.log("\n 3 -- De 30 a 45 anos ");
console.log("\n 4 -- De 46 a 59 anos");
console.log("\n 5 -- De 60 a 65 anos ");
console.log("\n 6 -- Acima de 65 anos ");

codigo = leia.questionInt("\nDigite sua idade: ");

switch(codigo){
   
    case 1 :
        Plano = 100;
        break;
    case 2 :
        Plano = 200;
        break;
    case 3 :
        Plano = 200;
        break;
    case 4 :
        Plano = 300;
        break;
    case 5 :
        Plano = 400;
        break;
    case 6 :
        Plano = 500;
        break;
    default : 
        Plano = "inválido"
        break;
}

if(Plano !== "inválido"){
console.log(`Olá ${nome}! seu plano é: ${Plano}!`)
}
else{
console.log("Valor inválido")
}