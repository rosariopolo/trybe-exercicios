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

let porcentagem = 0.5;

if (porcentagem < 0 || porcentagem > 100){
    console.log("erro, nota incorreta")
} else if (porcentagem >= 90) {
    console.log("A")
} else if (porcentagem >= 80) {
    console.log("B")
} else if (porcentagem >= 70) {
    console.log("C")
} else if (porcentagem >= 50) {
    console.log("D")
} else if (porcentagem < 50) {
    console.log("F")
}
   

// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

let n1 = 2;
let n2 = 5;
let n3 = 7;



if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    par = true;
} else {
  par = false;
}

console.log(par)

// 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

// Bônus: use somente um if.



if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0) {
    impar = true;
} else {
  impar = false;
}

console.log(impar)

// 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

// Atente para o fato de que um imposto de 20% incide sobre o custo do produto.

// Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

let produtoCusto = 10;
let produtoComImposto = produtoCusto*0.2+produtoCusto;
let valorDeVenda = 20;

if (produtoCusto > 0 && valorDeVenda > 0) {
  let lucro = (valorDeVenda-produtoComImposto)*1000;
  console.log (lucro)
} else {
  console.log ("Erro.")
}

// 11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto
// Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00 terá o primeiro desconto referente à contribuição do INSS. O cálculo deve ser o demonstrado a seguir.
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:
// R$ 2.670,00 - salário com INSS já deduzido.
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25.
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.
// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// De olho na dica 👀: Que tal identificar as alíquotas com variáveis de nomes explicativos?

let salarioBruto = 3000;
let inss;
let irr;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
} 

let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  irr = salarioBase
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  irr = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  irr = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  irr = (salarioBase * 0.225) - 636.13;
} else {
  irr = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - irr;

console.log("O salario líquido será de:", salarioLiquido)









