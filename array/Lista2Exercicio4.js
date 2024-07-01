const leia = require('readline-sync');

let idades = [];
let soma = 0;
let backend = 0;
let mulhercistransfront = 0;
let homemcistransmobile = 0;
let naobinariofullstack = 0;
let total = 0;

while (true) {
    let idade = leia.questionInt("Idade: ");
    idades.push(idade);

    console.log("Identidade de Gênero: ");
    console.log("1 – Mulher Cis");
    console.log("2 – Homem Cis");
    console.log("3 – Não Binário");
    console.log("4 – Mulher Trans");
    console.log("5 – Homem Trans");
    console.log("6 – Outros");

    let genero = leia.questionInt("Escolha um valor: ");

    console.log("\nPessoa Desenvolvedora: ");
    console.log("1 – Backend");
    console.log("2 – Frontend");
    console.log("3 – Mobile");
    console.log("4 – FullStack");

    let dev = leia.questionInt("Escolha um valor: ");

    if (dev === 1) {
        backend++;
    }

    if ((genero === 1 || genero === 4) && dev === 2) {
        mulhercistransfront++;
    }

    if ((genero === 2 || genero === 5) && idade > 40) {
        homemcistransmobile++;
    }

    if ((genero === 3 || genero === 4) && idade < 30) {
        naobinariofullstack++;
    }

    total++;

    let pouc = leia.question("Deseja continuar a leitura dos dados de um novo colaborador (S/N)? ");
    if (pouc.toUpperCase() === 'N') {
        break;
    }
}

soma = idades.reduce((soma, idade) => soma + idade, 0);
let entradasIdade = idades.length;
let media = soma / entradasIdade;

console.log(`Número total de pessoas desenvolvedoras backend: ${backend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulhercistransfront}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homemcistransmobile}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${naobinariofullstack}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${total}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${media}`);
