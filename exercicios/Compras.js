let leia = require('readline-sync')

console.log("Escolha o Produto: ");
console.log("\n Código do Produto: 1 - Cachorro Quente. Preço Unitário: R$ 10.00"); 
console.log(" Código do Produto: 2 - X-Salada. Preço Unitário: R$ 15.00"); 
console.log(" Código do Produto: 3 - X-Bacon. Preço Unitário: R$ 18.00"); 
console.log(" Código do Produto: 4 - Bauru. Preço Unitário: R$ 12.00"); 
console.log(" Código do Produto: 5 - Refrigerante. Preço Unitário: R$ 8.00"); 
console.log(" Código do Produto: 6 - Suco de Laranja. Preço Unitário: R$ 13.00"); 

let produto = leia.questionFloat("\nInsira o codigo do produto: ")
let qnt = leia.questionInt("\nInsira a quantidade: ")


switch(produto){

 case 1:
    produto = 10.00 * qnt;
    P = "Cachorro Quente";
    
    break;

case 2:
    produto = 15.00 * qnt;
    P = "x-Salada";
    break;

case 3:
    produto = 18.00 * qnt;
    P = "X-Bacon";
    break;
    
case 4:
    produto = 12.00 * qnt;
    P = "Bauru";
    break;
    
case 5:
    produto = 8.0 *qnt;
    P = "Refrigerante";
    break;
    
case 6:
    produto = 13.00 * qnt;
    P = "Suco de Laranja"
    break;    

}

console.log(P + ". Quantidade: "+ qnt + ". Valor Total: " + produto.toFixed(2))