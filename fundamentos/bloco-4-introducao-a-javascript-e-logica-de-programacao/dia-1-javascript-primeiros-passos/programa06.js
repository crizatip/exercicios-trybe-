let piece = "Rei";

let piecelowercase = piece.toLowerCase(); //transforma texto em minusculo

switch(piecelowercase){
    case "bispo":
        console.log("Diagonal");
        break;
    
    case "peão":
        console.log("De 1 a 2 casas para frente");
        break;

    case "cavalo":
        console.log("movimentos em L pode pular peças");
        break;

    
    case "rainha":
        console.log("todas as direções quantas casas quiser");
        break;

    case "torre":
        console.log("Anda em linha reta quantas casas quiser");
        break;
    

    case "rei":
        console.log("uma casa em todas as direções");
        break;
        
    default: 
    console.log("ERRO") 
    break;  
}
