const leia = require('readline-sync');

let Animal;
let entrada;
let tipo;
let cadeia;

console.log("Descubra os tipos de animais de acordo com suas características! Favor não usar palavras com acento ");

entrada = leia.question("Vertebrado ou invertebrado? ");

if (entrada === "Vertebrado") {
    tipo = leia.question("\nAve ou Mamifero? ");
    if (tipo === "Ave") {
        cadeia = leia.question("\nCarnivoro ou Onivoro? ");
        if (cadeia === "Carnivoro") {
            Animal = "Águia";
        } else if (cadeia === "Onivoro") {
            Animal = "Pomba";
        } else {
            console.log("Digite um valor válido!");
        }
    } else if (tipo === "Mamifero") {
        cadeia = leia.question("\nOnivoro ou Herbivoro? ");
        if (cadeia === "Onivoro") {
            Animal = "Homem";
        } else if (cadeia === "Herbivoro") {
            Animal = "Vaca";
        } else {
            console.log("Digite um valor válido!");
        }
    } else {
        console.log("Digite um valor válido!");
    }
} else if (entrada === "invertebrado") {
    tipo = leia.question("\nInseto ou Anelideo? ");
    if (tipo === "Inseto") {
        cadeia = leia.question("\nHematofago ou Herbivoro? ");
        if (cadeia === "Hematofago") {
            Animal = "Pulga";
        } else if (cadeia === "Herbivoro") {
            Animal = "Lagarta";
        } else {
            console.log("Digite um valor válido!");
        }
    } else if (tipo === "Anelideo") {
        cadeia = leia.question("\nOnivoro ou Hematofago? ");
        if (cadeia === "Onivoro") {
            Animal = "Minhoca";
        } else if (cadeia === "Hematofago") {
            Animal = "Sanguessuga";
        } else {
            console.log("Digite um valor válido!");
        }
    } else {
        console.log("Digite um valor válido!");
    }
} else {
    console.log("Digite um valor válido!");
}


    console.log("\nO animal é: " + Animal);

