let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for(number of numbers){

// console.log(number);

// };

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let resultado = 0;

for(let i = 0; i < numbers.length; i+=1){

resultado = numbers[i] + resultado;

};

console.log(resultado);


// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.


let resultado2 = 0;

for(let i = 0; i < numbers.length; i+=1){

resultado2 = numbers[i] + resultado2;

};

let media = resultado2 / numbers.length;

console.log(media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
// Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(media > 20){
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
};

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = numbers[0];

for(let i = 1; i < numbers.length; i+=1){

    if(numbers[i] > maiorNumero){
        
        maiorNumero = numbers[i];
    };
};

console.log(maiorNumero);


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0

for(let i = 1; i < numbers.length; i+=1){

    if(numbers[i] % 2 !== 0){
        impar += 1;
    }else if (impar == 0){
        console.log("nenhum valor ímpar encontrado");
    };
};
console.log(impar);
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for(let i = 1; i < numbers.length; i+=1){

    if(numbers[i] < menorNumero){
        
        menorNumero = numbers[i];
    };
};

console.log(menorNumero);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array25 = [0];

for(let i = 1; i <= 25; i+=1){
array25.push(i);

};
console.log(array25);




// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .