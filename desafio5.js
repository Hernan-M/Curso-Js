//Crie um programa para realizar operações bancárias
// na conta de um usuário.

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function saldoParcial(balance, number) {
    const saldo = Numero(balance)
    const debit = number
    return saldo - debit
}

function Numero(balance) {
    let soma = 0
    soma = balance
    return soma
}

function createTransaction(type, number) {

    if (!(type == 'credit')) {

        total = saldoParcial(user.balance, number)

        user.transactions.push('debit')
        console.log(user.transactions, total)

    } else {
        user.transactions.push('credit')
        total = saldoParcial(user.balance, number) * (-1)
        console.log(user.transactions, total)
    }
}


createTransaction('debit', 50.5)

