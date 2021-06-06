//desafio do imc
const nome = 'Carlos';
const altura = 1.85;
const peso = 96;

imc = peso/(altura*altura);

if (imc >= 30){
    console.log(`${nome} você está acima do peso`)
}   else { console.log(`${nome}você não está acima do peso`)};
