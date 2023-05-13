// Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};
console.log ("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " de idade")

console.log ("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo " + player["bestInTheWorld"].length + " vezes.")

console.log ("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.")
