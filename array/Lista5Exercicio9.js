let leia = require('readline-sync');

// Criando uma matriz 3x3 com valores de exemplo
let bloco = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let somaP;
let somaS;

// Percorrendo a matriz
for (let i = 0; i < bloco.length; i++) {
    for (let j = 0; j < bloco[i].length; j++) {
        // Aqui, você pode realizar qualquer operação com bloco[i][j]
        console.log(`Valor na posição (${i},${j}) é: ${bloco[i][j]}`);
    }

    }

     somaP = bloco[0][0] + bloco[1][1] + bloco[2][2];
     somaS = bloco[0][2] + bloco[1][1] + bloco[2][0];

        console.log(`\nElementos da Diagonal Principal:\n ${bloco[0][0]} ${bloco[1][1]} ${bloco[2][2]}`);
        console.log(`\nElementos da Diagonal Secundaria:\n ${bloco[0][2]} ${bloco[1][1]} ${bloco[2][0]}`);
        console.log(`\nSoma dos Elementos da Diagonal Principal\n ${somaP}`);
        console.log(`\n Soma dos Elementos da Diagonal Secundária:\n ${somaS}`);
