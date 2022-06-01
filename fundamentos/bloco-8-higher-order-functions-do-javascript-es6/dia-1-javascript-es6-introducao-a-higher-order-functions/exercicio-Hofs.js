
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const checarRespostas = (respostas, gabarito) => {
    
    const arrayRes = respostas
    const arrayGab = gabarito

    for(let res of arrayRes){
        return res
    };

    for(let gab of arrayGab){
        return gab
    };
    
    const pontuação = 0
    if (res == gab){
        pontuação+=1
    }else if(res !== gab){
        pontuação-=0.5
    }
    console.log (pontuação)
}

const hof = (respostas, gabarito, callback) => {

    return callback(respostas, gabarito)

};

hof(RIGHT_ANSWERS,STUDENT_ANSWERS,checarRespostas())

module.exports = {}
