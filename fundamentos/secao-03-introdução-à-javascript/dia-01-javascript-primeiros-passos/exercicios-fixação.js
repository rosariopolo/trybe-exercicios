// 1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 14
let b = 8

let adicao = a+b
let subtracao = a-b
let multiplicacao = a*b
let divisao = a/b 
let modulo = a%b

console.log(adicao)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)

// 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let menor = 15
let maior = 18

if (maior > menor){
    console.log("Esse numero é maior")
} else {
    console.log("Esse numero é menor")
}

// 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let aa = 8
let ab = 10
let ac = 12

if (aa > ab && aa > ac) {
    console.log("aa é o maior")
}else if(ab > aa && ab > ac) {
    console.log("ab é o maior")
}else {
    console.log("ac é o maior")
}

// 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

let xablau = 12

if (xablau > 0) {
    console.log("positive")
} else if(xablau < 0){
    console.log("negative")
} else {
    console.log("zero")
}

// 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let anguloA = 25;
let anguloB = 45;
let anguloC = 110;

let somaDosAngulos = anguloA+anguloB+anguloC;
let angulosSaoPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosSaoPositivos){
    if(somaDosAngulos === 180) {
        console.log("true")
    } else {
        console.log("false")
    }
} else {
    console.log("inválido")
}

// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaDeXadrez = "peão";

switch(pecaDeXadrez.toLowerCase()){
    case "rei": 
        console.log("Pode se mover em qualquer direção, porém apenas uma casa por vez.")
        break;
    case "rainha": 
        console.log("Pode se mover em qualquer direção, porém quantas casas quiser.")
        break;
    case "bispo": 
        console.log("Pode se mover na diagonal. quantas casas quiser.")
        break;
    case "torre": 
        console.log("Pode se mover tanto na vertical quanto na horizontal, quantas casas quiser.")
        break;
    case "cavalo": 
        console.log("Pode se mover em L tanto na horizontal quanto na vertical")
        break;
    case "peão": 
        console.log ("Pode se mover uma casa pra frente, exceto no primeiro movimento, quando pode mover-se duas casas.")
        break;
    default:
        console.log ("Erro.")
    
}

// 7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let porcentagem = 73;

if (porcentagem < 0 || porcentagem > 100){
    console.log("erro, nota incorreta")
}else if(porcentagem >= 90){
    console.log("A")
}else if(porcentagem >= 80){
    console.log("B")
}else if(porcentagem >= 70){
    console.log("C")
}else if(porcentagem >= 50){
    console.log("D")
}else if(porcentagem < 50){
    console.log("F")
}
   

// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

let n1 = 2;
let n2 = 5;
let n3 = 7;

let par = false;

if((n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0)){
    par = true;
}

console.log(par)
