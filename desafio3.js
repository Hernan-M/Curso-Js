//Crie um programa que armazena um array de usuários (objetos), cada usuário 
//tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
    {nome:'Carlos',
    tecnologias: [
    'HTML',
    'CSS'
    ]},
    {nome:'Jasmine',
        tecnologias: [
        'JavaScript',
        'CSS'
    ]},
    {nome:'Tuane',
        tecnologias: [
        'HTML',
        'Node.JS'
    ]},
]

console.log(`    ${usuarios[0].nome} trabalha com ${usuarios[0].tecnologias}
    ${usuarios[1].nome} trabalha com ${usuarios[1].tecnologias}
    ${usuarios[2].nome} trabalha com ${usuarios[2].tecnologias}`)