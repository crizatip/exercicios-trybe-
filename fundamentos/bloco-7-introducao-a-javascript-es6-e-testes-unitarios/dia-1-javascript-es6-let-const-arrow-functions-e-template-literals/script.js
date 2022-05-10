///////////////////////// 1.exercicio /////////////////////////////////////////////

const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  };

  testingScope(true);

  ///////////////////////// 2.exercicio /////////////////////////////////////////////

  const comparacao = (a, b) => {return (a - b)}


  const oddsAndEvens = Array => Array.sort(comparacao);

  
console.log(oddsAndEvens([13, 3, 4, 10, 7, 2]));
