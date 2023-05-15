// 1 – Crie uma função que ligue e desligue o motor de um carro

const ligarDesligar = (estado) => {
    estado = estado === "ligado" ? `O motor está ligado` : `O motor está desligado`;
    return estado;
}

console.log(ligarDesligar("ligado"))

// 2 – Crie uma função que calcule a área de um círculo

const circleArea = (radius) => {
    const PI = 3.14;

    if(typeof radius !== 'number') {
      return 'O parâmetro radius deve ser um número';
    }
  
    let area = PI * (radius ** 2);
    return `Esta é a área do círculo: ${area}`;
  };

//   3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
  
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
  
    return result;
  }
  
  console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];