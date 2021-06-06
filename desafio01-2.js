//Desafio da aposentadoria ultilizando regra 85-90
const nome = 'Silvana';
const sexo = 'H';
const idade = 70;
const contribuicao = 15;

//Mulher= 85 anos e Homem= 90 anos
calculo = contribuicao + idade

if(sexo === 'H' || calculo < 85){
    if( calculo > 84 ){
        console.log(`parabens ${nome} você foi aprovado(a)`)

    }else{ console.log(`infelizmente você não foi aprovado`)}

        }else{ console.log(`parabens ${nome} você foi aprovado(a)`)}