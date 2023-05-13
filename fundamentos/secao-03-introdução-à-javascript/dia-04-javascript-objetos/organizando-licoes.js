// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |


let nRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function romanos(string) {
    let tudo = Object.keys(string)
    let transformado = 0;

    for (let index in tudo) {
        tudo = index
        return index;
    }
}
function romanos