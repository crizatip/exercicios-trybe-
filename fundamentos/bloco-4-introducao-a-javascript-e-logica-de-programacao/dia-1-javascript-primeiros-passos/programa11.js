



// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

function calcularINSS(salario){
let valor = salario

    
    if( valor <= 1556.94){
        
        valor = valor - (valor * 0.08);
    
    } else if(valor <= 2594.92){
    
        valor = valor - (valor * 0.09);
    
    } else if(valor <= 5189.82){
    
        valor = valor - (valor * 0.11);
    
    } else {
    
        valor = valor - 570.88;
    
    };

return valor
}

let salarioDeduzidoInss = calcularINSS(3000)


// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.



function calcularIR(salario){
    let valor = salario

    if(valor <= 1903.98){
    
        console.log(`valor ${valor} é insento`)
       
    }else if(valor <= 2826.65){

        let aliquota = valor * 0.075;
        let inssFinal = aliquota - 142.80;

        valor = valor - inssFinal;

        console.log(valor)
   
    }else if(valor <= 3751.05){

        let aliquota = valor * 0.15;
        let inssFinal = aliquota - 354.80;
        valor = valor - inssFinal;

        console.log(valor)
    
    } else if(valor <= 4.664,68){

        let aliquota = valor * 0.225;
        let inssFinal = aliquota - 636.13;

        valor = valor - inssFinal;

        console.log(valor)
    } else {

        let aliquota = valor * 0.275;
        let inssFinal = aliquota - 869.36;

        valor = valor - inssFinal;

    }

        
}



calcularIR(salarioDeduzidoInss)