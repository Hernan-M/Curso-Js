//Crie um programa que armazena um array de usuários (objetos), cada usuário 
//tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
    {
        nome: 'Carlos',
        tecnologias:
            { t1: 'HTML', t2: 'CSS' }
    },
    {
        nome: 'Jasmine',
        tecnologias:
            { t1: 'JavaScript', t2: 'CSS' }
    },
    {
        nome: 'Tuane',
        tecnologias:
            { t1: 'HTML', t2: 'Node.JS' }
    }
]

function linguagem(user) {
    for (let i = 0; i < user.length; i++) {
        if (user[i].tecnologias.t1 == 'CSS' || user[i].tecnologias.t2 == 'CSS') {
            console.log(`O usuario ${user[i].nome} trabalha com CSS`)
        }
        else { console.log(`O usuario ${user[i].nome} não trabalha com CSS`) }
    }
}

linguagem(usuarios)