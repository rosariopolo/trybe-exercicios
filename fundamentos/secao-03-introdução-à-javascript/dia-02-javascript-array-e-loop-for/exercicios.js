// Percorra o array imprimindo todos os valores contidos nele com a função console.log().

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}

// Some todos os valores contidos no array e imprima o resultado.
let result = 0;

for (let index = 0; index < numbers.length; index += 1) { 
    result += numbers[index];
}
console.log("O resutado da soma é: ", result)


// Calcule e imprima a média aritmética dos valores contidos no array.

let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
    media = result / numbers.length
}
// Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
 
 if (media > 20) {
    console.log("O valor da média aritmética é maior que 20")
} else {
    console.log("O valor da média aritmética é menor ou igual a 20")
}

// Utilizando for, descubra o maior valor contido no array e imprima-o.

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if(higherNumber < numbers[index]){
        higherNumber = numbers[index]
    }
}

console.log (higherNumber)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let odd = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) {
        odd += 1;
        } 
}
    if(odd === 0){
    
      console.log("Nenhum valor ímpar encontrado")
} else {
    console.log("Total de numeros impares encontrados são:",odd)
}
    
// Utilizando for, descubra o menor valor contido no array e imprima-o.

let lowestNumber = numbers[0];

for (let index = 1; index < numbers.length ; index += 1) {
  if(lowestNumber > numbers[index]){
    lowestNumber = numbers[index]
  }
} console.log("O menor valor do array é:", lowestNumber)

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let newArray = [];

for (let index = 1; index <= 25; index += 1) {
  newArray.push(index);
}

console.log(newArray)

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.


    console.log("Esses são os numeros da array nova divididos por 2:")
for (let index = 0; index < newArray.length; index += 1) {
    console.log(newArray[index] / 2)
}

// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let tenFatorial = 10;

for (let index = 1; index < 10; index += 1){
    tenFatorial *= index;
}
console.log("fatorial de 10 é:",tenFatorial)

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverseWord = ""
for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length-1-index];
}
console.log(reverseWord)

// Considere o array de strings abaixo:
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let highestWord = array[0];
let smallWord = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > highestWord.length) {
    highestWord = array[index];
  }
} 
console.log("A maior palavra desse array é:",highestWord)

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length < smallWord.length) {
    smallWord = array[index];
  }
}
console.log("A menor palavra desse array é:",smallWord)

// Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);




