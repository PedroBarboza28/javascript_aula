const leia = require('readline-sync');

let nome = leia.question("Digite seu nome: ");

let idade = leia.questionInt("Digite sua idade: ");

if(idade >= 0 && idade <= 10){
   Plano = 100;
}
else if(idade > 10 && idade < 18){
  Plano = 200;
}
else if(idade >= 18 && idade <= 45){
  Plano = 400
}
else if (idade > 45 && idade <= 65 ){
  Plano = 500
}
 else if(idade >= 65) {
    Plano = 1000
}
else {
    lert("Coloque uma idade válida!")
}

if(nome.toUpperCase() === nome) {
    console.log( `olá ${nome}! plano ficou no valor de: %d ${Plano}!`)
}