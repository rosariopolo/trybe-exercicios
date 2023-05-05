// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo.

let saldo = 300;

function somaSaldo(valor){
    return saldo + valor
}
function subtraiSaldo(valor){
    return saldo - valor
}

function multiplicaSaldo(valor){
    return saldo * valor
}

function dividiSaldo(valor){
    return saldo / valor
}

console.log (somaSaldo(20)) // 320
console.log (subtraiSaldo(20)) // 280
console.log (multiplicaSaldo(20)) // 6000
console.log (dividiSaldo(20)) // 15