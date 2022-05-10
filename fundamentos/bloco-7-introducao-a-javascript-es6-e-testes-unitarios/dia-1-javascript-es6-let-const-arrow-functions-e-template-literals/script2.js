const fatorial = numero => {

    
    let conter = numero

    

    for(index = 1 ; index < numero; index++){

        conter *= index
       
    };  

 let resultado = conter


    console.log(resultado)
};


fatorial(4)