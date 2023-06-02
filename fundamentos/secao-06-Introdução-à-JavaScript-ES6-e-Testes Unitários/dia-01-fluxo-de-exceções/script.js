// Primeira parte
const promo = [
  {product: 'bola de beach tennis', price: 29.99},
  {product: 'mochila de trilha 20 litros', price: 120.99},
  {product: 'capacete de ciclista', price: 180.59},
  {product: 'toalha compacta de secagem', price: 39.99},
  {product: 'kit 5 camisetas Dry Fit', price: 99.99},
  {product: 'caneleiras de peso - 3kg (par)', price: 44.99},
  {product: 'bola de ginástica e pilates', price: 149.59},
  {product: 'óculos de natação', price: 18.99},
  {product: 'capa protetora de prancha de surf', price: 89.59},
  {product: 'bola de basquete', price: 39.99},
];

const button = document.querySelector('#send-button');

button.addEventListener('click', () => {
  const name = document.querySelector('#name-id').value;
  const number = document.querySelector('#number-id').value;

  showPromo(name, number);
});

const showPromo = (name, number) => {
  const firstText = document.querySelector('#text-initial');
  const secondText = document.querySelector('#text-final');
  
  try {
    checkName(name);
    checkNumber(parseInt(number));
    checkValidRange(number);
    const productObject = checkPromo(number);

    firstText.innerHTML = `Boas-vindas, ${name}!`;
    secondText.innerHTML = `A promoção do dia é: 
      ${productObject.product} no valor de R$ ${productObject.price}`;
  } catch(err) {
    secondText.innerHTML = err.message;
  }
}

const checkName = (name) => {
  let letters = /[aA-zZ]+/;
  
  if (!name.match(letters)) {
    throw new Error('É necessário digitar um nome válido');
  }
}
// Segunda parte
const checkNumber = (number) => {
  if (isNaN(number)) {
    throw new Error('É necessário digitar um número');
  }
}

// Terceira parte
const checkPromo = (number) => {
  for (let index = 0; index < promo.length; index += 1) {
    if (number - 1 === index) {
      return promo[index];
    }
  }
}

const checkValidRange = (number) => {
  if (number < 1 || number > 10) {
    throw new Error("Só existem promoções nos numeros: 1 a 10");
  }
}
  

const averageStudent = (n1,n2,n3,n4) => {
  try {
    checkAverage(n1,n2,n3,n4);
    let sum = n1+n2+n3+n4;
    let media = sum / 4;
    return media;

  } catch (error) {
    return error.message;
  }

}
const checkAverage = (n1,n2,n3,n4) => {
  if (typeof n1 !== "number" || typeof n2 !== "number" || typeof n3 !== "number" || typeof n4 !== "number") {
    throw new Error("Digite a nota em numeros");
  }
}

console.log(averageStudent("8",4,3,5))