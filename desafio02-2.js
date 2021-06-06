/*O desafio é armazenar dados da empresa rocketseat
   e apresentá-los no seguinte formato:
"A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260"*/


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

