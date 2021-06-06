/* O desafio é armazenar dados da empresa rocketseat
   e apresentá-los no seguinte formato:
"A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260"*/

/*
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

console.log (`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)
*/

//Crie um programa com um objeto para armazenar dados de um 
//programador como nome, idade e tecnologias que trabalha.
//Frase: O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop


const programador = [
    {
       nome: 'Carlos',
       idade: 32 
    },
    {
        linguagem: 'C++',
        especialidade: 'Desktop'
    }
]

console.log(`O usuário ${programador[0].nome} tem ${programador[0].idade} anos e usa a tecnologia ${programador[1].linguagem} com especialidade em ${programador[1].especialidade}.`)