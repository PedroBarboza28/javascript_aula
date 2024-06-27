let leia = require('readline-sync')

let entrada = leia.questionInt("Entre com um numero inteiro: ")

if ( entrada >= 0 && entrada % 2 === 0 ){
    valor = "positivo e par!"
}
else if(entrada >= 0 && entrada % 2 !== 0){
    valor = "positivo e impar!"
}
else if(entrada < 0 && entrada % 2 === 0){
    valor = "negativo e par!"
}
else if(entrada < 0 && entrada % 2 !== 0){
    valor = "negativo e impar"
}

console.log(`O número ${entrada} é ${valor}!`)