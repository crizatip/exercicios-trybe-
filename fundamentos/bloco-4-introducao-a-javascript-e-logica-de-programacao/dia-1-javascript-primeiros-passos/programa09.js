//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

let num1 = 11;
let num2 = 21;
let num3 = 13;



const divisao1 = num1/2;
const divisao2 = num2/2;
const divisao3 = num3/2;


const test1 = divisao1%2;
const test2 = divisao2%2;
const test3 = divisao2%2;

if (test1 <= 0 || test2 <= 0 || test3 <= 0){
    console.log(false)
} else {
    console.log(true)
};

