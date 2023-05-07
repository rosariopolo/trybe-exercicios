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

// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.
// Copiar

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function novosClientes(cliente) {
    if (typeof cliente === "string") {
      clientesTrybeBank.push(cliente);
      return "Cliente adicionado(a) com sucesso"
    } else {
      return "Erro."
    }
} 
console.log (novosClientes("João"))
console.log (novosClientes(true));
console.log(clientesTrybeBank);

function removeClient(cliente) {
  let findedClient = false;
  if (typeof cliente === "string") {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if ( cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index,1);
        findedClient = true;
        return "Cliente removido(a) com sucesso."
      }

    }
    if (findedClient === false) {
      return "Cliente não encontrado(a)"
    }
  } else {
    return "Erro."
  }
}
console.log(removeClient(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeClient('Barney')); // Cliente não encontrada(o)
console.log(removeClient('Ada')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]
