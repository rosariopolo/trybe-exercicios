// Vamos fazer uma salada de frutas com os itens adicionais que você desejar.

// Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'kiwi', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'creme de leite', 'nutella'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));